import { createLogger, deepCopy, getStyleObj, showLoading, toast } from "@/utils"
import Breadcrumbs from "./components/Breadcrumbs"
import React, { useCallback, useEffect, useRef, useState } from "react"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ProductList from "./components/ProductList"

import "./styles/index.scss";
import "./listPage.scss";
import { useCategoryInfo } from "@/hooks/useCategoryInfo"
import { CategoryVItem, getCateProducts, getProductBySkus } from "@/services"
import type { ProductVItem } from '@/services/product'
const logger = createLogger('ListPage')

function defPager() {
    return {
        filterType: '',
        sortType: '',
        descend: true, // 倒序 
        total: 0,
        pageSize: 40,
        pageNum: 1
    }
}

function ListPage() {
    const [childCategoryList, pageTitle] = useCategoryInfo()
    console.log("🚀 ~ file: ListPage.tsx:28 ~ ListPage ~ childCategoryList, pageTitle:", childCategoryList, pageTitle)
    // sidebar category data
    const [categoryList, setCategoryList] = useState(childCategoryList)
    // display product data
    const [products, setProducts] = useState([] as Array<ProductVItem>)

    const [selChildCategory, updateSelChildCategory] = useState({} as CategoryVItem)

    // paging data
    const [pager, setPager] = useState(defPager())

    const hideLoadingRef = useRef<null | Fn>(null)
    const timerRef = useRef(0)

    const [breadLinks, setBreadLinks] = useState([{ text: pageTitle }])

    const updateCounts = useCallback((categoryList: Array<CategoryVItem>) => {
        if (!categoryList.length) {
            return 0
        }

        /* 
        Maximum number of request in one minute : 60
        Maximum number of request in one hour : 600
        Dropshipzone - API Gateway will fail the limit-exceeding request and return error responses to the client.
        */

        //::: parallel request will easily cause limit-exceeding
        // const allCatePromise = Promise.all(categoryList.map((cate, index) => {
        //     return getCateProducts(cate.title)
        // }))

        // allCatePromise.catch(err => {
        //     logger.error('updateCounts error:', err);
        // })

        // const resList = await allCatePromise

        // const newCategoryList = [] as Array<CategoryVItem>
        // categoryList.forEach(async (cate, index) => {
        //     newCategoryList.push({ ...cate, count: resList[index].total })
        // })

        // setCategoryList(newCategoryList)


        //::: update count slowly one by one
        const cloneCategoryList = [...categoryList]
        const getProductCount = async (index: number) => {
            const promise = getCateProducts(categoryList[index].title)
            promise.catch(err => logger.warn('getCateProducts err', err));
            const res = await promise;
            cloneCategoryList[index].count = res.total ?? 0
            setCategoryList(deepCopy(cloneCategoryList) as CategoryVItem[])

            if (index < categoryList.length - 1) {
                timerRef.current = setTimeout(() => getProductCount(index + 1), 6 * 1000)
            }
        }

        getProductCount(0)

    }, [])


    useEffect(() => {
        setBreadLinks([{ text: pageTitle }])
        // 重新选择分类，重置子类选中状态
        selChildCategory.title = ''
        updateSelChildCategory({} as CategoryVItem)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageTitle])


    // 获取页面商品数据
    useEffect(() => {
        const title = selChildCategory.title || pageTitle
        console.log("🚀 ~ file: ListPage.tsx:105 ~ useEffect ~ title:", title)
        if (!title) return
        getCateProducts(title, { page_no: pager.pageNum }).then(async (res) => {
            if (!res.total) {
                toast.error(`Fail to fetch products of "${title}"`)
                return
            }
            const skus = res.result.map(el => el.sku);
            const promise = getProductBySkus(skus)
            promise.catch(err => {
                logger.error('getProductBySkus error:', err);
                toast.error('Get Product SKUS Fail');
                closeLoading()

            })
            const productData = await promise;
            const newProducts = productData.map(product => {
                return {
                    ...product,
                    galleryFirst: product.gallery[0] ?? '',
                    loginClew: 'Login for More Details',
                    FESaleIconText: '',
                    FEAddLinks: []
                }
            })
            setProducts(newProducts)
            setPager((pager) => ({ ...pager, total: res.total }))
            closeLoading()
        })

    }, [pageTitle, pager.pageNum, selChildCategory.title]);


    useEffect(() => {
        setCategoryList(childCategoryList)
        updateCounts(childCategoryList)
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [childCategoryList, updateCounts])


    const onSelectCategory = (cate: CategoryVItem) => {
        // 取消选中
        if (cate.category_id === selChildCategory.category_id) {
            cate = {} as CategoryVItem
        }
        hideLoadingRef.current = showLoading()
        setPager(defPager());
        updateSelChildCategory(cate)

        setTimeout(closeLoading, 5000);
    }

    const onFilter = (val: string) => {
        toast.success('Filter By ' + val)
        setPager((pager) => ({ ...pager, filterType: val }))
    }
    const onSort = (val: string) => {
        toast.success('Sort By ' + val)
        setPager((pager) => ({ ...pager, sortType: val }))
    }
    const onSortDir = (isDescend: boolean) => {
        // toast.success('Sort Direction ' + isDescend)
        setPager((pager) => ({ ...pager, descend: isDescend }))
        const reversed = products.slice().reverse()
        setProducts(reversed)
    }

    const onSize = (val: number) => {
        toast.success('Simulate Changing Page Size To ' + val)
        setPager((pager) => ({ ...pager, pageSize: val }))
        hideLoadingRef.current = showLoading()

        setTimeout(() => {
            closeLoading()
        }, 2000);
    }

    const closeLoading = () => {
        hideLoadingRef.current?.()
        hideLoadingRef.current = null
    }

    const onPaging = useCallback((val: number) => {
        hideLoadingRef.current = showLoading()
        // toast.success('Go To Page ' + val)
        setPager((pager) => ({ ...pager, pageNum: val }))
        setTimeout(closeLoading, 5 * 1000);
    }, [])


    const MemoProductList = React.memo(ProductList)

    return (
        <div className="list-page catalog-category-view">
            <div className="main-container col2-left-layout">
                <Breadcrumbs links={breadLinks} />
                <div className="main main-section">

                    <Sidebar {...{ categoryList, selChildCategory, onSelectCategory }} />

                    <div className="col-main">

                        <Toolbar {...{ onFilter, onSort, onSize, onPaging, pager, onSortDir }} />

                        <MemoProductList {...{ products, pageTitle }} />

                        <div className="toolbar-bottom">
                            <Toolbar {...{ onFilter, onSort, onSize, onPaging, pager, onSortDir }} />
                        </div>

                        <div className="response_msg" style={getStyleObj("margin-left: 0%; top: 210px;")}>
                            <div className="msg">response_msg</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ListPage