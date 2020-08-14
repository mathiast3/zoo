function initialize(){
    //console.log("Opened");

    getAnimals("/api/animals");
    getOneAnimal(1,"setPicture");
    
}

function getAnimals(url){

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
	
	
	for(var i = 0;i<json.length;i++){
		var id =json[i].id;
		var divHtml = '<div class="col-md-3 col-sm-6 mb-4">'+'<img class="img-fluid pic" onclick="getOneAnimal('+id+", "+"'setPicture'"+')" src='+
		json[i].imageUrl +' alt="">'+'</div>';
		html.innerHTML += divHtml;
	}
}

function getOneAnimal(id,usage){
	var xhttpList = new XMLHttpRequest();

    xhttpList.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        	var response = this.responseText;
        	sessionStorage.setItem("animal", this.responseText);
        	if(usage == "setPicture"){
        		setBigPicture(response);
        	}
        	
        }
    }
    var url = "/api/animal/"+id;
    xhttpList.open("GET", url,true);
    xhttpList.send();
    return sessionStorage.getItem("animal");
}


function setBigPicture(data){
	var json = JSON.parse(data);
	var modal = document.getElementById("modals");
	modal.innerHTML = "";
	renderModal(json.id);
	//set the main image
	var big = document.getElementById("bigImage");
	big.src=json.imageUrl;
	
	//get name, details, buttons
	var name = document.getElementById("currentName");
	var details = document.getElementById("currentDetails");
	var buttons = document.getElementById("buttons");
	var deleteButton = "<button class='btn' onclick=deleteAnimal("+json.id+")>Delete</button>";
	//clear details and buttons
	details.innerHTML = "";
	buttons.innerHTML = "";
	
	//set all other properties
	for (var key in json) {
	    if (json.hasOwnProperty(key)) {
	        
	        if(key=="name"){name.innerHTML =json.name;}
	        //skip image and id
	        else if(key=="imageUrl" || key =="id"){}
	        else{details.insertAdjacentHTML('beforeend', generateElement(json,key));}
	    }
	}

	var buttonHtml = '<button type="button" class="btn" data-toggle="modal" data-target="#my' + json.id + '">' + "Update" + '</button>';
	    
	buttons.insertAdjacentHTML('beforeend', buttonHtml);   
	buttons.insertAdjacentHTML('beforeend', deleteButton) ;

}

function generateElement(json,key){
	
	var li = '<li>'+key+': '+ json[key] + '</li>';

	return li;
}