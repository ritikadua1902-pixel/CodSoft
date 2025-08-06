const display=document.getElementById("text")
const buttons=document.querySelectorAll("#button button")
let evaluated=false;
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        let value=button.textContent
        if(value==="AC")
        {
            display.value=""
        }
        else if(value==="DEL")
        {
            display.value=display.value.slice(0,-1)
        }
        else if(value==="=")
        {
            display.value=eval(display.value)
            evaluated=true;
        }
        else{
            if(evaluated)
            {
                display.value="";
                evaluated=false;
            }
            display.value+=value
        }
    })
})
//console.log(buttons)