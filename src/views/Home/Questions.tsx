import { getStyleObj } from "@/utils"


export default function Questions() {
    return (
        <div className="questions-dom">
            <div className="image-line"></div>
            <div id="quently-dom-services">
                <div className="quently-lmargin" style={getStyleObj("padding: 0px")}>
                    <div className="questions-title">
                        Frequently asked questions
                    </div>
                </div>
                <div className="quently-margint">
                    <div className="section-title">
                        <a href="#accordionItemOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="accordionItemOne">
                            <div className="accordion-item-header accordion-item sec-title" id="accordionHeadingOne">
                                <span className="quently-qaa">How does dropshipping work?</span>
                                <i className="arrow"></i>
                            </div>
                        </a>
                        <div id="accordionItemOne" className="collapse" aria-labelledby="accordionHeadingOne">
                            <div className="accordion-body">
                                <p className="qaa-p">
                                    It’s really easy. When a customer
                                    places an order with a Retailer, the
                                    Retailer pays the Supplier for the
                                    product. The Supplier then ships the
                                    order directly to the Retailer’s
                                    customer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        <a href="#accordionItemFour" data-bs-toggle="collapse" aria-expanded="false" aria-controls="accordionItemFour" className="arrow-trigger">
                            <div className="accordion-item-header accordion-item sec-title" id="accordionHeadingFour">
                                <span className="quently-qaa">What do I need to get
                                    started?</span>
                                <i className="arrow"></i>
                            </div>
                        </a>
                        <div id="accordionItemFour" className="collapse" aria-labelledby="accordionHeadingFour">
                            <div className="accordion-body">
                                <p className="qaa-p">
                                    To get started, you’ll need an
                                    active ABN or ACN. We’re all
                                    business. It’s nothing personal!
                                    You’ll also need to share basic
                                    information including your name,
                                    phone number and address. For
                                    retailers, we’ll request a link to
                                    your online store. For Suppliers,
                                    you’ll need to hold physical
                                    inventory in Australia with dropship
                                    capability, plus provide a 12-month
                                    warranty across your products sold
                                    on Dropshipzone. We’re keen to see
                                    you make ship happen!

                                    <a href="https://web.dropshipzone.com.au/sell" target="_blank">Become a
                                        Retailer<br /></a>
                                    <a href="https://web.dropshipzone.com.au/supply" target="_blank">Become a
                                        Supplier<br /></a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-title">
                        <a href="#accordionItemThree" data-bs-toggle="collapse" aria-expanded="false" aria-controls="accordionItemThree">
                            <div className="accordion-item-header accordion-item sec-title" id="accordionHeadingThree">
                                <span className="quently-qaa">How much does it cost to sign
                                    up?</span>
                                <i className="arrow"></i>
                            </div>
                        </a>
                        <div id="accordionItemThree" className="collapse" aria-labelledby="accordionHeadingThree">
                            <div className="accordion-body">
                                <p className="qaa-p">
                                    It's free to sign up to
                                    Dropshipzone. We don’t charge
                                    upfront costs, subscription fees, or
                                    membership fees.

                                    <a href="https://web.dropshipzone.com.au/sell" target="_blank">Become a
                                        Retailer<br /></a>
                                    <a href="https://web.dropshipzone.com.au/supply" target="_blank">Become a
                                        Supplier<br /></a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-title">
                        <a href="#accordionItemSeven" data-bs-toggle="collapse" aria-expanded="false" aria-controls="accordionItemSeven">
                            <div className="accordion-item-header accordion-item sec-title" id="accordionHeadingSeven">
                                <span className="quently-qaa">How easy is it to start a
                                    dropshipping business?</span>
                                <i className="arrow"></i>
                            </div>
                        </a>
                        <div id="accordionItemSeven" className="collapse" aria-labelledby="accordionHeadingSeven">
                            <div className="accordion-body">
                                <p className="qaa-p">
                                    Starting a dropshipping business is
                                    as easy as launching an online
                                    store. Decide where you want to
                                    sell, find suppliers, and then build
                                    your online store. Want to learn
                                    more?

                                    <a href="https://www.dropshipzone.com.au/blog/how-to-start-a-dropshipping-business" target="_blank">Read our guide to starting a
                                        dropshipping business</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-title">
                        <a href="#accordionItemEight" data-bs-toggle="collapse" aria-expanded="false" aria-controls="accordionItemEight">
                            <div className="accordion-item-header accordion-item sec-title" id="accordionHeadingSeven">
                                <span className="quently-qaa">Am I a Retailer or a
                                    Supplier?</span>
                                <i className="arrow"></i>
                            </div>
                        </a>
                        <div id="accordionItemEight" className="collapse" aria-labelledby="accordionHeadingSeven">
                            <div className="accordion-body">
                                <p className="qaa-p">
                                    It depends if you’re looking to find
                                    products or list your own products.
                                    If you’re finding products to sell
                                    online, you’re most likely a
                                    Retailer. If you want to list
                                    products on Dropshipzone, you’re
                                    most likely a Supplier. If you’re
                                    still unsure, contact our team who
                                    can help point you in the right
                                    direction.

                                    <a href="https://www.dropshipzone.com.au/contacts" target="_blank">Contact
                                        our team</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}