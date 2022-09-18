export function SideBar({open, nodeData}) {

    const defaultStyle = "bg-white float-right rounded-md h-full w-96 fixed top-0 right-0 absolute top-0 right-0 z-999"

    return (
        <div
            className={defaultStyle}
            style={{
                marginRight: open ? "" : "-24.75rem", transition: "all 500ms ease-in-out"
            }}
        ></div>
    )
}