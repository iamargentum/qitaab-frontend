import { useState } from "react"
import { CreateApi } from "./CreateApi"
import { CreateComponent } from "./CreateComponent"
import { CreateFile } from "./CreateFile"

const typeOfNodeOptions = [
    {
        text: "Component",
        value: "component"
    },
    {
        text: "API",
        value: "api"
    },
    {
        text: "File",
        value: "file"
    },
]

export function CreateNode() {

    let [typeOfNode, setTypeOfNode] = useState(undefined)

    let typeOfNodeChanged = (event) => {
        if(event.target.value !== undefined) {
            setTypeOfNode(event.target.value)
        }
    }

    return (
        <div>
            <select
                defaultValue=""
                onChange={typeOfNodeChanged}
                className="rounded-md p-2 text-lg"
            >
                <option disabled value="">Select a Type</option>
                {
                    typeOfNodeOptions.map((element, index) => {
                        return (
                            <option key={index} value={element.value}>
                                {element.text}
                            </option>
                        )
                    })
                }
            </select>

            {
                typeOfNode === "component" && (
                    <CreateComponent />
                )
            }

            {
                typeOfNode === "api" && (
                    <CreateApi />
                )
            }

            {
                typeOfNode === "file" && (
                    <CreateFile />
                )
            }
        </div>
    )
}