import { useState } from "react";
import { SideBar } from "./SideBar";
import { NetworkGraph } from "./NetworkGraph";

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

    return (
        <div className="w-full h-screen bg-black p-3 overflow-hidden relative">
            <NetworkGraph nodeClicked={nodeClicked} />
            <SideBar open={sideBarOpen} nodeData={nodeData} />
        </div>
    )
}