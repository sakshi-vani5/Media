let form=document.querySelector("form");
let tbody=document.querySelector("tbody");
console.log(form)

form.addEventListener("submit",getData);

function getData(){
    event.preventDefault();
    // console.log("hello");
   
    let name=document.getElementById("name").value;
    let id=document.getElementById("id").value;
    let spe=document.getElementById("spe").value;
    let exp=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mob=document.getElementById("mob").value;
  


    let obj={
        name:name,
        id:id,
        spe:spe,
        exp:exp,
        email:email,
        mob:mob


    }
    // console.log(obj);
    let arr=[];
    arr.push(obj);
   console.log(arr);

console.log(name,id,spe,exp,email,mob);

let row=document.createElement("tr");
let col1=document.createElement("td");
let col2=document.createElement("td");
let col3=document.createElement("td");
let col4=document.createElement("td");
let col5=document.createElement("td");
let col6=document.createElement("td");
let col7=document.createElement("td");



// console.log(row);
// console.log(col1);

let op1=col1.innerText=name;
// console.log(op1);
let op2=col2.innerText=id;
// console.log(op2);
let op3=col3.innerText=spe;
let op4=col4.innerText=exp;

if(exp<=2){
    col4.innerText= exp+""+"Year of experience it means you are Trainie";
}else if(exp<=5){
    col4.innerText= exp+""+" Year of experience it means you are Junior";
}else{
    col4.innerText= exp+""+" Year of experience it means you are Senior";
}

let op5=col5.innerText=email;
let op6=col6.innerText=mob;
let op7=col7.innerText="Delete";
col7.style.backgroundColor="red"
// col7.setAttribute("id","dlt");

// let btn=document.getElementById("dlt");
// btn.addEventListener("click",mydlt);

// function mydlt(){
//    console.log("first")
// }




let roww=row.appendChild(col1);
let roww2=row.appendChild(col2);
let roww3=row.appendChild(col3);
let roww4=row.appendChild(col4);
let roww5=row.appendChild(col5);
let roww6=row.appendChild(col6);
let roww7=row.appendChild(col7);
// console.log(roww,roww2,roww3,roww4,roww5,roww6);

let tbodyy=tbody.append(row);







}