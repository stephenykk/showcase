import { useSelector } from "react-redux"
import { useMounted } from "./useMounted"


import { RootState } from '@/store'
import { getCategory } from "@/services"
import { useActions } from "./useActions"
import { useEffect } from "react"


export function useAllCategories() {
    const mainState = useSelector<RootState, RootState['main']>(state => state.main)
    const userState = useSelector<RootState, RootState['user']>(state => state.user)
    const actions = useActions()

    const requestAllCategories = async () => {
        // isReady 
        if (mainState.cateTree.category_id) {
            return
        }

        const cateTree = await getCategory()
        actions.setCateTree(cateTree)
    }
    // no token, this effect
    useMounted(() => {
        if (userState.token) return
        requestAllCategories() // go login
    })

    // has token, this take effect
    useEffect(() => {
        if (!userState.token) return
        requestAllCategories()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userState.token])
}