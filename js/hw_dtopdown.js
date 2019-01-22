let dI = Array.prototype.slice.call(document.querySelectorAll(".dropdown-item"));

dI.forEach((item) => {
    item.addEventListener("click", (e) => {
        switch (e.target.tagName) {
            case "SPAN":   
                
                e.target.parentElement.querySelector(".dropdown-menu").classList.toggle("d-none");
                break;
            }
        switch (e.target.tagName) {        
            case "LI":
                let ulMenu = e.target.parentElement;
                let divMenu = Array.prototype.slice.call(ulMenu.querySelectorAll(".dropdown-menu")).filter((item) => {
                    return item.previousElementSibling.textContent !== e.target.querySelector("span").textContent;
                });
                divMenu.forEach((div) => {div.classList.add("d-none")});
                e.target.querySelector(".dropdown-menu").classList.toggle("d-none");
                break;
                
            }
    });
});




