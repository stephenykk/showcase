import { createSlice } from '@reduxjs/toolkit'

import type { CategoryItem } from '@/services/category'
import { createLogger } from '@/utils'

const logger = createLogger('MainStore');

const initialState = {
    cateTree: {} as CategoryItem
}

const mainStore = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCateTree(state, action) {
            state.cateTree = action.payload
        },
        setHover(state, action) {
            const curCate = action.payload as CategoryItem & { hoverVal: boolean }
            const index = state.cateTree.children ? state.cateTree.children.findIndex(cate => cate.category_id === curCate.category_id) : -1
            if (index < 0) {
                logger.warn('can not found matched cate:', action)
                return
            }
            state.cateTree.children![index].isHover = curCate.hoverVal
        }
    }
})



export default mainStore;
