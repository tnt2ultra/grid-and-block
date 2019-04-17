var numDiv = 1;
var divArray = [];
var numSelected = 0;

function onClick(el) {
    let id = Number.parseInt(el.id.substr(2));
    divArray[id] = 1 - divArray[id];
    console.log(id + " " + divArray[id]);
    if (divArray[id] === 0) {
        el.style.background = 'green';
        numSelected++;
    } else {
        el.style.background = 'gold';
        numSelected--;
    }
    updateScreen();
}

function addClick(Element) {
    let main= document.getElementById("main");
    let str = '<div id="id' + numDiv + '" onclick="onClick(this)">' + numDiv + '</div>';
    divArray[numDiv] = 1;
    numDiv++;
    main.innerHTML += str;
	return false;
}

function deleteClick(Element) {
    for(let i = 0; i <= divArray.length; i++) {
        if (divArray[i] === 0) {
            let divBlock = document.getElementById("id" + i);
            divArray[i] = -1;
            divBlock.remove();
            numSelected--;
            if (numSelected === 0)
                break;
        }
    }
    updateScreen();
	return false;
}

function updateScreen() {    
    let delButton = document.getElementById("delete");
    if (numSelected === 0) {
        delButton.style.display = 'none';
    } else {
        delButton.style.display = 'block';
    }
    let countSelected = document.getElementById("count");
    countSelected.innerText = "" + numSelected;
}