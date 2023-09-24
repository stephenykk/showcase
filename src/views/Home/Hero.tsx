import { getStyleObj } from "@/utils"


export default function Hero() {
    return (

        <div className="hero cc-cta">
            <div className="container">
                <div className="div-block">
                    <img src="https://cdn.dropshipzone.com.au/dstheme/images/LOGO_MARK_USE_ON_VIOLET.png" loading="lazy" sizes="160px" srcSet="
                    https://cdn.dropshipzone.com.au/dstheme/images/LOGO_MARK_USE_ON_VIOLET-p-500.png   500w,
                    https://cdn.dropshipzone.com.au/dstheme/images/LOGO_MARK_USE_ON_VIOLET-p-800.png   800w,
                    https://cdn.dropshipzone.com.au/dstheme/images/LOGO_MARK_USE_ON_VIOLET-p-1080.png 1080w,
                    https://cdn.dropshipzone.com.au/dstheme/images/LOGO_MARK_USE_ON_VIOLET-p-1600.png 1600w,
                    https://cdn.dropshipzone.com.au/dstheme/images/LOGO_MARK_USE_ON_VIOLET.png        1899w
                " alt="" className="image" />
                    <div className="cta-text">
                        <div className="heading-jumbo-small">
                            make ship happen<br />
                        </div>
                        <div className="paragraph large regular">
                            You know what to do. Let’s get into it.<br />
                        </div>
                    </div>
                    <div className="uui-container-cta">
                        <a href="https://web.dropshipzone.com.au/sell" className="cta-button w-inline-block">
                            <div className="submit-button navy">
                                <div className="overline cta">
                                    become a retailer
                                </div>
                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/64261f7fc92699237af61f3b_Arrow.svg" loading="lazy" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="uui-container-cta" style={getStyleObj("padding-top: 0; margin-top: -16px")}>
                        <a href="https://web.dropshipzone.com.au/supply" className="cta-button w-inline-block">
                            <div className="submit-button pink">
                                <div className="overline cta">
                                    become a supplier
                                </div>
                                <img src="https://cdn.dropshipzone.com.au/dstheme/images/64261f7fc92699237af61f3b_Arrow-darkblue.svg" loading="lazy" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}