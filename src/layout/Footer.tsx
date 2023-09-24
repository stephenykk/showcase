import { getAbsURL, getStyleObj } from "@/utils";


function Footer() {
    return (
        <div className="app-footer">
            <div className="footer-container">
                <div className="footer" style={{ maxWidth: '100rem' }}>
                    <div></div>
                    <div className="footer-menu">

                        <div className="rs-menu" id="sitemenu-footer">

                            <ul className="site-menu">

                                <li id="item-4" className="level-1 parent first has-children   ">
                                    <a target="_self" href="">
                                        <span className="">COMPANY INFO</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-23" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/about_us">
                                                <span className="">About Us</span>
                                            </a>
                                        </li>

                                        <li id="item-46" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/how-dropshipzone-works">
                                                <span className="">How Dropshipzone Works</span>
                                            </a>
                                        </li>

                                        <li id="item-47" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/drop-ship-basics">
                                                <span className="">Drop Ship Basics</span>
                                            </a>
                                        </li>

                                        <li id="item-14" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/contact-us">
                                                <span className="">Contact Us</span>
                                            </a>
                                        </li>

                                        <li id="item-63" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/faq">
                                                <span className="">FAQ</span>
                                            </a>
                                        </li>

                                        <li id="item-138" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/blog">
                                                <span className="">Blog</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-15" className="level-1 parent has-children   ">
                                    <a target="_self" href="https://www.dropshipzone.com.au/customer/account">
                                        <span className="">Customer Care</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-17" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/customer/account/create">
                                                <span className="">Registration</span>
                                            </a>
                                        </li>

                                        <li id="item-16" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/customer/account/login">
                                                <span className="">Log In</span>
                                            </a>
                                        </li>

                                        <li id="item-67" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/instruction_registration">
                                                <span className="">Instruction</span>
                                            </a>
                                        </li>

                                        <li id="item-136" className="level-2    ">
                                            <a target="_blank" href="https://apps.shopify.com/newaim_app">
                                                <span className="">Sofortig (Shopify App)</span>
                                            </a>
                                        </li>

                                        <li id="item-135" className="level-2 last    ">
                                            <a target="_blank" href="https://www.dropshipzone.com.au/apidoc/index.html">
                                                <span className="">DSZ-API Doc</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-143" className="level-1 parent has-children   ">
                                    <a target="_self" href="">
                                        <span className="">SHIPPING</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-43" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/shipping_guide">
                                                <span className="">Shipping Guide</span>
                                            </a>
                                        </li>

                                        <li id="item-44" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/track_your_order">
                                                <span className="">Track Your Order</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-144" className="level-1 parent has-children   ">
                                    <a target="_self" href="">
                                        <span className="">POLICIES</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-32" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/terms-conditions">
                                                <span className="">Terms &amp; Conditions</span>
                                            </a>
                                        </li>

                                        <li id="item-41" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/privacy_statement">
                                                <span className="">Privacy Statement</span>
                                            </a>
                                        </li>

                                        <li id="item-42" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/warranty-return">
                                                <span className="">Warranty &amp; Return</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-145" className="level-1 parent last has-children   ">
                                    <a target="_self" href="">
                                        <span className="">PARTNER &amp; PROGRAM</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-141" className="level-2 first    ">
                                            <a target="_blank" href="https://v2.dropshipzone.com.au/">
                                                <span className="">Become a Supplier</span>
                                            </a>
                                        </li>

                                        <li id="item-147" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/bulk-dropshipping-program">
                                                <span className="">Bulk Dropshipping Program</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                            </ul></div><div className="rs-menu" id="sitemenu-footer-new">

                            <ul className="site-menu">

                                <li id="item-175" className="level-1 parent first has-children   ">
                                    <a target="_self" href="">
                                        <span className="">COMPANY</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-176" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/about_us">
                                                <span className="">About</span>
                                            </a>
                                        </li>

                                        <li id="item-177" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/contact-us">
                                                <span className="">Contact Us</span>
                                            </a>
                                        </li>

                                        <li id="item-160" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/blog">
                                                <span className="">Learn Centre</span>
                                            </a>
                                        </li>

                                        <li id="item-181" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/press">
                                                <span className="">Dropshipzone Press</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-161" className="level-1 parent has-children   ">
                                    <a target="_self" href="">
                                        <span className="">FOR RETAILERS</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-168" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/">
                                                <span className="">How it works</span>
                                            </a>
                                        </li>

                                        <li id="item-163" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/faq">
                                                <span className="">FAQs for Retailers</span>
                                            </a>
                                        </li>

                                        <li id="item-164" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/apidoc/index.html">
                                                <span className="">Integration Guides</span>
                                            </a>
                                        </li>

                                        <li id="item-178" className="level-2    ">
                                            <a target="_self" href="https://apps.shopify.com/newaim_app">
                                                <span className="">Shopify app</span>
                                            </a>
                                        </li>

                                        <li id="item-166" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/shipping_guide">
                                                <span className="">Shipping</span>
                                            </a>
                                        </li>

                                        <li id="item-180" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/bulk-dropshipping-program">
                                                <span className="">Bulk Order</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-167" className="level-1 parent has-children   ">
                                    <a target="_self" href="">
                                        <span className="">FOR SUPPLIERS</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-162" className="level-2 first    ">
                                            <a target="_self" href="https://v2.dropshipzone.com.au/Login">
                                                <span className="">How it works</span>
                                            </a>
                                        </li>

                                        <li id="item-169" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/faq">
                                                <span className="">FAQs for Suppliers</span>
                                            </a>
                                        </li>

                                        <li id="item-170" className="level-2 last    ">
                                            <a target="_self" href="https://services.dropshipzone.com.au/admin/api/supplier/docs/">
                                                <span className="">Integration Guides</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                                <li id="item-171" className="level-1 parent last has-children   ">
                                    <a target="_self" href="">
                                        <span className="">LEGAL</span>
                                    </a>

                                    <ul className="site-menu">

                                        <li id="item-172" className="level-2 first    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/privacy_statement">
                                                <span className="">Privacy Policy</span>
                                            </a>
                                        </li>

                                        <li id="item-173" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/terms-conditions">
                                                <span className="">Terms of Use</span>
                                            </a>
                                        </li>

                                        <li id="item-174" className="level-2    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/warranty-return">
                                                <span className="">Warranty &amp; Returns</span>
                                            </a>
                                        </li>

                                        <li id="item-179" className="level-2 last    ">
                                            <a target="_self" href="https://www.dropshipzone.com.au/policy">
                                                <span className="">Marketplace Policies</span>
                                            </a>
                                        </li>

                                    </ul>                                </li>

                            </ul></div>
                    </div>


                    <div className="copyright-social">
                        <div className="row">
                            <div className="col dsz-logo-social">
                                <div style={getStyleObj('text-align:left;margin:0px 0 10px 0;')}>
                                    <a href="https://www.dropshipzone.com.au/" title="" className="footer-logo">
                                        <img alt="dorpshipzone" src={getAbsURL('/dstheme/images/LOGO_PURPLE_TEXT-240px.png')} />
                                    </a>
                                </div>
                                <address style={getStyleObj('display:block;color:#fff !important;font-family: Scto grotesk a, sans-serif;font-size: 14px;')}>©2012-2023 Dropshipzone.com.au All rights reserved.</address>
                            </div>

                            <div className="col" id="social-media">
                                <a href=" https://www.linkedin.com/company/dropshipzoneau" title="Linkedin" className="footer-logo" style={getStyleObj('padding:0 6px;')}>
                                    <img alt="Instagram" width="28px" src={getAbsURL('/dstheme/images/linkedin.png')} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCqgktYpztzpDDfF76fHIbgA" title="" className="footer-logo" style={getStyleObj('padding:0 6px;')}>
                                    <img alt="" width="28px" src={getAbsURL('/dstheme/images/play_video.png')} />
                                </a>
                                <a href="https://www.facebook.com/Dropshipzoneaus/" title="Facebook" className="footer-logo" style={getStyleObj('padding:0 6px;')}>
                                    <img alt="Facebook" width="28px" src={getAbsURL('/dstheme/images/facebook.png')} />
                                </a>
                                <a href="https://www.instagram.com/dropshipzoneau/" title="" className="footer-logo" style={getStyleObj('padding:0 6px;')}>
                                    <img alt="" width="28px" src={getAbsURL('/dstheme/images/ins_lila.png')} />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Footer;