let boxes=document.querySelectorAll(".box");
let msg_container=document.querySelector(".msg_container");
let w_text=document.querySelector(".winner");
let ng_btn=document.querySelector(".new_game");
let reset_btn=document.querySelector(".reset_btn");
console.log(msg_container,w_text,ng_btn);
console.log(boxes);
let player="O";
let wins=[[0,1,2],[0,3,6],[0,4,8],
          [1,4,7],[2,5,8],[2,4,6],
          [3,4,8],[6,7,8]];
for (let box of boxes){
    box.addEventListener("click",()=>{
    if (player=="O"){
        box.innerHTML="O";
        player="X";
    }
    else{
        box.innerHTML="X";
        player="O";
    }
    box.disabled=true;
    predict_winner();


})};

function display_winner(winner){
    w_text.textContent=`congratulations winner ${winner}`;
    msg_container.classList.remove("hide");
    for (let box of boxes){
        box.disabled=true;
    }
}

function predict_winner(){
    for (let win of wins){
        console.log(win);
        console.log(boxes[win[0]],boxes[win[1]],boxes[win[2]]);
        let first=boxes[win[0]].textContent;
        let second=boxes[win[1]].textContent;
        let third=boxes[win[2]].textContent;
        console.log(first,second,third);
        if (first!="" && second!=""&&third!=""){
            if (first==second && second==third){
                console.log("winner",first);
                display_winner(first);
            }
        }
    }

}
function enabled(){
    player="O";
    msg_container.classList.add("hide");
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
ng_btn.addEventListener("click",enabled);
reset_btn.addEventListener("click",enabled);
