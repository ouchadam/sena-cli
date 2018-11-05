const tmp = require('tmp')
tmp.setGracefulCleanup();
const fs = require('fs-extra')
const path = require('path')

module.exports = (pluginPath, additionalDependencies) => {
    console.log('bundling', pluginPath)

    tmpDir = tmp.dirSync({
        unsafeCleanup: true
    })
    fs.mkdirSync(`${tmpDir.name}/plugin`)

    console.log('copying plugin')
    const filter = (src) => {
        return src === pluginPath || src.includes('lib')
    }
    fs.copySync(pluginPath, `${tmpDir.name}/plugin`, { filter: filter })

    console.log('copying template')

    const templatePath = path.join(__dirname, '../template-bundle')

    const pluginPackage = fs.readJsonSync(`${pluginPath}/package.json`)
    const templatePackage = fs.readJsonSync(`${templatePath}/package.json`)

    const moduleDependencies = { ...pluginPackage.dependencies, ...templatePackage.dependencies }

    const deployPackage = { ...templatePackage, dependencies: moduleDependencies }

    fs.writeJsonSync(`${tmpDir.name}/package.json`, deployPackage)
    fs.copyFileSync(`${templatePath}/index.js`, `${tmpDir.name}/index.js`)
    fs.copyFileSync(`${templatePath}/dependency-generator.js`, `${tmpDir.name}/dependency-generator.js`)

    const outputDir = `${process.cwd()}/dist`

    fs.removeSync(outputDir)
    fs.mkdirSync(outputDir)

    console.log('exporting to dist')
    fs.copySync(tmpDir.name, outputDir)

    tmpDir.removeCallback()
}
