import { useState } from "react";
import { NetworkGraph } from "./NetworkGraph";
import { SideBar } from "./SideBar";

export function NetworkView() {

    let [nodeData, setNodeData] = useState(undefined)
    let [sideBarOpen, setSideBarOpen] = useState(false)

    let nodeClicked = (data) => {
        setNodeData(nodeData)
        setSideBarOpen(true)
    }

    let sideBarShowHideTest = () => {
        setSideBarOpen(prev => !prev)
    }

    return (
        <div className="w-full h-screen bg-black p-3 overflow-hidden">
            <button className="float-left bg-white" onClick={sideBarShowHideTest}>show/hide sidebar</button>
            <NetworkGraph nodeClicked={nodeClicked} />
            <SideBar open={sideBarOpen} nodeData={nodeData} />
        </div>
    )
}