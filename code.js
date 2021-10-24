var script = document.createElement('script'); 
document.head.appendChild(script);    
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
script.onload = function(){
function descarga(direccion) {
var numal = Math.floor((Math.random() * 1000000) + 1);
var image = new Image();
image.crossOrigin = "anonymous";
image.src = direccion;
var fileName = image.src.split(/(\\|\/)/g).pop();
image.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    canvas.getContext('2d').drawImage(this, 0, 0);
    var blob;
    if (image.src.indexOf(".jpg") > -1) {
    blob = canvas.toDataURL("image/jpeg");
    } else if (image.src.indexOf(".png") > -1) {
    blob = canvas.toDataURL("image/png");
    } else if (image.src.indexOf(".gif") > -1) {
    blob = canvas.toDataURL("image/gif");
    } else {
    blob = canvas.toDataURL("image/jpeg");
    }
    $("body").append("<a id='"+numal+"' download='" + fileName + "' href='" + blob + "'>Descargando...</a>");
	document.getElementById(numal).click()
};
}
$('div[style*="blob"]').each(function() {
		console.log("Descargando: " + $(this).css("background-image").replace("url(\"", "").replace("\")", ""))
		descarga($(this).css("background-image").replace("url(\"", "").replace("\")", ""));
});	
} 

// Probando VSCODE