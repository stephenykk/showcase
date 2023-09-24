import ToolbarFilter from "./ToolbarFilter"
import ToolbarSorter from "./ToolbarSorter"
import ToolbarSizer from "./ToolbarSizer"
import ToolbarPager from "./ToolbarPager"

import type { Pager } from '@/views/ListPage/type'

type Props = {
    onFilter: (val: string) => any
    onSort: (val: string) => any
    onSortDir: (isDescend: boolean) => any
    onSize: (val: number) => any
    onPaging: (val: number) => any
    pager: Pager
}

export default function Toolbar(props: Props) {
    const { onSize, pager, onPaging, onSort, onFilter, onSortDir } = props

    return (

        <div className="toolbar">
            <div className="pager">

                <ToolbarSizer {...{ onSize, pager }} />
                <ToolbarFilter {...{ onFilter, pager }} />
                <ToolbarSorter {...{ onSort, pager, onSortDir }} />
                <ToolbarPager {...{ onPaging, pager }} />

            </div>

        </div>
    )
}