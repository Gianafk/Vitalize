document.getElementById("criar").addEventListener("click", function() {
    const novaDiv = document.createElement("div");
  
    novaDiv.style.width = "340px";
    novaDiv.style.height = "80px";
    novaDiv.style.backgroundColor = "aliceblue"; 
    novaDiv.style.marginBottom = "10px";
    novaDiv.style.borderRadius = "25px";
    novaDiv.style.alignSelf = "center";
    novaDiv.style.flexShrink = "0";

  
    document.getElementById("depsection").appendChild(novaDiv);

  });