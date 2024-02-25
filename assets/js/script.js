/*captura*/
let form = document.getElementById("form");

/*validacion*/
form.addEventListener( "submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textAsunt = document.querySelector(".textAsunt").value; 
    let resultado = validar(textNombre,textAsunt,textMensaje);

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
    let validacionAsunto = /[0-9]/i;
    if (validacionAsunto.test(asunt) == false) {
        document.querySelector(".errorAsunt").innerHTML = "Ingrese un codigo de superheroe correcto, por favor.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
   };
/*ajax*/
$(function(textAsunt){
    $.ajax({
        url: "https://superheroapi.com/api/2143190186025796/",
        type: "GET",
        dataType: "json",
        success: function (posts) {
            posts.forEach((post) => {
                const li = $("<li>").text(post.title);

                $("#posts").append(li);
            });
        },
    });
});
