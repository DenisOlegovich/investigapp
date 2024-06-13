import 'react'

// for set css variables in style attribute
type CustomCssVariablesProp = { [key in `--${string}`]: string }
declare module 'react' {
    export interface CSSProperties extends CustomCssVariablesProp {}
}
