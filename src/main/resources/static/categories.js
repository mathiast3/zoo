function initialize(habitat){
    //console.log("Opened");

    getAnimalsByHabitat("/api/animals/"+habitat);
}

function getAnimalsByHabitat(url){

    var xhttpList = new XMLHttpRequest();

    xhttpList.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            renderAnimals(this.responseText);
        }
    }
    xhttpList.open("GET", url,true);
    xhttpList.send();
    
    console.log("List Received");
}



function renderAnimals(data){
	
	var json = JSON.parse(data);
	var html = document.getElementById("animals");
	
	html.innerHTML ="";
	for(var i = 0;i<json.length;i++){
		var id =json[i].id;
		var divHtml = '<div class="col-md-6">'+'<img class="img-fluid pic"  src='+
		json[i].imageUrl +' alt=""><br><strong>'+json[i].name+'</strong></div>';
		html.innerHTML += divHtml;
	}
}