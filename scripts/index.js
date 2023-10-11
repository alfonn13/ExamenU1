/*
Alfonso Reviejo Valle
GitHub: 
*/

document.addEventListener("DOMContentLoaded", ()=> {

    //Enlazamos las variables creadas con getElementById para coger el id del HTML 

    const button = document.getElementById("button");
    const result = document.getElementById("result-container");

    //Hacemos un evento con el button para que cuando le des click haga las operaciones necesarias

    button.addEventListener("click", () => {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        // Condicion para que los campos sean números
        if(!isNaN(length) && !isNaN(width)){

        //Calculos de area, perimetro, diametro
            let area = length * width;
            let perymetre = 2 * (length + width);
            let diametre = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
            
        //Para mostrar el resultado lo hacemos con innerHTML 
            result.innerHTML = `<p> El area del rectangulo es: ${area.toFixed(2)} </p>
            <p> El perimetro ea del rectangulo es: ${perymetre.toFixed(2)} </p>
            <p> El diametro del rectangulo es: ${diametre.toFixed(2)} </p>`;

        //Mensaje si no se ingresan valores
        }else{
            result.innerHTML = `<p>Por favor, ingrese valores válidos</p>`;
        }
    });

});