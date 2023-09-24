
import { request, transToTree } from '@/utils'

export type CategoryItem = {
    category_id: string;
    include_in_menu: string;
    is_active: string;
    is_anchor: string;
    parent_id: string;
    path: string;
    title: string;
    isHover?: boolean;
    children?: Array<CategoryItem>;
}

export type CategoryVItem = CategoryItem & { count?: number }

export const getCategory = async () => {

    const res = await request.get<Array<CategoryItem>>('/category')
    const nodeFilter = (node: CategoryItem) => Number(node.is_active) === 1 && Number(node.include_in_menu) === 1
    const nodeCallback = (node: CategoryItem) => node.isHover = false
    const cateTree = transToTree(res.data, '2', nodeFilter, nodeCallback)
    console.log("🚀 ~ file: category.ts:19 ~ getCategory ~ cateTree:", cateTree)
    // return res.data;
    return cateTree;
}

export type CateProductItem = {
    category_name: string
    sku: string,
    product_id: string
}

export type CateProductsRes = {
    page_no: number
    limit: number
    result: Array<CateProductItem>
    total: number
}

export type Paging = {
    limit: number
    page_no: number
}

// 不支持分页参数 limit, 只能默认每页40条数据
export const getCateProducts = async (category_name: string, paging: Partial<Paging> = { page_no: 1 }) => {
    const res = await request.get<CateProductsRes>('/category_products', { params: { category_name, ...paging } })

    return res.data;

}

// https://services.dev.dropshipzone.com.au/api/dsz-api/cat_prod?page_no=1&limit=40
// ::: 没有数据?? {"result":{},"total":0,"total_pages":0,"current_page":1}
export const getCatesHasProduct = async (params: { page_no: number; limit: number } = { page_no: 1, limit: 40 }) => {
    const res = await request.get('/cat_prod', { params })

    return res.data
}

// getCatesHasProduct()
// getCategory()