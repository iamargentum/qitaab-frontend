import { useState } from "react";
import { NetworkGraph } from "./NetworkGraph";
import { SideBar } from "./SideBar";

export function NetworkView() {

    let [nodeData, setNodeData] = useState(undefined)
    let [sideBarOpen, setSideBarOpen] = useState(false)

    let nodeClicked = (data) => {
        if(data.nodes && data.nodes.length > 0) {
            setNodeData(data)
            if(!sideBarOpen) {
                setSideBarOpen(true)
            }
        } else {
            setSideBarOpen(false)
            setNodeData(undefined)
        }
    }

    let sideBarShowHideTest = () => {
        setSideBarOpen(prev => !prev)
    }

    return (
        <div className="w-full h-screen bg-black p-3 overflow-hidden relative">
            <button className="bg-white z-998" onClick={sideBarShowHideTest}>show/hide sidebar</button>
            <NetworkGraph nodeClicked={nodeClicked} />
            <SideBar open={sideBarOpen} nodeData={nodeData} />
        </div>
    )
}