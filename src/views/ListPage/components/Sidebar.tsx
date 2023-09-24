import { CategoryVItem } from "@/services"

type Props = {
    onSelectCategory: Fn
    selChildCategory: CategoryVItem
    categoryList: Array<{ category_id: string | number, title: string, count?: number }>
}
export default function Sidebar(props: Props) {
    const { categoryList = [], selChildCategory, onSelectCategory } = props


    return (

        <div className="col-left sidebar">
            <div className="block block-layered-nav">
                <div className="block-title">
                    <strong><span>SHOP BY</span></strong>
                </div>
                <div className="block-content">
                    <dl id="narrow-by-list">
                        <dt className="last odd">CATEGORY</dt>
                        <dd className="last odd">
                            <ol>
                                {
                                    categoryList.map((cate, index) => {
                                        return (
                                            <li onClick={() => onSelectCategory(cate)} key={index} className={cate.category_id === selChildCategory.category_id ? 'selected pointer' : 'pointer'}>
                                                {/* <a key={cate.category_id} href={`https://www.dropshipzone.com.au/brand.html?cat=${cate.category_id}`}>{cate.title}</a> */}
                                                <a key={cate.category_id}>{cate.title}</a>
                                                <span className="cat-countr">{cate.count != null && `(${cate.count})`}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </dd>
                    </dl>
                </div>
            </div>
            <div className="block block-list block-compare">
                <div className="block-title">
                    <strong><span>Compare Products </span></strong>
                </div>
                <div className="block-content">
                    <p className="empty">You have no items to compare.</p>
                </div>
            </div>
            <div className="block block-layered-nav">
                <div className="block-content">
                    <div className="left-column second-left">
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}