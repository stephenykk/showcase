function queryParse(str: string) {
    const qstr = str.split('?').pop() || ''
    if (!qstr) return {}

    const parts = qstr.split('&').filter(val => !!val)
    const result = {} as Obj
    parts.forEach((part: string) => {
        const [key, val = ''] = part.split('=')
        const value = decodeURIComponent(val)
        result[key] = value
    })

    return result
}

function queryStringify(data: Obj) {
    return Object.keys(data).reduce((qstr, key) => {
        const value = encodeURIComponent(data[key] ?? '')
        return qstr += `${key}=${value}&`
    }, '').replace(/&$/, '')
}


export {
    queryParse,
    queryStringify
}