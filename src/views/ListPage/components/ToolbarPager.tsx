import type { Pager } from '@/views/ListPage/type'

type Props = {
    onPaging: (val: number) => any
    pager: Pager
}

export default function ToolbarPager(props: Props) {
    const { total = 0, pageSize = 40, pageNum = 1 } = props.pager
    const pageCount = Math.ceil(total / pageSize)

    const numList = Array.from({ length: pageCount }).map((_, i) => i + 1)

    return (
        <div className="pages">
            <strong>Page:</strong>
            {pageCount > 0 && (

                <ol>
                    {
                        pageNum > 1 && (
                            <li key="leftArr" className="prev pointer">
                                <a className="previous i-previous" onClick={() => props.onPaging(pageNum - 1)} title="Previous"> </a>
                            </li>

                        )
                    }

                    {
                        numList.map(num => {
                            return pageNum === num
                                ? <li key={num} className="current">{num}</li>
                                : <li key={num} className="pointer"><a onClick={() => props.onPaging(num)}>{num}</a></li>
                        })
                    }

                    {
                        pageNum < pageCount && (
                            <li key="rightArr" className="next pointer">
                                <a className="next i-next" onClick={() => props.onPaging(pageNum + 1)} title="Next">
                                </a>
                            </li>
                        )
                    }

                </ol>
            )}
        </div>
    )
}