const b = document.querySelector('button.button--no');
b.addEventListener("mouseover",moveHover);

//function to change postion of the button
function moveHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    b.style.left=i+"px";
    b.style.top=j+"px";
}


var button =b;
//function to change the text in the button(if somehow the cursor comes on the button)
//which can happen if the new position is the current position of the vursor
button.addEventListener('mouseover',function(){
    button.textContent='yes';
});

button.addEventListener('mouseout',function(){
    button.textContent='No';
});