// grocery Tracker - Practice Task 

function groceryTracker(){
    let grocery1 = parseFloat(document.getElementById('grocery1').value)
    let grocery2 = parseFloat(document.getElementById('grocery2').value)
    let grocery3 = parseFloat(document.getElementById('grocery3').value)

    let total = grocery1+grocery2+grocery3;
    console.log("total is:", total); 

    document.getElementById('result').innerText=`The total amount is: $ ${total}`


}
