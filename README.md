## sena-cli

A `sena` plugin cli for local development and deployment.

## Usage

Install sena-cli as a global dependency.

```bash
npm install sena-cli -g 
```

Bootstrap a new plugin

```bash
sena init "awesome-plugin"
```

Run a plugin

```bash
cd awesome-plugin
npm install
sena run
```

## Options

```bash
init <name>
``` 

Bootstraps a new plugin with the given name.

```bash
run <optional path>
```

Runs the plugin in a local server at `localhost:5000|port`

The path is optional, if not supplied then the current directory is used. 

```bash
-p --port
```

The local server port, defaults to 5000. 

```bash
-w --watch
```

Enables watching the plugin module for changes and automatically requerying the plugin.

```bash
-c <path> --config
```

The path to a JSON configuration which will be used to query the plugin with. If the config path is not supplied `sena` will attempt to find a `config.json` in the plugin directory.

The JSON must be in the following format: 

```JSON
{
    "first_name": {
        "value": "James"
    },
    "last_name": {
        "value": "Bond"
    }
} 
```
