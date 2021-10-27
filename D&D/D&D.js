export function DandD(defaultStats) {

    const handleDragStart = (ev) => {
        const j = JSON.stringify({ "id": ev.target.id, "class": ev.target.classList })
        ev.dataTransfer.setData('text/plain', j);
        ev.dataTransfer.effectAllowed = 'move';
    }

    const handleDragEnd = (ev) => {
        ev.preventDefault();
    }

    const handleDragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"

    }

    const handleDragEnter = (ev) => {
        ev.preventDefault();
    }

    const handleDragLeave = (ev) => {
        ev.preventDefault();

    }

    function handleDrop(ev) {
        ev.stopPropagation(); // stops the browser from redirecting.
        ev.preventDefault();
        var dragObj = JSON.parse(ev.dataTransfer.getData("text"));

        const draggableElement = document.getElementById(dragObj.id);
        const dropzone = ev.target;

        if (dropzone.offsetParent.id === "bag") {
            if (dropzone.id == "") {
                dropzone.appendChild(draggableElement);
            } else {
                exchangeElements(draggableElement, dropzone)
            }
            removeItemStats(draggableElement)
        } else {
            const dragged_type = draggableElement.dataset.type;

            if (dropzone.id == "") {
                const slot_type = dropzone.className;
                const exploded = slot_type.split("-");

                const is_right_type = exploded.find(el => el.includes(dragged_type)) ? true : false;

                if (is_right_type) {
                    dropzone.appendChild(draggableElement)
                    itemStats(draggableElement);
                }

                
            } else {

                const parent_dropzone = dropzone.parentElement.className;
                const exploded = parent_dropzone.split("-");

                const is_right_type = exploded.find(el => el.includes(dragged_type)) ? true : false;

                if (is_right_type) {
                    exchangeElements(draggableElement, dropzone)
                    itemStats(draggableElement);
                }
            }
        }

    }

    const removeItemStats = item => {
        // const stats = JSON.parse(atob(item.dataset.stats));
        if (item.dataset.type === "weapon") {
            document.getElementById("min-damage").innerText = defaultStats.min;
            document.getElementById("max-damage").innerText = defaultStats.max;
        }else if (item.dataset.type === "shield") {
            document.getElementById("defense").innerText = defaultStats.defense;

        }
    }

    const itemStats = item => {
        const stats = JSON.parse(atob(item.dataset.stats));

        if (item.dataset.type === "weapon") {
            document.getElementById("min-damage").innerText = stats.weapon.damage.min;
            document.getElementById("max-damage").innerText = stats.weapon.damage.max;
        }else if (item.dataset.type === "shield") {
            document.getElementById("defense").innerText = stats.defense;

        }
    }

    const exchangeElements = (element1, element2) => {
        const clonedElement1 = element1.cloneNode(true);
        const clonedElement2 = element2.cloneNode(true);

        element2.parentNode.replaceChild(clonedElement1, element2);
        element1.parentNode.replaceChild(clonedElement2, element1);

        return clonedElement1;
    }

    let items = document.querySelectorAll('.drag');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
    });

}