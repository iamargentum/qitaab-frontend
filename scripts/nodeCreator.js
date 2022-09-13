function nodeSelected(event) {
    console.log("type of selected node is ", event.target.value);
}

let selectElement = document.getElementById("nodeTypeSelector")

selectElement.onchange = nodeSelected