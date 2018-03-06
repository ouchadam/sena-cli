import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as style from './style.css'

export const KioskView = ({ viewState }) => {
    if (viewState.isProvisioned) {
        console.log('WTF', 'We got animate')
        return <Animate><IframeView key={viewState.html} html={viewState.html} /></Animate>
    } else {
        return <UnprovisionedView id={viewState.id} />
    }
}

const Animate = ({ children }) => {
    return (
        <ReactCSSTransitionGroup
            transitionName="content"
            transitionEnter={true}
            transitionLeave={true}>
            {children}
        </ReactCSSTransitionGroup>
    )
}

const UnprovisionedView = ({ id }) => {
    return (
        <div className={style.root}>
            <div className={style.logo} >
                <LogoView />
            </div>
            <div className={style.text}>{id}</div>
        </div >
    )
}

const LogoView = () => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 -0.102 130 35"
            overflow="visible"
            enableBackground="new 0 -0.102 130 35"
            xmlSpace="preserve">
            <defs>
            </defs>
            <g>
                <path fill="#FFFFFF" d="M78.31,28.188c-3.229,0-5.848-2.617-5.848-5.846c0-1.451,0.53-2.777,1.406-3.8c-1.922-2.084-3.604-3.91-4.742-5.146v0c-0.797-0.864-1.331-1.443-1.492-1.615c-0.834-0.903-1.904-1.408-2.867-1.404c-0.585,0.003-1.141,0.168-1.686,0.568c-0.4,0.297-0.798,0.734-1.155,1.355c-0.23,0.443-0.529,1.084-0.68,1.46c-0.34,0.834-0.75,1.847-1.229,3.036c-0.479,1.189-0.958,2.378-1.436,3.567c-0.479,1.189-0.919,2.271-1.321,3.244s-0.695,1.661-0.88,2.062c-0.185-0.401-0.495-1.105-0.927-2.109s-0.918-2.162-1.458-3.475c-0.542-1.312-1.105-2.742-1.692-4.286c-0.333-0.878-0.697-1.855-1.043-2.814c-0.376-1.009-0.897-1.647-1.47-2.053c-0.575-0.404-1.22-0.586-1.89-0.587c-1.102-0.006-2.247,0.528-2.928,1.338c-0.225,0.264-0.744,0.864-1.43,1.652c-1.236,1.421-3.016,3.461-4.622,5.3c0.827,1.009,1.323,2.299,1.323,3.705c0,3.229-2.618,5.846-5.847,5.846s-5.846-2.617-5.846-5.846c0-3.229,2.617-5.847,5.846-5.847c1.125,0,2.174,0.318,3.065,0.867c0.231-0.264,0.464-0.532,0.7-0.802c1.375-1.575,2.803-3.21,3.851-4.417c-0.778-0.518-1.619-0.961-2.528-1.323c-1.592-0.632-3.283-0.949-5.074-0.949c-1.823,0-3.521,0.317-5.096,0.949c-1.576,0.634-2.958,1.506-4.147,2.618c-0.878,0.821-1.616,1.751-2.216,2.792c-0.089-0.233-0.186-0.462-0.296-0.684c-0.618-1.251-1.459-2.294-2.524-3.128c-1.066-0.833-2.318-1.467-3.753-1.899c-1.436-0.432-2.958-0.648-4.563-0.648c-1.638,0-3.167,0.216-4.587,0.648c-1.421,0.433-2.672,1.066-3.753,1.899c-1.082,0.834-1.931,1.876-2.548,3.128C0.309,16.796,0,18.226,0,19.831v14.317h7.459V21.545c0-3.213,1.452-4.818,4.356-4.818c1.39,0,2.455,0.394,3.197,1.182c0.741,0.787,1.112,2,1.112,3.637v12.604h7.459v-4.727c0.466,0.652,0.994,1.254,1.585,1.808c1.188,1.112,2.571,1.985,4.147,2.616c1.575,0.634,3.273,0.951,5.096,0.951c1.792,0,3.482-0.317,5.074-0.951c1.59-0.631,2.98-1.504,4.169-2.616c1.19-1.112,2.124-2.425,2.804-3.938c0.5-1.115,0.815-2.307,0.947-3.572c0.026,0.055,0.053,0.109,0.079,0.166c0.742,1.561,1.567,3.237,2.479,5.027c0.91,1.792,1.845,3.538,2.803,5.236h6.904c0.339-0.649,0.817-1.567,1.436-2.757c0.617-1.188,1.282-2.526,1.993-4.009c0.706-1.476,1.429-3.004,2.167-4.588c0.054,1.613,0.387,3.115,1.008,4.496c0.679,1.514,1.613,2.826,2.803,3.938s2.572,1.985,4.148,2.616c1.574,0.634,3.272,0.951,5.096,0.951c1.791,0,3.482-0.317,5.073-0.951c1.107-0.438,2.114-0.998,3.026-1.67c-1.326-1.441-2.953-3.209-4.691-5.096C80.77,27.777,79.588,28.188,78.31,28.188z M129.417,18.182c-0.389-1.451-0.941-2.671-1.658-3.66c-1.137-1.545-2.585-2.718-4.348-3.521c-1.764-0.803-3.719-1.205-5.871-1.205c-1.764,0-3.398,0.302-4.906,0.904c-0.844,0.337-1.622,0.751-2.34,1.238V0.695c-0.186-0.061-0.611-0.193-1.274-0.393C108.354,0.101,107.606,0,106.772,0c-1.175,0-2.117,0.248-2.827,0.741c-0.711,0.495-1.065,1.343-1.065,2.548v8.796c-0.609-0.5-1.359-1.072-2.525-1.529c-1.177-0.462-2.557-0.687-4.286-0.687c-1.575,0-3.058,0.301-4.448,0.903c-1.389,0.603-2.602,1.445-3.637,2.525c-0.09,0.094-0.176,0.192-0.264,0.29c-0.051-0.05-0.1-0.102-0.152-0.151c-1.19-1.112-2.58-1.984-4.171-2.618c-1.591-0.632-3.282-0.949-5.073-0.949c-1.823,0-3.521,0.317-5.096,0.949c-0.928,0.373-1.787,0.831-2.58,1.37c1.15,1.248,2.815,3.054,4.706,5.108c0.868-0.51,1.878-0.803,2.956-0.803c3.229,0,5.848,2.618,5.848,5.847c0,1.25-0.395,2.407-1.063,3.357c1.422,1.545,2.768,3.006,3.941,4.281c0.236,0.279,0.484,0.551,0.746,0.811c0.037,0.039,0.075,0.08,0.11,0.119c0.003-0.002,0.005-0.006,0.008-0.008c0.094,0.09,0.188,0.182,0.283,0.27c1.229,1.111,2.657,1.985,4.285,2.617c1.627,0.634,3.381,0.95,5.266,0.95c1.85,0,3.597-0.316,5.24-0.95c1.643-0.632,3.079-1.506,4.309-2.617c0.197-0.178,0.384-0.363,0.566-0.552c0.004,0.002,0.004,0.005,0.006,0.006l4.715-4.806c-0.721-0.974-1.148-2.176-1.148-3.479c0-3.229,2.618-5.847,5.848-5.847c3.229,0,5.846,2.618,5.846,5.847c0,3.229-2.617,5.846-5.846,5.846c-1.227,0-2.365-0.378-3.305-1.023l-4.783,4.877c0.821,0.729,1.74,1.323,2.758,1.779c1.344,0.603,2.778,0.903,4.302,0.903c1.673,0,3.056-0.285,4.146-0.857c1.09-0.571,1.905-1.136,2.442-1.69c0,0,0.041-0.044,0.04-0.049c0.098,0.896,0.422,1.51,0.992,1.92c0.686,0.494,1.597,0.742,2.732,0.742c0.808,0,1.531-0.101,2.174-0.301c0.643-0.202,1.054-0.333,1.233-0.395V23.325C130,21.348,129.804,19.634,129.417,18.182zM97.287,28.107c-3.185,0-5.767-2.582-5.767-5.766c0-3.186,2.582-5.767,5.767-5.767s5.767,2.582,5.767,5.767C103.054,25.525,100.472,28.107,97.287,28.107z"></path>
            </g>
            <circle fill="#F9A326" cx="34.398" cy="22.341" r="3.614"></circle>
            <circle fill="#F9A326" cx="78.31" cy="22.341" r="3.614"></circle>
            <circle fill="#F9A326" cx="117.269" cy="22.341" r="3.614"></circle>
        </svg >
    )
}

const frameStyle = {
    width: '100%',
    height: '100vh',
    border: 'none',
    position: 'absolute'
}

const toHtmlPage = (element) => {
    const HEAD = '<head><meta charset="utf-8"></head>'
    const STYLE = '<style>body { margin: 0; }</style>'
    return `<!doctype html><html>${HEAD}${STYLE}<body>${element}</body></html>`
}

const IframeView = ({ html }) => (
    <object
        data={`data:text/html,${encodeURIComponent(toHtmlPage(html))}`}
        style={frameStyle}
        ref={(iframe) => { this.iframe = iframe; }} />
)

