function deleteAnimal(id){
	    
	    //confirm the animal should be deleted
	    if(confirm("Are you sure you want to delete?")){
	    	var xhttpList = new XMLHttpRequest();

		    xhttpList.onreadystatechange = function(){
		        if(this.readyState == 4 && this.status == 200){
		            console.log(this.responseText);
		            window.location.reload()
		        }
		    }
		    var url = "/api/delete/"+id;
		    xhttpList.open("DELETE", url,true);
	    	xhttpList.send();
		    console.log("Animal Deleted");
	    }
	    
}
