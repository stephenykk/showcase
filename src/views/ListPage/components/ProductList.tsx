import { getStyleObj } from "@/utils"

import type { ProductVItem } from '@/services/product'


type Props = {
    pageTitle: string
    products: Array<ProductVItem>
}

export default function ProductList(props: Props) {
    const { products, pageTitle } = props

    return (
        <>
            <div className="page-title category-title">
                <h1 style={getStyleObj("padding:0px;")}>{pageTitle}</h1>
            </div>

            <div className="category-products">
                <ul className="products-grid first last odd">
                    {
                        products.map(product => {
                            return (
                                <li className="item" key={product.entity_id ?? product.title}>
                                    <div className="img-box text-center">
                                        <img src={product.galleryFirst} width="190" height="190" alt={product.title} className="pointer" />
                                    </div>

                                    <h4 className="product-name">
                                        <div className="title max-lines-2">{product.title}</div>
                                        {
                                            product.loginClew && (
                                                <div className="clew-price">
                                                    <a href="https://www.dropshipzone.com.au/customer/account/login/">
                                                        {product.loginClew}
                                                    </a>
                                                </div>
                                            )
                                        }

                                    </h4>

                                    {
                                        product.FEAddLinks && product.FEAddLinks?.length > 1 && (
                                            <div className="actions">
                                                <ul className="add-to-links">
                                                    {
                                                        product.FEAddLinks.map(link => {
                                                            return (
                                                                <li>{link}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }


                                    <div className=""></div>
                                    {
                                        product.FESaleIconText && (
                                            <div className="product-sale-icon">
                                                <span className="default "> {product.FESaleIconText} </span>
                                            </div>
                                        )
                                    }

                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </>
    )
}