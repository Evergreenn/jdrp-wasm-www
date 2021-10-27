const getItemFromInventory = () => {

    //WasmCallhere

    const test = {
        id: "toto",
        className: "rpgui-icon sword rpgui-cursor-grab-open",
        type: "weapon",
        properties:{
            weapon:{
                damage:{
                    min: 1,
                    max: 4
                }
            }
        },
        img: ""
    };

    const lala = {
        id: "oui",
        className: "rpgui-icon shield rpgui-cursor-grab-open",
        type: "shield",
        properties:{
            defense: 5
        },
        img: ""

    }

    return [test, lala]

}

const createHTMLNode = (item, locationId) => {

    if(locationId === "bag"){
        const slots = document.getElementById("bag").getElementsByClassName("empty-slot");
        // const emptySLot = slots.find(element)
        const toto = Array.from(slots);
        const emptySLot = toto.filter(el => el.childElementCount === 0);

        const element = emptySLot[0];
        const itemNode = document.createElement("div");
        itemNode.className=item.className; 
        itemNode.id=item.id; 
        itemNode.draggable=true; 
        itemNode.dataset.type= item.type
        itemNode.dataset.stats = btoa(JSON.stringify(item.properties));
        element.appendChild(itemNode); 
    }


}

export const Items = () => {
    
    const toto = getItemFromInventory();
    // console.log(toto);

    toto.forEach(element => {
        createHTMLNode(element, "bag");
    });
   
}