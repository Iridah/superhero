/*captura*/
const num = $("#botton").val();
let form = document.getElementById("form");

/*validacion*/
form.addEventListener( "submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textAsunt = document.querySelector(".textAsunt").value; 
    let resultado = validar(textAsunt);
    if (resultado == true){
        exito();
    };
   });

   function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorAsunt").innerHTML = "";
   };

   function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario validado, desplegando resultados...";   
   };

   function validar(asunt) {
    let pasamosLaValidacion = true;
    let validacionAsunto = /[0-9]/;
    if (validacionAsunto.test(asunt) == false) {
        document.querySelector(".errorAsunt").innerHTML = "Ingrese un codigo de superheroe correcto, por favor.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
   };
/*ajax*/
$(function(){
    $.ajax({
        url: 'https://fixcors.site/https://superheroapi.com/api/2143190186025796/'+num,
        type: "GET",
        dataType: "json",
        success: function () {
            $('div.posts');
            console.log($('div.posts'));
        },
    });
});




/*canvasJS*/
var options = {
	title: {
		text: "Desktop OS Market Share in 2017"
	},
	subtitles: [{
		text: "As of November, 2017"
	}],
	animationEnabled: true,
	data: [{
		type: "pie",
		startAngle: 40,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 48.36, label: "Windows 7" },
			{ y: 26.85, label: "Windows 10" },
			{ y: 1.49, label: "Windows 8" },
			{ y: 6.98, label: "Windows XP" },
			{ y: 6.53, label: "Windows 8.1" },
			{ y: 2.45, label: "Linux" },
			{ y: 3.32, label: "Mac OS X 10.12" },
			{ y: 4.03, label: "Others" }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

