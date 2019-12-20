function ajout(){
   let d = document.createElement("div");
   document.body.append(d)

   let a= document.getElementById("inp");
   var newButton1 = document.createElement("button")
   newButton1.innerHTML = "complete"; 
   var newButton2 = document.createElement("button")
   newButton2.innerHTML = "delete";
   newButton2.className="supp"
   var newLabel = document.createElement("label")
   newLabel.innerHTML = a.value;
   d.append(newButton1);
   d.append(newButton2);
   d.append(newLabel);
   var newBr = document.createElement("br")
   d.append(newBr)
   newButton1.addEventListener('click',function undo(){ 
      newButton1.innerHTML = "undo";
      newLabel.style.textDecoration = "line-through"
   })
  
      let tab =document.getElementsByClassName("supp")
      for (let i=0; i<tab.length; i++)
      {
         tab[i].onclick=function(){
            console.log("aa")
            let a=this.parentElement;
            a.style.display= "none";
         }
      }



   
  

}

