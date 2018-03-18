let lu = document.querySelector("#text-input");
let btn = document.querySelector("button");
let pr = document.querySelector(".feedback");
let list = document.querySelector("ul");

// this function runs when btn is clicked


function addItem() {
    // create element
    let li = document.createElement("li");
    
    if(lu.value){
      
        console.log(lu.value);
        li.textContent = '>' + `\n` + lu.value;
        list.appendChild(li);
        lu.value = "";
        lu.focus();
        
    } else{
        
        pr.textContent = 'nothing entered in the paragraph';
        
    }
    // add content to the element
    
    
    // append element to the DOM
    
}

// make addRandomNumber listening for click on btn
btn.addEventListener("click", addItem);