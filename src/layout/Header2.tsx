import { getStyleObj, goListPage } from "@/utils"
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from '@/store'
import { useActions } from "@/hooks";
import { CategoryItem } from "@/services";


function Header2() {

    const [isDropdown, setDropdown] = useState(false)
    const actions = useActions()
    const mainState = useSelector<RootState, RootState['main']>(state => state.main);
    const { cateTree } = mainState
    const toggleDropdown = (isShow?: boolean) => {
        setDropdown(isShow ?? !isDropdown)
    }

    const handleCateLinkClick = (cate: CategoryItem, event: any) => {
        event.stopPropagation()
        setDropdown(false)
        goListPage(cate)
    }

    return (
        <div id="header-2" className="bg-3B1364">
            <div className="content-header row">

                <div className="col" id="category-mega-menu">
                    <header>
                        <div className="cd-dropdown-wrapper">
                            <nav className="nav-bar">
                                <ul className="nav-menu">
                                    <li className="nav-item top-category-item">
                                        <a className={"cd-dropdown-trigger " + (isDropdown ? 'dropdown-is-active' : '')} onClick={() => toggleDropdown()}>
                                            <span className="top_level_dom">CATEGORIES</span>
                                        </a>
                                        <div className={"cd-dropdown " + (isDropdown ? 'dropdown-is-active' : '')}>
                                            <h2>Categories</h2>
                                            <a href="#0" className="cd-close">Close</a>

                                            <ul className="cd-dropdown-content">


                                                {/* <li id="item-59" className=" first first">

                                                    <a className="" target="_self"
                                                        href="https://www.dropshipzone.com.au/categories/new-arrivals.html">
                                                        <span className="">NEW ARRIVALS</span>
                                                    </a>

                                                </li>

                                                <li id="item-139" className="">

                                                    <a className="" target="_self"
                                                        href="https://www.dropshipzone.com.au/categories/promotion.html">
                                                        <span className="">PROMOTION</span>
                                                    </a>

                                                </li>

                                                <li id="item-142" className="">

                                                    <a className="" target="_self"
                                                        href="https://www.dropshipzone.com.au/categories/3d.html">
                                                        <span className="">3D AR VIEWING</span>
                                                    </a>

                                                </li> */}

                                                {
                                                    cateTree.children?.map(cate => {
                                                        return (
                                                            <li key={cate.category_id} id={"item-" + cate.category_id} className={cate.children?.length ? "pointer has-children" : 'pointer'} onMouseEnter={() => actions.setHover({ ...cate, hoverVal: true })} onMouseLeave={() => { actions.setHover({ ...cate, hoverVal: false }) }}>

                                                                <a onClick={handleCateLinkClick.bind(null, cate)}>
                                                                    <span className="">{cate.title}</span>
                                                                </a>
                                                                {
                                                                    cate.children?.length && (
                                                                        <ul className={"cd-dropdown-icons is-hidden " + (cate.isHover ? 'is-active' : '')}>
                                                                            <li key="First" className="go-back"><a href="#0">Back</a></li>
                                                                            {
                                                                                cate.children.map(childCate => {
                                                                                    return (
                                                                                        <li key={childCate.category_id} className="pointer">
                                                                                            <a onClick={handleCateLinkClick.bind(null, childCate)}><span>{childCate.title}</span></a>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    )
                                                                }
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </li>

                                    {/* <li className="nav-item additional-nav-item">

                                        <a className="" target="_self" href="https://web.dropshipzone.com.au/sell">
                                            <span className="">SELL</span>
                                        </a>

                                    </li>

                                    <li className="nav-item additional-nav-item">

                                        <a className="" target="_self" href="https://web.dropshipzone.com.au/supply">
                                            <span className="">SUPPLY</span>
                                        </a>

                                    </li>

                                    <li className="nav-item additional-nav-item">

                                        <a className="" target="_self" href="https://www.dropshipzone.com.au/blog">
                                            <span className="">LEARN</span>
                                        </a>

                                    </li>

                                    <li className="nav-item additional-nav-item">

                                        <a className="" target="_self" href="https://www.dropshipzone.com.au/contact-us">
                                            <span className="">SUPPORT</span>
                                        </a>

                                    </li>

                                    <li className="nav-item normal-nav-item ">

                                        <a className="" target="_self" href="https://www.dropshipzone.com.au/new-arrivals.html">
                                            <span className="">New arrivals</span>
                                        </a>

                                    </li>

                                    <li className="nav-item normal-nav-item ">

                                        <a className="" target="_self" href="https://www.dropshipzone.com.au/promotion.html">
                                            <span className="">Promotions</span>
                                        </a>

                                    </li> */}

                                </ul>
                            </nav>


                        </div>
                    </header>
                </div>
                <div className=" col" id="top-search">


                    <div className="row height d-flex justify-content-center align-items-center">
                        <form id="search_form" action="https://www.dropshipzone.com.au/catalogsearch/result/" method="get" className="SearchClose">
                            <div className="col-lg-8 col-sm-12 ml-auto" style={getStyleObj('padding-right:0px;')}>

                                <div className="search">
                                    <i className="fa fa-search"></i>
                                    <input id="search" type="text" name="q" maxLength={128} autoComplete="off" />
                                    <input id="search_key" type="hidden" name="_v" defaultValue="MjAyMy0wOS0yMjIwMjMtMDktMjI=" className="input-text SearchInput" maxLength={128} />
                                    {/* <!--<button type="submit" className="btn btn-primary">Search</button>--> */}
                                    <div id="search_suggestion" style={getStyleObj('display: none;')}></div>
                                    {/* <!--Prompt for enabling AI search function flag start--> */}
                                    <div id="search_feature">
                                        <div className="search_ai_dom">
                                            <div className="search_ai_main">
                                                <div className="search_ai_header">
                                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/sparkles.svg" alt="" />
                                                    <span className="search_ai_title">DROPSHIPZONE AI SEARCH</span>
                                                    <img className="search_ai_close" src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/search_ai_close.svg" alt="" />
                                                </div>
                                                <div>
                                                    <span className="search_ai_content">Find exactly what. Try something like: "Best
                                                        products to start dropshipping" or "Couches with free shipping"</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Header2;
