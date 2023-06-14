function add(){
    let text1 = document.getElementById("input-field-1").value;
    let text2 = document.getElementById("input-field-2").value;
    let sum
    sum=Number(text1)+ Number(text2)
    document.getElementById("ans").innerText=sum
}
function sub(){
    let text1 = document.getElementById("input-field-1").value;
    let text2 = document.getElementById("input-field-2").value;
    let sum
    sum=Number(text1) - Number(text2)
    document.getElementById("ans").innerText=sum
}
function divi(){
    let text1 = document.getElementById("input-field-1").value;
    let text2 = document.getElementById("input-field-2").value;
    let sum
    sum=Number(text1) / Number(text2)
    document.getElementById("ans").innerText=sum
}
function multi(){
    let text1 = document.getElementById("input-field-1").value;
    let text2 = document.getElementById("input-field-2").value;
    let sum
    sum=Number(text1) * Number(text2)
    document.getElementById("ans").innerText=sum
}
function mod(){
    let a = document.getElementById("input-field-1").value;
    let b = document.getElementById("input-field-2").value;
    let sum
    sum=Number(a) % Number(b)
    document.getElementById("ans").innerHTML =sum
}