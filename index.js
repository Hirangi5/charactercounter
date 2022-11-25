const strE1 = document.getElementById("inText")
const totalCounterE1 = document.getElementById("totalCounter");
const remE1 = document.getElementById("rem");
strE1.addEventListener("keyup",()=>{
    updateCounter()
    
})



function updateCounter(){
    totalCounterE1.innerText = "Total Characters: "+strE1.value.length;
    const remCount = 50 - strE1.value.length;
    remE1.innerText= "Remaining: " + remCount;
}