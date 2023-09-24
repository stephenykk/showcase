import { useListenClickOutside } from "@/hooks"
import { getStyleObj } from "@/utils"
import { useState } from "react"

import type { Pager } from '@/views/ListPage/type'

type Props = {
    onFilter: (val: string) => any
    pager: Pager
}
export default function ToolbarFilter(props: Props) {
    const { onFilter, pager } = props

    const [isDropdown, setDropdown] = useState(false)

    const toggleDropdown = () => {
        setDropdown(!isDropdown)
    }

    const divRef = useListenClickOutside(() => {
        setDropdown(false)
    })

    const options = [
        { text: 'Please Select', value: '' },
        { text: 'Free AU Shipping', value: 'free_shipping' },
        { text: 'Bulky Items', value: 'bulky_items' },
        { text: 'In Stock', value: 'in_stock' },
        { text: 'Out Of Stock', value: 'out_of_stock' },
        { text: 'Discontinued', value: 'discontinued' },
        { text: 'Not On My SKU', value: 'not_on_my_sku' },
        { text: 'Supplier SKU', value: 'vendor_sku' },
        { text: 'New Aim SKU', value: 'new_aim_sku' },
        { text: 'NZ Available', value: 'nz_available' },
    ]

    const curOption = options.find(opt => opt.value === pager.filterType)

    return (
        <div ref={divRef} className="limiter" style={getStyleObj("padding:0 5px!important;")}>
            <label style={getStyleObj("float:left;width:58px;font-size:14px;line-height:35px;text-align:left;")}>Filter By</label>
            <div style={getStyleObj("float:left;")}>
                <div className="custom-select-filter" style={getStyleObj("width:141px;")}>
                    <div id="filter_by" onClick={() => toggleDropdown()} className="select-selected"><span data-value="" style={getStyleObj("margin-left:-20px;")}>{curOption?.text}</span></div>
                    <div className={"select-items " + (isDropdown ? '' : 'select-hide')}>
                        {
                            options.map(opt => {
                                return (
                                    <div className="select-item" key={opt.value} onClick={() => { toggleDropdown(); onFilter(opt.value) }} data-value={opt.value}>{opt.text}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}