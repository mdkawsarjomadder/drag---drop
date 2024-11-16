let  lists = document.getElementsByClassName("list");
let rights = document.getElementById("right");
let  lefts = document.getElementById("left");


for(lst of lists){
    lst.addEventListener("dragstart", function(e){
        let selected = e.target;

        rights.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rights.addEventListener("drop", function(e){
            rights.appendChild(selected);
            selected = null;
        });


        lefts.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        lefts.addEventListener("drop", function(e){
            lefts.appendChild(selected);
            selected=null;
        })
    })
}