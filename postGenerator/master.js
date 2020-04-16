function generate(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
var element = document.createElement("div");
element.innerHTML = this.responseText;
document.body.appendChild(element);
  alert(this.responseText);
};
xhttp.open("GET" , "https://www.shizyab.ir/rand.php" , true);
xhttp.send();

}
