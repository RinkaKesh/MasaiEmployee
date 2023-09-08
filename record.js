let myForm=document.querySelector("form");
let Name=document.getElementById("name");
let ID=document.getElementById("employeeID");
let dept=document.getElementById("department");
let Exp=document.getElementById("exp");
let Email=document.getElementById("email");
let Mob=document.getElementById("mbl");
let tbody=document.querySelector("tbody")


let EmpData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let data={
        nam:Name.value,
        Id:ID.value,
        dep:dept.value,
        expe:Exp.value,
        mail:Email.value,
        mob:Mob.value,
    }
    EmpData.push(data);
    // console.log(EmpData)
    tbody.innerHTML="";

    EmpData.map((ele,i)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("button");
        
        
        td1.innerText=ele.nam;
        td2.innerText=ele.Id;
        td3.innerText=ele.dep;
        td4.innerText=ele.expe;
        td5.innerText=ele.mail;
        td6.innerText=ele.mob;
        td8.innerText="Delete"

        if(Number(ele.expe)>5){
            td7.innerText="Senior"
        }
        
        if(Number(ele.expe)<=1){
            td7.innerText="Fresher"
        }
        else{
            td7.innerText="Junior"
        }

        td8.addEventListener("click",function(){
            tr.innerHTML="";
            EmpData.splice(i,1);
        })

    
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        
        tbody.append(tr)
    
    
    
      })
    

})


// fill in javascript code here