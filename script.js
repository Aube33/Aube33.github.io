cases = document.getElementsByClassName("home_projects-case");

for(var i=0; i<cases.length; i++){
    cases[i].addEventListener("click", function(e) {
        for(var x=0; x<e.path.length; x++){
            if(e.path[x].hasAttribute("data-id")){
                if(e.path[x].getAttribute("data-id")==1){
                    window.location.href = "./ghibli/index.html";
                }
            }
        }
      });
}