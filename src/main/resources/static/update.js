
function updateAnimal(id){
	

	var animalId = document.getElementById("id").value;
    var name =  document.getElementById("name").value;
    var age =  document.getElementById("age").value;
    var food =  document.getElementById("food").value;
    var habitat =  document.getElementById("habitat").value;
    var type =  document.getElementById("type").value;
    var imageUrl = document.getElementById("imageUrl").value;
    
    var data = {"id":id,"age": age, "food": food, "habitat": habitat, "imageUrl": imageUrl, "name": name, "type": type};
    var xhttpList = new XMLHttpRequest();
	var json;
    var url = "/api/update";
    
    xhttpList.open("PUT", url,true);
    xhttpList.setRequestHeader("Content-type", "application/json");
    xhttpList.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        	console.log(this.responseText);
        	setBigPicture(getOneAnimal(id,"setPicture"));
            alert("You updated "+name);
        }
    }
    var send = JSON.stringify(data); 
    
    xhttpList.send(send);
    console.log("Animal Updated");
}
//a string version of HTML to be rendered.
function renderModal(id) {

    var animal = getOneAnimal(id,"");

   
    // String that contains the HTML to render our modals
    var modalHtml = '<div class="modal fade" id="my' + id + '"> '
        + ' <div class="modal-dialog modal-xl"> '
        + ' <div class="modal-content"> '

        + '<div class="modal-header">'
        + '<h4 class="modal-title">Update Animal</h4>'
        + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
        + '</div>'

        + '<div class="modal-body">'
        + animalForm(animal)
        + '</div>'
        
        + '<div class="modal-footer">'
        + '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
        + '</div>'

        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';

    

    // Write the modal in the appropriate place.  All modals can be written to the same place on the page, as this does not affect display our function.
    document.getElementById("modals").insertAdjacentHTML('beforeend', modalHtml);

}


function animalForm(animal) {
	var json = JSON.parse(animal);
	var action = "updateAnimal("+json.id+")";
    //returns the form html
    var form = ''
        + '<form >'
        + generateInput(json)
        + '<button type="submit" class="btn btn-primary" data-dismiss="modal" onclick="' + action + '">Submit</button>'
        + '</form>';

        // The HTML of the form above is a string, and can be called by other functions to be rendered where appropriate.
    return form;
}

function generateInput(json){
	// Initialize our variables 
    
    
    
	var html="";
	
	for (var key in json) {
	    if (json.hasOwnProperty(key)) {
	    	var input ='<div class="input-group mb-3">'
	    	    + '<div class="input-group-prepend">'
	    	    + '<span class="input-group-text">'+key+'</span>'
	    	    + '</div>'
	    	    + '<input type="text" class="form-control" placeholder="Enter a '+key+'" id="' + key +'" value="' + json[key] + '">'
	    	    + '</div>';
	    	html+=input;
	    }
	    
	}
	return html;
}