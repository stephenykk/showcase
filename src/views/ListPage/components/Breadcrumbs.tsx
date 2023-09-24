import { goHome, goTo } from "@/utils"


export default function Breadcrumbs(props: { links: Array<{ path?: string, text: string }> }) {
    const links = props.links ?? []
    return (
        <div className="breadcrumbs">
            <ul>
                <li className="home pointer">
                    <a onClick={goHome} title="Home">Home</a>
                </li>
                {links.map(link => {
                    return (
                        <li key={link.text} className="top_brand">
                            {
                                link.path
                                    ? <a onClick={() => goTo(link.path)} title="Home">{link.text}</a>
                                    : <strong>{link.text}</strong>
                            }

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}