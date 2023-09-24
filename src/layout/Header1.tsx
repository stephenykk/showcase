import { getStyleObj, goHome, goLogin } from "@/utils";


function Header1() {
    return (
        <div id="header-1" className="bg-942FFB">
            <div className="header row">
                <div className="col-sm-4 header-menu-default">
                    <div className="rs-menu" id="sitemenu-header">

                        <ul className="site-menu">

                            <li id="item-150" className="level-1 first    ">
                                <a target="_self" href="https://web.dropshipzone.com.au/sell">
                                    <span className="">SELL</span>
                                </a>
                            </li>

                            <li id="item-151" className="level-1    ">
                                <a target="_self" href="https://web.dropshipzone.com.au/supply">
                                    <span className="">SUPPLY</span>
                                </a>
                            </li>

                            <li id="item-154" className="level-1    ">
                                <a target="_self" href="https://www.dropshipzone.com.au/blog">
                                    <span className="">LEARN</span>
                                </a>
                            </li>

                            <li id="item-159" className="level-1 last    ">
                                <a target="_self" href="https://www.dropshipzone.com.au/contact-us">
                                    <span className="">SUPPORT</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div id="header-logo" className="col-sm-4 d-flex">
                    <a id="desktop-logo" onClick={goHome} title="Dropshipzone" className="logo pointer">
                        <img src="https://www.dropshipzone.com.au/dstheme/images/logo-wb.png" alt="Dropshipzone" />

                    </a>
                    <a id="mobile-logo" onClick={goHome} title="Dropshipzone" className="logo pointer">
                        <img src="https://www.dropshipzone.com.au/dstheme/images/LOGO_WHITE.png" alt="Dropshipzone" />

                    </a>
                </div>

                <div id="header-top-links" className="col-sm-4">
                    <ul className="links">
                        <li className="first">
                            {/* <a href="https://www.dropshipzone.com.au/customer/account/login/referer/aHR0cHM6Ly93d3cuZHJvcHNoaXB6b25lLmNvbS5hdS8_X19fU0lEPVU,/" title="Log In">Log In</a> */}
                            <a className="pointer" onClick={() => goLogin()} title="Log In">Log In</a>
                        </li>
                        <li className=" last">
                            <a href="https://www.dropshipzone.com.au/customer/account/create/"
                                title="Sign up">Sign Up</a>
                        </li>
                    </ul>
                    <div className="primary-button-div">
                        <a href="https://web.dropshipzone.com.au/get-started/sign-up" className="primary-button w-button">Get
                            started</a>
                        <img src="https://www.dropshipzone.com.au/dstheme/images/header-signup.svg" loading="lazy" alt="" className="image-7" />
                    </div>


                    <div data-w-id="252bc5eb-8be0-5008-83dc-366a7d0043fa" data-animation="default" data-collapse="medium"
                        data-duration="400" data-easing="ease" data-easing2="ease" role="banner"
                        className="dropshipzone-navigation w-nav" data-boolean="0">
                        <div className="uui-navbar05_container-2">
                            <div className="uui-navbar05_menu-button-2 w-nav-button" style={getStyleObj('-webkit-user-select: text;')}
                                aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0"
                                aria-haspopup="menu" aria-expanded="false">
                                <div className="menu-icon_component-3">
                                    <div data-w-id="0043bfd5-d7d8-dd2b-eeed-f3a532638da6"
                                        className="hamburger-menu-hm5-2 w-nav-button" style={getStyleObj('-webkit-user-select: text;')}
                                        aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0"
                                        aria-haspopup="menu" aria-expanded="false">
                                        <div className="top-bar-hm5-2"
                                            style={getStyleObj('background-color: rgb(249, 246, 243); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')}>
                                        </div>
                                        <div className="middle-bar-hm5-2"
                                            style={getStyleObj('background-color: rgb(249, 246, 243); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')}>
                                        </div>
                                        <div className="bottom-bar-hm5-2"
                                            style={getStyleObj('background-color: rgb(249, 246, 243); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')}>
                                        </div>
                                        <div className="cross-bar-1-hm5"
                                            style={getStyleObj('transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg); transform-style: preserve-3d; display: none;')}>
                                        </div>
                                        <div className="cross-bar-2-hm5"
                                            style={getStyleObj('transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d; display: none;')}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={getStyleObj('height: 0px;')}></div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Header1;
