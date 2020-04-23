 var list=['one','two','three','four','five'];
 list.forEach(function(element) {
 document.getElementById(element).addEventListener("click", function(){
      var cls=document.getElementById(element).className;
      if(cls.includes("unchecked"))
         {
         for(x of list){
          	document.getElementById(x).classList.remove("unchecked");
          	document.getElementById(x).classList.add("checked");
            if(element==x) break;
          }
        }
      else
        {
        	for(i=list.indexOf(element)+1;i<list.length;i++){
			  document.getElementById(list[i]).classList.remove("checked");
			  document.getElementById(list[i]).classList.add("unchecked");
			}
        }
	});
});

document.getElementById("buttonnew").addEventListener("click", function(){
  alert("Work in progress");
});
