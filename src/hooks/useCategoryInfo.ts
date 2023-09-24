
import { RootState } from "@/store"
import { createLogger, deepCopy, readableCateTitle } from "@/utils"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

import type { CategoryItem } from '@/services/category'
import { useMemo, useRef } from "react"

const logger = createLogger('useCategoryList')

export function useCategoryInfo(): [Array<CategoryItem>, string] {
    const mainState = useSelector<RootState, RootState['main']>(state => state.main)
    const { cateTree } = mainState
    const { category: title } = useParams()
    const treeData = useRef(null as unknown as CategoryItem)

    if (cateTree.category_id && !treeData.current) {
        treeData.current = deepCopy(cateTree) as CategoryItem
    }

    const result = useMemo(() => {
        let pageTitle = ''
        let childCategories = [] as Array<CategoryItem>
        if (!title || !cateTree.category_id) {
            logger.warn('url not include title part :', location.href)
            pageTitle = ''
        } else {
            const rawTitle = readableCateTitle(title)
            const secondCate = treeData.current.children?.find(cate => cate.title.trim() === rawTitle)
            logger.info('rawTitle:', rawTitle, 'secondCate', secondCate)

            childCategories = secondCate && secondCate.children || [] as Array<CategoryItem>
            pageTitle = rawTitle
        }

        return [childCategories, pageTitle] as [Array<CategoryItem>, string]
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, cateTree.category_id])

    return result
}