$(document).ready(function(){
	
	let selected_index = -1; 
	let muistilistaArray = [];
    
	if(localStorage.getItem("muistilista") != null) {
		tulosta();
	}  
    
   	$("#lisaa_nappi").click(function(){ 
	
        if($("#inputti").val() != ""){ 
		let muistilistaMerkinta = $("#inputti").val();
        	muistilistaArray.push(muistilistaMerkinta);
        	localStorage.setItem("muistilista",JSON.stringify(muistilistaArray));
	}
		
        $("#inputti").val("");
        $("#inputti").focus();
        tulosta();
    	});

$("#lista").on('click','li',function(e){
	
        $(this).hide(500, function(){
        muistilistaArray.splice(selected_index,1);
        localStorage.setItem("muistilista", JSON.stringify(muistilistaArray));
        tulosta();
        })
})
	function tulosta(){
		if (localStorage.getItem("muistilista") != null){ 
			let muistilistaJSON = localStorage.getItem("muistilista");
			muistilistaArray = JSON.parse(muistilistaJSON);	
            
            		if(muistilistaArray == null){ 
				muistilistaArray = [];
            		}

            		$("#lista").empty();

			for(let i = 0;i < muistilistaArray.length; i++){
                	$("#lista").append("<li>" + muistilistaArray[i] + "</li>");
            		}
		}	
	}
});
