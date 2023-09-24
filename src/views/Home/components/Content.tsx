import { getStyleObj } from "@/utils"


export default function Content() {
    return (
        <div className="content">
            <div style={getStyleObj("background:#F9F6F3;width:100%;")}>
                <div className="front-stripe"
                    style={getStyleObj("max-width:100rem;margin:0 auto;overflow:hidden;background: #080255;padding: 30px 25px;")}>
                    <div className="row" id="usp-info">
                        <div className="col-lg-4 inner-stripe-1 text-center">
                            <div className="stripe-icon">
                                <div className="square">
                                    <img src="https://www.dropshipzone.com.au/dstheme/images/1-NoFees_24x24.svg" />
                                </div>
                            </div>
                            <p>No registration or subscription fees</p>
                        </div>
                        <div className="col-lg-4 inner-stripe-1">
                            <div className="stripe-icon">
                                <div className="square">
                                    <img src="https://www.dropshipzone.com.au/dstheme/images/2-Order_24x24.svg" />
                                </div>
                            </div>
                            <p>No minimum order quantities</p>
                        </div>
                        <div className="col-lg-4 inner-stripe-1">
                            <div className="stripe-icon">
                                <div className="square">
                                    <img src="https://www.dropshipzone.com.au/dstheme/images/3-Product_24x24.svg" />
                                </div>
                            </div>
                            <p>Over 40,000 products available for resale</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}