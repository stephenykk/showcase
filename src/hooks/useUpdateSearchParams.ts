import { useSearchParams } from "react-router-dom";
import type { NavigateOptions } from 'react-router-dom'

export function useUpdateSearchParams() {
    const [_, setSearchParams] = useSearchParams()

    return function updateSearchParams(data: Obj = {}, navigateOptions: NavigateOptions = { replace: true }) {
        if (!Object.keys(data).length) return

        setSearchParams(searchParams => {
            Object.keys(data).forEach(key => {
                searchParams.set(key, data[key])
            })

            return searchParams
        }, navigateOptions)

    }
}