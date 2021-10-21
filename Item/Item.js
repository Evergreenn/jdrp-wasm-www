const getItemFromInventory = () => {

    //WasmCallhere

    const test = {
        id: "toto",
        properties:{
            weapon:{
                damage:{
                    min: 1,
                    max: 4
                }
            }
        },
        img: ""
    }

    return test

}

const createHTMLNode = (item, locationId) => {

    if(locationId === "bag"){
        const slots = document.getElementById("bag").getElementsByClassName("empty-slot");
        // const emptySLot = slots.find(element)
        const toto = Array.from(slots);
        const emptySLot = toto.filter(el => el.childElementCount === 0);

        const element = emptySLot[0];
        const itemNode = document.createElement("div");
        itemNode.className="rpgui-icon sword rpgui-cursor-grab-open"; 
        itemNode.id=item.id; 
        itemNode.draggable=true; 
        itemNode.dataset.type= "weapon"
        element.appendChild(itemNode); 
    }


}

export const Items = () => {
    
    const toto = getItemFromInventory();
    // console.log(toto);
    createHTMLNode(toto, "bag");
}