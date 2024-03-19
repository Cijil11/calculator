//display content in clac Screen
const displayContent = (content)=>{
    calcScreen.value += content
}
//clear all content
const clearAllContent = ()=>{
    calcScreen.value = ""
}


//result display in calscreen
const showResult=()=>{
    try{
        console.log("try block");
        calcScreen.value = eval(calcScreen.value)
    }
    catch(err){
        console.log("catch block");
        console.log(err);
        calcScreen.value=""
        calcScreen.placeholder ="invalid expression..."
    }
    finally{
        console.log("finally block: task completed");
    }
}