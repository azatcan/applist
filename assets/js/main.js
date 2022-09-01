const enableLoader = () => {
    document.querySelector(".loader-wrapper").style.display = 'flex'
}

const disableLoader = () => {
    document.querySelector(".loader-wrapper").style.display = 'none'
}

window.onload = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => applistelementcreate(json))

};

function applistelementcreate(jsondata){
    let content = "";
    const applistnode = document.querySelector("#app-list-section");
    jsondata.forEach(item=> {
        content = content + `<div class="col-sm-12 col-lg-6">
        <div class="app-card ccard">
            <div class="app-image">
                <img src="./assets/img/unk.png" alt="">
            </div>
            <div class="app-name">${item.title}</div>
            <button onclick="addSelectedList('${item.title}')" class="btn btn-success">Add List</button>
        </div>
    </div>`
    });
    applistnode.innerHTML = content;

}


function addSelectedList(itemName){
const selectedList = document.querySelector("#selectedAppListEl");
const newLink = document.createElement("li");
newLink.className="appListLi";
newLink.style.margin = "15px";
selectedList.appendChild(newLink);
newLink.appendChild(document.createTextNode(itemName));
const elementBtn = document.createElement("button");
elementBtn.className="btn btn-sm btn-danger";

elementBtn.appendChild(document.createTextNode("clear text"));
elementBtn.style.margin="10px";
newLink.appendChild(elementBtn);

}



const deleteElement = document.querySelector("#btnClear");
deleteElement.addEventListener("click",deleteElementLi);

function deleteElementLi() {
    const appListLi = document.querySelector(".appListLi");
    appListLi.remove();


}



