let url="https://api.genderize.io?name=";
let wrapper=document.getElementById('wrapper') ;
let predictgender=()=>{
   let name=document.getElementById('name').value;
   console.log(name);
   let error=document.getElementById("error");
   let finalurl=url+name;
   console.log(finalurl);
   wrapper.innerHTML="";
   if(name.length>0 && /^[A-Za-z]+$/.test(name))
   {
    fetch(finalurl).then(
        res=>
        {
            res.json().then(
                data=>{
                    console.log(data);
                    let div=document.createElement("div");
                    div.setAttribute("id","info");
                    div.innerHTML=`<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/><h4 id="prob"> Probablity:${data.probability}</h4> `;
                    wrapper.append(div);
                    if(data.gender== "female"){
                        div.classList.add("female");
                        document.getElementById("gender-icon").setAttribute("src","female.jpg") 
                    }
                    else
                    
                    {
                        div.classList.add("male");
                        document
                        .getElementById("gender-icon")
                        .setAttribute("src","male.png") 
                    }
                }
            )
        }
        
    )
     document.getElementById("name").value="";

   }
   else{
    error.innerHTML="Enter a valid name";
   }

}
document.getElementById("submit").addEventListener("click",predictgender);
window.addEventListener("load",predictgender);