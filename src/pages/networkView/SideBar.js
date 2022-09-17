import { createRef, useEffect } from "react"

export function SideBar({open, nodeData}) {

    let sideBarRef = createRef()

    const hideStyle = "-mr-96"
    const defaultStyle = "bg-white float-right rounded-md h-full w-96 transition-[margin] ease-in-out delay-500"

    useEffect(() => {
        if(!open) {
            sideBarRef.current.classList.add(hideStyle)
        } else {
            sideBarRef.current.classList.remove(hideStyle)
        }
    }, [open])

    return (
        <div
            ref={sideBarRef}
            className={defaultStyle}
        ></div>
    )
}