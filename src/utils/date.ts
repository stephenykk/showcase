
export function formatDate(date = new Date(), sep = '-', withTime = true) {
    const d2 = (val: string | number) => ('00' + val).slice(-2)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const dateStr = [year, d2(month), d2(day)].join(sep)

    let result = dateStr
    if (withTime) {
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        const timeStr = [d2(hour), d2(minute), d2(second)].join(':')
        result += 'T' + timeStr
    }

    return result
}