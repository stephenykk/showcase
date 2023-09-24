import { getStyleObj } from "@/utils"
import type { Pager } from '@/views/ListPage/type'

type Props = {
    onSize: (val: number) => any
    pager: Pager
}

export default function ToolbarSizer(props: Props) {
    const sizeArr = [40, 80, 160]
    const { total = 0, pageSize = 40, pageNum = 1, sizeList = sizeArr } = props.pager
    const pageStart = (pageNum - 1) * pageSize + 1
    const pageEnd = pageStart + pageSize - 1

    return (
        <>
            <div className="amount">
                Items {pageStart} to {pageEnd} of {total} total
            </div>
            <div className="limiter" style={getStyleObj("padding: 0 5px!important;")}>
                <label>Display</label>
                {
                    sizeList.map((size: number) => {
                        return <a key={size} onClick={() => props.onSize(size)} className={size === pageSize ? 'current pointer' : 'pointer'}>{size}</a>
                    })
                }
            </div>
        </>
    )
}