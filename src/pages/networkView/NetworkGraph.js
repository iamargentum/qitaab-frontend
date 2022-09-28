import { Network } from "vis-network"
import { useEffect, useRef } from "react"
import { dummyEdges, dummyNodes } from "./dummy"

export function NetworkGraph({nodeClicked}) {

    let visNetworkRef = useRef()

    let showDetails = (data) => {
        nodeClicked(data)
    }

    useEffect(() => {
        let data = {
            nodes: dummyNodes,
            edges: dummyEdges
        }
    
        var visNetworkOptions = {
            nodes: {
                shape: "dot",
                size: 30,
                font: {
                    size: 32,
                    color: "#ffffff"
                },
                borderWidth: 2,
            },
            edges: {
                width: 2
            }
        }
        if(visNetworkRef.current) {
            let network = new Network(visNetworkRef.current, data, visNetworkOptions)
            network.on("click", showDetails)
        }

    }, [visNetworkRef])

    return (
        <div
            ref={visNetworkRef}
            className="w-full h-full z-997"
        ></div>
    )
}