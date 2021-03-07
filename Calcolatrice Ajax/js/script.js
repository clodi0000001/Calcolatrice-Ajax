
function n(dato){ 
  document.getElementById("operazioni").value+=dato;
}
function operazione_jsGet() { 
///document.getElementById("operazioni").value= eval(document.getElementById("operazioni").value);
var expr=encodeURIComponent(document.getElementById("operazioni").value);
Get(expr);
}
function operazione_jqueryGet() { 
  ///document.getElementById("operazioni").value= eval(document.getElementById("operazioni").value);
  var expr=encodeURIComponent(document.getElementById("operazioni").value);
  jqueryGet(expr);
  }
function operazione_jsPost() { 
  ///document.getElementById("operazioni").value= eval(document.getElementById("operazioni").value);
  var expr1= document.getElementById("operazioni").value;
  Post(expr1);
}
function operazione_jqueryPost() { 
  ///document.getElementById("operazioni").value= eval(document.getElementById("operazioni").value);
  var expr1= document.getElementById("operazioni").value;
  jqueryPost(expr1);
}


function cancella() { 
document.getElementById("operazioni").value=""; 
}
function Get(expr) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("operazioni").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "http://api.mathjs.org/v4/?expr="+expr, true);
  xhttp.send();
}

function jqueryGet(expr){
  $.get("http://api.mathjs.org/v4/?expr="+expr, function( data ) {
    $("#operazioni").val(data); 
    });
}

function Post(expr1){
var postData ={
  "expr": [expr1]
};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    obj = JSON.parse(this.responseText);
     document.getElementById("operazione").value = obj.result;
    }
    };
   xhttp.open("POST","http://api.mathjs.org/v4/", true);
  xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(  JSON.stringify(postData));
}

function jqueryPost(expr1){
  var postData ={
    "expr": [expr1]
  };
jQuery.ajax ({
    url:  "http://api.mathjs.org/v4/",
    type: "POST",
    data: JSON.stringify(postData),
    dataType: "json",
    contentType: "application/json",
    success: function(data,textStatus,jQxhr){
     $("#operazioni").val(data.result);
    }
  });
}