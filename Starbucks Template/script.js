var items = document.querySelectorAll(".item");

for(var i=0;i<items.length;i++){
    items[i].addEventListener("click", function(event){
        for(var j=0;j<items.length;j++)
            items[j].classList.remove("infocus");
        this.classList.add("infocus");
    });
}