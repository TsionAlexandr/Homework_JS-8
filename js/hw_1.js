// // Задача 1.

document.getElementById("btn-msg").addEventListener("click", (e) => {alert(e.target.dataset.text);});

// // Задача 2.


function setColor(e){
     
    if(e.type === "mouseover")
        e.target.classList.add("red");
    else if(e.type === "mouseout")
        e.target.classList.remove("red")    ;
}

let btn = document.getElementById("btn-msg");
btn.addEventListener("mouseover", setColor);
btn.addEventListener("mouseout", setColor);





// Задача 3.

document.body.onclick = (e) => document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName;



// Задача 4.


document.getElementById("btn-generate").addEventListener("click", () => {
    let ulLi = document.createElement("li")
    ulLi.textContent = `Item ${document.querySelector("ul").children.length + 1}`;
    document.querySelector("ul").appendChild(ulLi);
});