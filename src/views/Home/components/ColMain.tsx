import { getStyleObj, goUrl } from "@/utils"


export default function ColMain() {
    return (
        <div className="col-main">
            <div className="std">
                <p>&nbsp;</p>
            </div>
            <div className="UsellVship">
                <h1 style={getStyleObj(" text-align: center; font-size: 35px; font-family: 'nexa_bold'; margin-bottom: 20px; color: #404040; ")}>
                    Australia’s leading B2B2C marketplace
                </h1>
                <div style={getStyleObj("justify-content: center")}>
                    <div style={getStyleObj("font-size: 18px; text-align: center")}>
                        <p style={getStyleObj(" width: 80%; display: inline-block; text-align: justify; ")}>
                            When it's time to start or scale with ecommerce,
                            Dropshipzone is the smarter way. Launched in
                            Melbourne in 2012, we’ve since created an
                            ecosystem that connects Aussie suppliers,
                            retailers and customers.
                        </p>
                    </div>
                </div>
                <div style={getStyleObj("display: flex; justify-content: center")}>
                    <div style={getStyleObj("font-size: 18px; text-align: center")}>
                        <p style={getStyleObj(" width: 80%; display: inline-block; text-align: justify; ")}>
                            As a cutting-edge dropship provider for the
                            Australian market, Dropshipzone takes the stress
                            out of dropshipping and hassle out of wholesale.
                            Scale without holding inventory. Wholesale with
                            ease. Spend less time worrying about sales. More
                            time achieving scale. With Dropshipzone, it’s
                            easy to build the ecommerce business of your
                            dreams.
                        </p>
                    </div>
                </div>
                <div style={getStyleObj(" display: flex; justify-content: center; margin-bottom: 20px; ")}>
                    <div style={getStyleObj("font-size: 18px; text-align: center")}>
                        <p style={getStyleObj(" width: 80%; display: inline-block; text-align: justify; ")}>
                            We offer thousands of trending products across
                            hundreds of product categories from brands
                            including Artiss, Giselle Bedding, Devanti,
                            Keezi, Everfit, i.Pet, Cefito, Rigo, Weisshorn,
                            and more. Whether you’re searching for dropship
                            suppliers in Melbourne, Sydney, Brisbane or
                            Perth, we offer quality customer service
                            Australia-wide, with a dedicated team of account
                            managers ready to support your needs.
                            <a style={getStyleObj("color: #942ffb")} href="https://www.dropshipzone.com.au/customer/account/create/">Get started</a>
                            with Dropshipzone today!
                        </p>
                    </div>
                </div>
                <span className="PageTitle" style={getStyleObj("display: none")}>
                    You Sell. We Ship.
                </span>
                <div id="dplayer" style={getStyleObj("display: none")}>&nbsp;</div>
                <ul className="UVboxWrapers">
                    <li className="UVBoxWrap StartOwn">
                        <h3 className="UVH3">
                            Start Your Own <br />
                            Online Business.
                        </h3>
                    </li>
                    <li className="UVBoxWrap StartCost">
                        <h3 className="UVH3">
                            Remarkably Low <br />
                            Starting Costs.
                        </h3>
                    </li>
                    <li className="UVBoxWrap NoInvent">
                        <h3 className="UVH3">
                            No Inventory, <br />
                            No Worries.
                        </h3>
                    </li>
                    <li className="UVBoxWrap Nopackage">
                        <h3 className="UVH3">
                            From Ship It<br />
                            To Shop It.
                        </h3>
                    </li>
                </ul>
                <div className="clearfix">&nbsp;</div>
            </div>
            <div className="OurFeature container">
                <span className="PageTitle"> MAKE SHIP HAPPEN. </span>
                <div className="owl-carousel FeatureSlider clearfix owl-theme owl-hidden owl-loaded">




                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={getStyleObj(" transform: translate3d(-19.998px, 0px, 0px); transition: all 1.5s ease 0s; width: 59.994px; ")}>
                            <div className="owl-item cloned" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/Prompt-Delivery.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon11"></span>
                                            <h3>
                                                No inventory, no worries
                                            </h3>
                                            <p>
                                                Free up working capital tied
                                                to holding physical
                                                inventory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider4.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon12"></span>
                                            <h3>Tech integration</h3>
                                            <p>
                                                Connect your online store
                                                instantly with product,
                                                inventory and order syncing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/Prompt-Delivery.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon14"></span>
                                            <h3>Buy in bulk</h3>
                                            <p>
                                                Bulk buy and save with
                                                wholesale purchases
                                                delivering additional
                                                discounts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider1.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon1"></span>
                                            <h3>Easy to use</h3>
                                            <p>
                                                Place orders anytime,
                                                anywhere from a 24/7
                                                self-serve portal and mobile
                                                app
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider2.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon2"></span>
                                            <h3>
                                                Instant access to products
                                            </h3>
                                            <p>
                                                Search products by keyword,
                                                category, popularity, and
                                                more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider4.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon4"></span>
                                            <h3>Thousands of products</h3>
                                            <p>
                                                Discover high-quality
                                                products from reliable
                                                Australian suppliers with
                                                fast shipping.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item active" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider5.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon5"></span>
                                            <h3>Dedicated team</h3>
                                            <p>
                                                Get personalised and prompt
                                                support from a dedicated
                                                team of account managers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item active" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider6.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon6"></span>
                                            <h3>Competitive terms</h3>
                                            <p>
                                                Access products directly
                                                from manufacturers without a
                                                minimum order quantity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item active" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/Inventory-List.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon7"></span>
                                            <h3>Daily updates</h3>
                                            <p>
                                                Keep up to date on pricing,
                                                delivery fees and inventory
                                                levels with a daily data
                                                feed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item active" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/Prompt-Delivery.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon8"></span>
                                            <h3>Fast delivery</h3>
                                            <p>
                                                Benefit from market-leading
                                                courier rates and fast
                                                shipping direct to your
                                                customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/DSZ-Deals.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon9"></span>
                                            <h3>Access promotions</h3>
                                            <p>
                                                Unlock deals exclusive to
                                                Dropshipzone on new arrivals
                                                and trending products.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider6.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon10"></span>
                                            <h3>Low setup cost</h3>
                                            <p>
                                                Sign up to Dropshipzone for
                                                free and instantly grow your
                                                digital inventory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/Prompt-Delivery.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon11"></span>
                                            <h3>
                                                No inventory, no worries
                                            </h3>
                                            <p>
                                                Free up working capital tied
                                                to holding physical
                                                inventory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider4.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon12"></span>
                                            <h3>Tech integration</h3>
                                            <p>
                                                Connect your online store
                                                instantly with product,
                                                inventory and order syncing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/Prompt-Delivery.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon14"></span>
                                            <h3>Buy in bulk</h3>
                                            <p>
                                                Bulk buy and save with
                                                wholesale purchases
                                                delivering additional
                                                discounts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider1.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon1"></span>
                                            <h3>Easy to use</h3>
                                            <p>
                                                Place orders anytime,
                                                anywhere from a 24/7
                                                self-serve portal and mobile
                                                app
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider2.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon2"></span>
                                            <h3>
                                                Instant access to products
                                            </h3>
                                            <p>
                                                Search products by keyword,
                                                category, popularity, and
                                                more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={getStyleObj("width: 0px; margin-right: 10px")}>
                                <div className="item">
                                    <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/feature-slider4.jpg" alt="" />
                                    <div className="FeatureContnt">
                                        <div className="FeatureMaxWdth">
                                            <span className="icon4"></span>
                                            <h3>Thousands of products</h3>
                                            <p>
                                                Discover high-quality
                                                products from reliable
                                                Australian suppliers with
                                                fast shipping.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-controls">
                        <div className="owl-nav">
                            <div className="owl-prev" style={getStyleObj("")}>prev</div>
                            <div className="owl-next" style={getStyleObj("")}>next</div>
                        </div>
                        <div className="owl-dots" style={getStyleObj("")}>
                            <div className="owl-dot"><span></span></div>
                            <div className="owl-dot active"><span></span></div>
                            <div className="owl-dot"><span></span></div>
                            <div className="owl-dot"><span></span></div>
                        </div>
                    </div>
                </div>
                <center>
                    <a className="ViewALLFeatr" href="https://www.dropshipzone.com.au/how-dropshipzone-works/">
                        View ALL
                    </a>
                </center>
            </div>

            <div className="featured-products PopProducts container">
                <span className="PageTitle"> Popular Products. </span>
                <div className="products-grid even category-products owl-carousel PopularSlider clearfix">
                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/photo-frame-clock-picture-collage-12-p-display-wall-clock-photowall-home-decor.html" title="Photo Frame Clock Picture Collage 12-P Display Wall Clock Photowall Home Décor">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/80c11763aa7f429104b50efa6b7db27d/V/6/V63-835581-612fd487d3705.1000x1000-00.png" width="190" height="190" alt="Photo Frame Clock Picture Collage 12-P Display Wall Clock Photowall Home Décor" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/photo-frame-clock-picture-collage-12-p-display-wall-clock-photowall-home-decor.html" title="Photo Frame Clock Picture Collage 12-P Display Wall Clock Photowall Home Décor)">
                                    Photo Frame Clock Picture Collage 12-P
                                    Display Wall ...
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/gominimo-led-clip-book-light-15-led.html" title="GOMINIMO LED Clip Book Light 15 LED">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/c11ee9834806fdb3c5fec8842a130dcb/V/2/V227-3720402111631-66635-00.png" width="190" height="190" alt="GOMINIMO LED Clip Book Light 15 LED" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/gominimo-led-clip-book-light-15-led.html" title="GOMINIMO LED Clip Book Light 15 LED)">
                                    GOMINIMO LED Clip Book Light 15 LED
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/wanderlite-3pc-luggage-sets-suitcases-set-travel-hard-case-lightweight-black.html" title="Wanderlite 3pcs Luggage Trolley Set Travel Suitcase Hard Case Carry On Bag Black">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/cd48f84ba8ead0543ef30d73400ce687/L/U/LUG-ABS-ECO-3SET-BK-18259-00.jpg" width="190" height="190" alt="Wanderlite 3pcs Luggage Trolley Set Travel Suitcase Hard Case Carry On Bag Black" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/wanderlite-3pc-luggage-sets-suitcases-set-travel-hard-case-lightweight-black.html" title="Wanderlite 3pcs Luggage Trolley Set Travel Suitcase Hard Case Carry On Bag Black)">
                                    Wanderlite 3pcs Luggage Trolley Set
                                    Travel Suitcase ...
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/10-pack-aroma-diffuser-oils-aromatherapy-fragrance-10ml-gift-pack-10-pack-maroon.html" title="10 Pack Aroma Diffuser Oils Aromatherapy Fragrance 10ml Gift Pack">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/75be552a90770590b4cab199d9c067d5/V/1/V160-501850-01_10.jpg" width="190" height="190" alt="10 Pack Aroma Diffuser Oils Aromatherapy Fragrance 10ml Gift Pack" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/10-pack-aroma-diffuser-oils-aromatherapy-fragrance-10ml-gift-pack-10-pack-maroon.html" title="10 Pack Aroma Diffuser Oils Aromatherapy Fragrance 10ml Gift Pack)">
                                    10 Pack Aroma Diffuser Oils Aromatherapy
                                    Fragrance 1...
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/tool-kit-for-dyson-cy22-and-cy23-cinetic-big-ball.html" title="Tool Kit for Dyson CY22 and CY23 Cinetic Big Ball">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/bb3fe9d0542d44695c3f94dbe99a4946/V/4/V424-KIT-CY22TOOLKIT-75012-00.jpg" width="190" height="190" alt="Tool Kit for Dyson CY22 and CY23 Cinetic Big Ball" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/tool-kit-for-dyson-cy22-and-cy23-cinetic-big-ball.html" title="Tool Kit for Dyson CY22 and CY23 Cinetic Big Ball)">
                                    Tool Kit for Dyson CY22 and CY23 Cinetic
                                    Big Ball
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/artiss-office-chair-veer-drafting-stool-mesh-chairs-flip-up-armrest-black.html" title="Artiss Office Chair Veer Drafting Stool Mesh Chairs Flip Up Armrest Black">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/db0006343ce973620963a4950a594525/O/C/OCHAIR-G-RING-2003-BK-18208-00.jpg" width="190" height="190" alt="Artiss Office Chair Veer Drafting Stool Mesh Chairs Flip Up Armrest Black" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/artiss-office-chair-veer-drafting-stool-mesh-chairs-flip-up-armrest-black.html" title="Artiss Office Chair Veer Drafting Stool Mesh Chairs Flip Up Armrest Black)">
                                    Artiss Office Chair Veer Drafting Stool
                                    Mesh Chairs ...
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/40pcs-clear-shoe-storage-box-transparent-foldable-stackable-boxes-organize-home.html" title="Artiss Set of 40 Clear Shoe Box Transparent Foldable Shoe Storage Stackable Case">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/bdb685e595a8a7f57d9079fc48ff894b/S/H/SHOEBOX-PP-20X2-00.jpg" width="190" height="190" alt="Artiss Set of 40 Clear Shoe Box Transparent Foldable Shoe Storage Stackable Case" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/40pcs-clear-shoe-storage-box-transparent-foldable-stackable-boxes-organize-home.html" title="Artiss Set of 40 Clear Shoe Box Transparent Foldable Shoe Storage Stackable Case)">
                                    Artiss Set of 40 Clear Shoe Box
                                    Transparent Foldable...
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div className="item">
                        <a href="https://www.dropshipzone.com.au/jingle-jollys-christmas-lights-led-light-santa-1-2m-motif-3d-decoration-outdoor.html" title="Jingle Jollys Christmas Lights LED Light Santa 1.2M Motif 3D Decoration Outdoor">
                            <img className="product-img" src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/3a5b6a5862e6c0c368727e5e08907ce3/X/M/XMAS-MOT-SANTA-4FT-WARM-89810-00.jpg" width="190" height="190" alt="Jingle Jollys Christmas Lights LED Light Santa 1.2M Motif 3D Decoration Outdoor" />
                        </a>
                        <div className="product-description">
                            <h4 className="product-name">
                                <a href="https://www.dropshipzone.com.au/jingle-jollys-christmas-lights-led-light-santa-1-2m-motif-3d-decoration-outdoor.html" title="Jingle Jollys Christmas Lights LED Light Santa 1.2M Motif 3D Decoration Outdoor)">
                                    Jingle Jollys Christmas Lights LED Light
                                    Santa 1.2M ...
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div style={getStyleObj("background: #f9f6f3; width: 100%")}>
                <div id="carousel">
                    <div className="carousel-child">
                        <div className="carousel-title">
                            SELL BY TRENDING PRODUCTS
                        </div>
                        <div className="carousel-line d-none d-sm-block-custom"></div>
                        <div className="d-none d-sm-block-custom" style={getStyleObj("margin-left: 1%; margin-top: 12px")}>
                            <div style={getStyleObj("display: flex")}>
                                <div className="swiper-button-prev"></div>
                                <div>&nbsp;&nbsp;</div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper swiper-3d">
                        <div className="swiper-wrapper pro-swiper-dom">
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/artiss-office-chair-veer-drafting-stool-mesh-chairs-flip-up-armrest-black.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/db0006343ce973620963a4950a594525/O/C/OCHAIR-G-RING-2003-BK-18208-00.jpg" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        Artiss Office Chair Veer Drafting
                                        Stool Mesh Chairs Flip Up Armrest
                                        Black
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/jingle-jollys-christmas-lights-led-light-santa-1-2m-motif-3d-decoration-outdoor.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/3a5b6a5862e6c0c368727e5e08907ce3/X/M/XMAS-MOT-SANTA-4FT-WARM-89810-00.jpg" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        Jingle Jollys Christmas Lights LED
                                        Light Santa 1.2M Motif 3D Decoration
                                        Outdoor
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/tool-kit-for-dyson-cy22-and-cy23-cinetic-big-ball.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/bb3fe9d0542d44695c3f94dbe99a4946/V/4/V424-KIT-CY22TOOLKIT-75012-00.jpg" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        Tool Kit for Dyson CY22 and CY23
                                        Cinetic Big Ball
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/40pcs-clear-shoe-storage-box-transparent-foldable-stackable-boxes-organize-home.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/bdb685e595a8a7f57d9079fc48ff894b/S/H/SHOEBOX-PP-20X2-00.jpg" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        Artiss Set of 40 Clear Shoe Box
                                        Transparent Foldable Shoe Storage
                                        Stackable Case
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/10-pack-aroma-diffuser-oils-aromatherapy-fragrance-10ml-gift-pack-10-pack-maroon.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/75be552a90770590b4cab199d9c067d5/V/1/V160-501850-01_10.jpg" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        10 Pack Aroma Diffuser Oils
                                        Aromatherapy Fragrance 10ml Gift
                                        Pack
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/gominimo-led-clip-book-light-15-led.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/c11ee9834806fdb3c5fec8842a130dcb/V/2/V227-3720402111631-66635-00.png" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        GOMINIMO LED Clip Book Light 15 LED
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/photo-frame-clock-picture-collage-12-p-display-wall-clock-photowall-home-decor.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/80c11763aa7f429104b50efa6b7db27d/V/6/V63-835581-612fd487d3705.1000x1000-00.png" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        Photo Frame Clock Picture Collage
                                        12-P Display Wall Clock Photowall
                                        Home Décor
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                            <div onClick={() => goUrl('https://www.dropshipzone.com.au/wanderlite-3pc-luggage-sets-suitcases-set-travel-hard-case-lightweight-black.html')} className="swiper-slide">
                                <p className="imgs">
                                    <a >
                                        <img src="https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/cd48f84ba8ead0543ef30d73400ce687/L/U/LUG-ABS-ECO-3SET-BK-18259-00.jpg" className="img-fluid" />
                                    </a>
                                </p>
                                <div className="h2">
                                    <p>
                                        Wanderlite 3pcs Luggage Trolley Set
                                        Travel Suitcase Hard Case Carry On
                                        Bag Black
                                    </p>
                                </div>
                                <div className="shop-pro-dom">
                                    <a className="shop-pro-url">SHOP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-child swiper-pagination pro-page"></div>
                </div>
            </div>

            <div className="supply-by-category-dom">
                <div className="category-dom">
                    <div id="category">
                        <div className="box show cate-btn">
                            <span className="category-title justify-content-center">SELL BY CATEGORY</span>
                            <div className="category-line d-none d-sm-block"></div>
                        </div>
                        <div className="cate-content">
                            <div className="row cate-content justify-content-center">
                                <div className="cate-content-item col-sm-6 col-md-6 col-lg-4">
                                    <a target="_self" href="https://www.dropshipzone.com.au/appliances.html">
                                        <img className="cate_show_img" src="https://cdn.dropshipzone.com.au/dstheme/images/Appliances.png" />
                                        <img className="cate_hidden_img" src="https://www.dropshipzone.com.au/dstheme/images/Appliances.svg" />
                                    </a>

                                    <div className="cate-title">
                                        <a target="_self" href="https://www.dropshipzone.com.au/appliances.html">
                                            <span className="time">Appliances</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="cate-content-item col-sm-6 col-md-6 col-lg-4">
                                    <a target="_self" href="https://www.dropshipzone.com.au/baby-kids.html">
                                        <img className="cate_show_img" src="https://cdn.dropshipzone.com.au/dstheme/images/Baby &amp; Kids.png" />
                                        <img className="cate_hidden_img" src="https://www.dropshipzone.com.au/dstheme/images/Baby &amp; Kids.svg" />
                                    </a>
                                    <div className="cate-title">
                                        <a target="_self" href="https://www.dropshipzone.com.au/baby-kids.html">
                                            <span className="time">Baby &amp; Kids</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="cate-content-item col-sm-6 col-md-6 col-lg-4">
                                    <a target="_self" href="https://www.dropshipzone.com.au/sports-fitness.html">
                                        <img className="cate_show_img" src="https://cdn.dropshipzone.com.au/dstheme/images/Fitness.png" />
                                        <img className="cate_hidden_img" src="https://www.dropshipzone.com.au/dstheme/images/Fitness.svg" />
                                    </a>
                                    <div className="cate-title">
                                        <a target="_self" href="https://www.dropshipzone.com.au/sports-fitness.html">
                                            <span className="time">Fitness</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="cate-content-item col-sm-6 col-md-6 col-lg-4">
                                    <a target="_self" href="https://www.dropshipzone.com.au/furniture.html">
                                        <img className="cate_show_img" src="https://cdn.dropshipzone.com.au/dstheme/images/Furniture.png" />
                                        <img className="cate_hidden_img" src="https://www.dropshipzone.com.au/dstheme/images/Furniture.svg" />
                                    </a>
                                    <div className="cate-title">
                                        <a target="_self" href="https://www.dropshipzone.com.au/furniture.html"><span className="time">Furniture</span></a>
                                    </div>
                                </div>
                                <div className="cate-content-item col-sm-6 col-md-6 col-lg-4">
                                    <a target="_self" href="https://www.dropshipzone.com.au/home-garden.html">
                                        <img className="cate_show_img" src="https://cdn.dropshipzone.com.au/dstheme/images/Home &amp; Garden.png" />
                                        <img className="cate_hidden_img" src="https://www.dropshipzone.com.au/dstheme/images/Home &amp; Garden.svg" />
                                    </a>
                                    <div className="cate-title">
                                        <a target="_self" href="https://www.dropshipzone.com.au/home-garden.html">
                                            <span className="time">Home &amp; Garden</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="cate-content-item col-sm-6 col-md-6 col-lg-4">
                                    <a target="_self" href="https://www.dropshipzone.com.au/tools.html">
                                        <img className="cate_show_img" src="https://cdn.dropshipzone.com.au/dstheme/images/Tools.png" />
                                        <img className="cate_hidden_img" src="https://www.dropshipzone.com.au/dstheme/images/Tools.svg" />
                                    </a>
                                    <div className="cate-title">
                                        <a target="_self" href="https://www.dropshipzone.com.au/tools.html"><span className="time">Tools</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="fh5co-services" className="animated bcg-lit-purple">
                <div className="sell-image">
                    <div className="image-line"></div>
                </div>
                <div className="supply-image fh5co-row-hidden">
                    <div className="image-line"></div>
                </div>
                <div className="fh5co-sell-with-us-parent">
                    <div className="fh5co-sell-with-us-dom">
                        <div className="sell-with-us-child-dom">
                            <div className="fh5co-row" style={getStyleObj("color: #fff")}>
                                <div className="col-md-offset-1" id="benefits-content">
                                    <div className="section-lead text-center greyf upper">
                                        <div className="text-center">
                                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                                <button type="button" className="sellsup fh5co-btn fh5co-first-btn fh5co-first-col">
                                                    Sell with us
                                                </button>
                                                <button type="button" className="sellsup fh5co-btn fh5co-second-btn fh5co-second-col">
                                                    Supply for us
                                                </button>
                                            </div>
                                        </div>
                                        <h2 className="text-lg-center fh5co-sell-us-text-lg-first">
                                            benefits of selling with
                                            dropshipzone
                                        </h2>
                                        <h2 className="text-lg-center fh5co-supply-us-text-lg-second fh5co-row-hidden">
                                            benefits of supplying with
                                            dropshipzone
                                        </h2>
                                    </div>
                                    <div className="fh5co-row-first section2 row grid-display">
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/a/1-Inventory.svg" style={getStyleObj("width: 104px")} alt="" />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    No inventory, no worries
                                                </h3>
                                                <p>
                                                    You don’t need to hold
                                                    inventory to sell with
                                                    Dropshipzone.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/a/2-Easy.svg" alt="" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Easy to use
                                                </h3>
                                                <p>
                                                    You can place orders
                                                    anytime, anywhere from a
                                                    self-serve portal.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/a/3-Integrate.svg" alt="" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Integrate in a cinch
                                                </h3>
                                                <p>
                                                    You don’t need to wait.
                                                    You can start selling
                                                    straight away.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/a/4-Competitive.svg" alt="" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Stay competitive&nbsp;
                                                </h3>
                                                <p>
                                                    You get access to the
                                                    most popular products
                                                    across a growing
                                                    range.&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/a/5-NoMOQs.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    No MOQs
                                                </h3>
                                                <p>
                                                    You only buy the product
                                                    as you sell the product
                                                    to your customer.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 fh5co-service last-fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/a/6-local.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Keep it local&nbsp;
                                                </h3>
                                                <p>
                                                    You connect with
                                                    reliable
                                                    Australian-based
                                                    suppliers with fast
                                                    shipping.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center col justify-content-center" style={getStyleObj("display: flex")}>
                                            <a href="https://web.dropshipzone.com.au/sell" className="retailer-btn upper btn btn-primary btn-lg btn-block upper btn-bolder">
                                                become a retailer
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/64261f7fc92699237af61f3b_Arrow.svg" style={getStyleObj(" vertical-align: text-top; ")} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="fh5co-row-second fh5co-row-hidden section2 row grid-display">
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/2-Channel.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Sell more, more often
                                                </h3>
                                                <p>
                                                    You sell more products,
                                                    more often with less
                                                    cost and effort on
                                                    Dropshipzone.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/3-Team.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Expand channel coverage
                                                </h3>
                                                <p>
                                                    You can connect with
                                                    thousands of Aussie
                                                    retailers and reach new
                                                    markets.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/4-Easy.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Dedicated team
                                                </h3>
                                                <p>
                                                    You get personalised and
                                                    prompt support from a
                                                    Melbourne-based team.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/5-Marketing.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Easy to use
                                                </h3>
                                                <p>
                                                    You can upload products,
                                                    edit listings and manage
                                                    orders from anywhere.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/6-Commission.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Save on marketing costs
                                                </h3>
                                                <p>
                                                    You save on customer
                                                    acquisition costs by
                                                    selling on
                                                    Dropshipzone.&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 fh5co-service">
                                            <div className="fh5co-icon to-animate bounceIn animated">
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/icons/1-SellMore.svg" style={getStyleObj("width: 104px")} />
                                            </div>
                                            <div className="fh5co-desc">
                                                <h3 className="fh5co-tit">
                                                    Simple commission
                                                    structure
                                                </h3>
                                                <p>
                                                    You only pay as you
                                                    sell. One rate, no
                                                    hidden fees.&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center col justify-content-center" style={getStyleObj("display: flex")}>
                                            <a href="https://web.dropshipzone.com.au/supply" className="supplier-btn upper btn btn-primary btn-lg btn-block upper btn-bolder">
                                                become a supplier
                                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/64261f7fc92699237af61f3b_Arrow-darkblue.svg" style={getStyleObj(" vertical-align: text-top; ")} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={getStyleObj("height: 2rem; background: #f9f6f3")}></div>
            <div style={getStyleObj("padding: 1px 0; background: #f9f6f3")}>
                <div style={getStyleObj("background: #f9f6f3")}>
                    <div className="steve-merry-go-round">
                        <div className="customers-round-dom swiper-no-swiping" dir="rtl">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="marquee-item">
                                        <div className="paragraph-medium-medium">
                                            STARS ON GOOGLE REVIEWS
                                        </div>
                                        <div className="paragraph-medium-medium">
                                            RATED 4.9/5
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="marquee-item">
                                        <div className="paragraph-medium-medium">
                                            STARS ON GOOGLE REVIEWS
                                        </div>
                                        <div className="paragraph-medium-medium">
                                            RATED 4.9/5
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="marquee-item">
                                        <div className="paragraph-medium-medium">
                                            STARS ON GOOGLE REVIEWS
                                        </div>
                                        <div className="paragraph-medium-medium">
                                            RATED 4.9/5
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="marquee-item">
                                        <div className="paragraph-medium-medium">
                                            STARS ON GOOGLE REVIEWS
                                        </div>
                                        <div className="paragraph-medium-medium">
                                            RATED 4.9/5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}