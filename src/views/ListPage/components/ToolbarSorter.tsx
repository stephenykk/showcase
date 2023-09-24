import { useListenClickOutside } from "@/hooks"
import { getStyleObj } from "@/utils"

import type { Pager } from '@/views/ListPage/type'
import { useState } from "react"


type Props = {
    onSort: (val: string) => any,
    onSortDir: (isDescend: boolean) => any,
    mode?: 'grid' | 'list',
    pager: Pager
}
export default function ToolbarSorter(props: Props) {
    const types = [
        { text: 'Please Select', value: '' },
        { text: 'Relevance', value: 'position' },
        { text: 'Bestseller', value: 'bestseller' },
        { text: 'Availability', value: 'availability' },
        { text: 'Listing Date', value: 'listing_date' },
        { text: 'Name', value: 'name' },
        { text: 'Price', value: 'price' }
    ]

    const modes = [{ value: 'grid', text: 'Grid' }, { value: 'list', text: 'List' }]

    const { mode: modeVal = 'grid', pager, onSort, onSortDir } = props
    const mode = modes.find(modeObj => modeObj.value === modeVal) ?? { value: 'grid', text: 'Grid' }
    const [isDropdown, setDropdown] = useState(false)
    const toggleDropdown = () => {
        setDropdown(!isDropdown)
    }

    const curSortType = types.find(type => type.value === pager.sortType)


    const divRef = useListenClickOutside(() => {
        setDropdown(false)
    })

    return (
        <div ref={divRef} className="sorter" style={getStyleObj("padding:0 5px!important;")}>
            <div className="view-mode flex-row-my-todo">
                <label>View as:</label>
                {
                    modes.map(emode => {
                        return (
                            <div key={emode.value} className="mode-item">
                                {
                                    emode.value == mode.value
                                        ? <strong title={emode.text} className={emode.value}>{emode.text}</strong>
                                        : <a href={`https://www.dropshipzone.com.au/brand.html?mode=${emode.value}`} title={emode.text} className={emode.value}>{emode.text}</a>
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className="sort-by">
                <label style={getStyleObj("width:55px!important")}>Sort By</label>
                <div className="select-container" style={getStyleObj("width:119px!important;")}>
                    <div className="custom-select-sort" style={getStyleObj("width: auto;")}>
                        <div id="sort_by" onClick={() => toggleDropdown()} className="select-selected-sort"><span>{curSortType?.text}</span></div>
                        <div className={"select-items-sort " + (isDropdown ? '' : 'select-hide-sort')}>
                            {
                                types.map(type => {
                                    return (
                                        <div className="select-sort-item" key={type.value} onClick={() => { toggleDropdown(); onSort(type.value) }} data-val={type.value} data-value={`https://www.dropshipzone.com.au/brand.html?dir=desc&order=${type.value}`}>
                                            {type.text}
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                {
                    pager.descend
                        ? (
                            <a className="pointer" onClick={() => onSortDir(false)} title="Set Ascending Direction">
                                <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/i_desc_arrow.png" alt="Set Ascending Direction" className="v-middle" />
                            </a>
                        )
                        : (
                            <a className="pointer" onClick={() => onSortDir(true)} title="Set Descending Direction">
                                <img src="https://www.dropshipzone.com.au/skin/frontend/ds2016/default/images/i_asc_arrow.png" alt="Set Descending Direction" className="v-middle" />
                            </a>
                        )
                }

            </div>
        </div>
    )
}