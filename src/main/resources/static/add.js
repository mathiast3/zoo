
function submitAnimal(){
	var xhttpList = new XMLHttpRequest();
	var json;
    var url = "/api/add";
    xhttpList.open("POST", url,true);
    xhttpList.setRequestHeader("Content-type", "application/json");
    xhttpList.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        	console.log(this.responseText);
        }
    }

    var name =  document.getElementById("name").value;
    var age =  document.getElementById("age").value;
    var food =  document.getElementById("food").value;
    var habitat =  document.getElementById("habitat").value;
    var type =  document.getElementById("type").value;
    var imageUrl = document.getElementById("imageUrl").value;
    
    
    var data = {"age": age, "food": food, "habitat": habitat, "imageUrl": imageUrl, "name": name, "type": type};
    var send = JSON.stringify(data); 
    
    
    xhttpList.send(send);
    alert(name+" was submitted!");
    console.log("Animal Added");
    window.location = "/";
}