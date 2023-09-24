import { NavigateFunction, NavigateOptions } from 'react-router-dom'
import { queryStringify } from './querystring'

import type { CategoryItem } from '@/services/category'

let navigate: NavigateFunction


export function initNav(navFn: NavigateFunction) {
    navigate = navFn
}

export function goLogin(searchParams?: Obj, options: NavigateOptions = {} as NavigateOptions) {
    navigate({
        pathname: '/login',
        search: searchParams ? '?' + queryStringify(searchParams) : ''
    }, options)
}

export function goHome() {
    navigate('/')
}

export function goBack(n: number = -1) {
    navigate(n)
}

export function goForward(n: number = 1) {
    navigate(n)
}

export function goUrl(url: string) {
    window.location.href = url
}

export function goTo(path?: string) {
    if (!path) goHome()

    const [pathname, search] = path!.split(/\b(?=\?)/)
    navigate({
        pathname,
        search
    })
}


export function normalizeCateTitle(cate: CategoryItem) {
    const normalTitle = cate.title.trim().replace(/\s&\s/g, '-').replace(/\s/g, '_')
    return normalTitle
}

export function readableCateTitle(title: string) {
    const readableTitle = title.replace(/_/g, ' ').replace(/-/g, ' & ')
    return readableTitle
}

export function goListPage(cate: CategoryItem, searchParams?: Obj, state: Obj = {} as any) {
    const normalTitle = normalizeCateTitle(cate)
    navigate({
        pathname: '/list/' + normalTitle,
        search: searchParams ? '?' + queryStringify(searchParams) : ''
    }, { state })
}