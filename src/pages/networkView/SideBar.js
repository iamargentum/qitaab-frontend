import { createRef, useEffect } from "react"

export function SideBar({open, nodeData}) {

    const defaultStyle = "bg-white float-right rounded-md h-full w-96"

    return (
        <div
            className={defaultStyle}
            style={{
                marginRight: open ? "" : "-24.75rem", transition: "all 500ms ease-in-out"
            }}
        ></div>
    )
}