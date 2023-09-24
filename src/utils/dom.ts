import { FormEvent } from "react"
import { camelCase } from "./base"

export function toRem(num: number) {
    return `${num / 16}rem`
}

export function getInputChangeHandler(callback: Fn) {
    return (event: { target: any }) => {
        callback?.(event.target.value)
    }
}

export function getStyleObj(styleStr: string) {
    if (!styleStr.trim()) return {}

    const partList = styleStr.split(';').map(part => part.trim()).filter(val => !!val)
    return partList.reduce((obj, part) => {
        const [prop, val] = part.split(':').map(val => val.trim())
        const key = camelCase(prop).replace(/^-/, '');
        obj[key] = val
        return obj
    }, {} as Obj)
}

export function getAbsURL(path: string) {
    const { DSZ_PROD_URL } = import.meta.env
    if (/^(https?:)?\/\//.test(path)) {
        return path
    }
    if (path.startsWith('/')) {
        return DSZ_PROD_URL + path
    } else {
        const curPath = location.pathname.replace(/\/$/, '')
        let newPath = '/' + curPath + path.replace(/^\./, '')
        newPath = newPath.replace(/^\/\//, '/')
        return DSZ_PROD_URL + newPath
    }
}

export function preventSubmit(event: FormEvent) {
    return event.preventDefault()
}