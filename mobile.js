
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     myObj = JSON.parse(this.responseText);
     var pic = $(".mobpic");
	 var bran= $(".brand");
	 var prc= $(".rate");
	 var mod= $(".model");
	 var mem= $(".memory");
	 var soft= $(".software");
	 var cam= $(".camera");
	 
	 
	 for(p=0;p<8;p++)
	 {
     var aNode = pic[p];
	 var bNode = bran[p];
	 var cNode = prc[p];
	 var dNode = mod[p];
	 var eNode = mem[p];
	 var fNode = soft[p];
	 var gNode = cam[p];
	 aNode.src=myObj.mobiles[p].image;
	 bNode.innerHTML="&nbsp;"+"&nbsp;"+"Manfacturer :"+myObj.mobiles[p].manfacturer;
	 cNode.innerHTML="Rs."+myObj.mobiles[p].price+"&nbsp;";
	 dNode.innerHTML="&nbsp;"+"&nbsp;"+myObj.mobiles[p].modelName;
	 eNode.innerHTML="&nbsp;"+"&nbsp;"+"Storage :"+myObj.mobiles[p].storage;
	 fNode.innerHTML="&nbsp;"+"&nbsp;"+"OS:"+myObj.mobiles[p].os;
	 gNode.innerHTML="&nbsp;"+"&nbsp;"+"Camera :"+myObj.mobiles[p].camera;
	 
	 }

    }
};
xmlhttp.open("GET", "mobileData.json", true);
xmlhttp.send();

function clearFunction()
{
	////document.getElementById("emer").innerHTML="hi"; 
 document.getElementById("filter").reset();	
 

}

function applyFilter(event)
{
	if(event.target.checked)
	{
	////document.getElementById("emer").innerHTML="hi1"; 
	var brandsSelected = []; 
	var storageSelected = []; 
	var softwareSelected = []; 
	//document.getElementById("emer").innerHTML="hi2";
var brands = document.getElementsByClassName("brandman");
var a=-1;
var b=-1;
var c=-1;
////document.getElementById("emer").innerHTML="hi3";
for(var i=0; i<brands.length; i++){
	
      if(brands[i].checked){
           brandsSelected[++a]= brands[i].value;
          document.getElementById("emer1").innerHTML= brands.length;
		  document.getElementById("emer2").innerHTML= brandsSelected[a];
      }
	}

/*var storage = document.getElementsByClassName('storage');
	
	for(var l=0; l<storage.length; l++){
      if(storage[l].checked){
           storageSelected[++b]= storage[l].value;
           
      }
}
	
	var software = document.getElementsByClassName('software');

for(var m=0; m<software.length; m++){
      if(software[m].checked){
           softwareSelected[c++]= software[m].value;
          
      }
}

*/
	var div =$('.mobilePhones');
    var count=0;
	
	for(var j=0;j<div.length;j++)
	{
     
	for(var k=0;k<brandsSelected.length;k++)
	{
		$("#emer3")[0].innerHTML= brandsSelected.length;
$("#emer4")[0].innerHTML= brandsSelected[k];
    if((div[j].getElementsByClassName("brand")[0].innerHTML).includes(brandsSelected[k]) )
	{
		
     div[j].style.opacity=1;
		
     break;
    }
	
	
	}
	if(k==brandsSelected.length)
	{
		div[j].style.opacity=0.1;
	}
}
	}
	else
	{
		
		var div = document.getElementsByClassName('mobilePhones');
		for(var j=0;j<div.length;j++)
	{
     
	
    if((div[j].getElementsByClassName("brand")[0].innerHTML).includes(event.target.value) )
	{
		$("#emer3")[0].innerHTML= "inside else";
		
     div[j].style.opacity=0.1;
	 
	 document.getElementById("emer4").innerHTML= "done with else";
     
    }
	
	
	}
	
}
	}
	function applyFilterSt(event)
{
	if(event.target.checked)
	{
	////document.getElementById("emer").innerHTML="hi1"; 
	
	var storageSelected = []; 
	
	////document.getElementById("emer").innerHTML="hi2";


var b=-1;

////document.getElementById("emer").innerHTML="hi3";

var storage = $('.storage');
	
	for(var l=0; l<storage.length; l++){
      if(storage[l].checked){
           storageSelected[++b]= storage[l].value;
           
      }
}
	
	
	var div = document.getElementsByClassName('mobilePhones');
    var count=0;
	
	for(var j=0;j<div.length;j++)
	{
     
	for(var k=0;k<storageSelected.length;k++)
	{
		document.getElementById("emer3").innerHTML= storageSelected.length;
document.getElementById("emer4").innerHTML= storageSelected[k];
    if((div[j].getElementsByClassName("memory")[0].innerHTML).includes(storageSelected[k]) )
	{
		document.getElementById("emer5").innerHTML= div[j].getElementsByClassName("memory")[0].innerHTML;
		
     div[j].style.opacity=1;
		
     break;
    }
	
	
	}
	if(k==storageSelected.length)
	{
		div[j].style.opacity=0.1;
	}
}
	}
	else
	{
		
		var div = document.getElementsByClassName('mobilePhones');
		for(var j=0;j<div.length;j++)
	{
     
	
    if((div[j].getElementsByClassName("memory")[0].innerHTML).includes(event.target.value) )
	{
		document.getElementById("emer3").innerHTML= "inside else";
		
     div[j].style.opacity=0.1;
	 
	 document.getElementById("emer4").innerHTML= "done with else";
     
    }
	
	
	}
	
}
	}

function applyFilterSoft(event)
{
	if(event.target.checked)
	{
	
	
	var softwareSelected = []; 
	
	//document.getElementById("emer").innerHTML="hi2";


var c=-1;

//document.getElementById("emer").innerHTML="hi3";

var software = document.getElementsByClassName('opsoftware');

for(var m=0; m<software.length; m++){
      if(software[m].checked){
           softwareSelected[++c]= software[m].value;
	  }
}
	
	
	var div = document.getElementsByClassName('mobilePhones');
    var count=0;
	
	for(var j=0;j<div.length;j++)
	{
     
	for(var k=0;k<softwareSelected.length;k++)
	{document.getElementById("emer3").innerHTML= softwareSelected .length;
document.getElementById("emer4").innerHTML=softwareSelected [k];
    if((div[j].getElementsByClassName("software")[0].innerHTML).includes(softwareSelected[k]) )
	{
		document.getElementById("emer5").innerHTML= div[j].getElementsByClassName("software")[0].innerHTML;
		
     div[j].style.opacity=1;
		
     break;
    }
	
	
	}
	if(k==softwareSelected.length)
	{
		div[j].style.opacity=0.1;
	}
}
	}
	else
	{
		
		var div = document.getElementsByClassName('mobilePhones');
		for(var j=0;j<div.length;j++)
	{
     
	
    if((div[j].getElementsByClassName("software")[0].innerHTML).includes(event.target.value) )
	{
		document.getElementById("emer3").innerHTML= "inside else";
		
     div[j].style.opacity=0.1;
	 
	 document.getElementById("emer4").innerHTML= "done with else";
     
    }
	
	
	}
	
}
	}

var modal = $('#myModal')[0];

// Get the button that opens the modal
var smlimg = $(".mobpic");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var bigimage=$("#big")[0];
// When the user clicks the button, open the modal 

smlimg[0].onclick = function() {
    
	
	modal.style.display = "block";
	bigimage.src=myObj.mobiles[0].bigimg;
};
	smlimg[1].onclick = function() {
    
	
	modal.style.display = "block";
	bigimage.src=myObj.mobiles[1].bigimg;
};
smlimg[2].onclick = function() {

	modal.style.display = "block";
	bigimage.src=myObj.mobiles[2].bigimg;
};
smlimg[3].onclick = function() {

	modal.style.display = "block";
	bigimage.src=myObj.mobiles[3].bigimg;
};
smlimg[4].onclick = function() {
    
	modal.style.display = "block";
	bigimage.src=myObj.mobiles[4].bigimg;
};
smlimg[5].onclick = function() {

	modal.style.display = "block";
	bigimage.src=myObj.mobiles[5].bigimg;
};
smlimg[6].onclick = function() {
    

	modal.style.display = "block";
	bigimage.src=myObj.mobiles[6].bigimg;
};
smlimg[7].onclick = function() {
    

	modal.style.display = "block";
	bigimage.src=myObj.mobiles[7].bigimg;
};
	
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


