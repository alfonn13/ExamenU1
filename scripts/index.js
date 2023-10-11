document.addEventListener("DOMContentLoaded", ()=> {

    const button = document.getElementById("button");
    const result = document.getElementById("result-container");

    button.addEventListener("click", () => {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        if(!isNaN(length) && !isNaN(width)){

            let area = length * width;
            let perymetre = 2 * (length + width);
            let diametre = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    
            result.innerHTML = `<p> El area del rectangulo es: ${area.toFixed(2)} </p>
            <p> El perimetro ea del rectangulo es: ${perymetre.toFixed(2)} </p>
            <p> El diametro del rectangulo es: ${diametre.toFixed(2)} </p>`;

        }else{
            result.innerHTML = `<p>Por favor, ingrese valores válidos</p>`;
        }
    });

});