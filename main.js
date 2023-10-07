const baseBlanca = 31000;
const baseTransparente = 34000;
const ingrediente = 8100;
const pigmento = 9300;

let menu = prompt("Ingrese el producto que desea comprar: | 1. Base | 2. Ingredientes (10% descuento) | 3. Pigmentos | 4. Salir");

while (menu !== "4" && menu.toLowerCase() !== "salir") {
    switch (menu) {
        case "1":
        case "base":
            let base = prompt(
                "Contamos con bases de color: 1. Blanca: $31.000 (500gr) y 2. Transparente: $34.000 (500gr)  ¿Cuál base deseas?"
            );
            if (base === "1" || base.toLowerCase() === "blanca") {
                let cantidadBase = prompt("¿Cuantas bases deseas?");
                const valorBase = cantidadBase * baseBlanca;
                alert("El total de tu compra en bases blancas es: " + valorBase);
            } else if (base === "2" || base.toLowerCase() === "transparente") {
                let cantidadBase = prompt("¿Cuantas bases deseas?");
                const valorBase = cantidadBase * baseTransparente;
                alert("El total de tu compra en bases transparentes es: " + valorBase);
            } else {
                alert("Opción incorrecta");
            }
            break;

        case "2":
        case "ingredientes":
            let ingredientes = prompt("Contamos con 1. Manzanilla, 2. Lavanda y 3. Menta, con un valor de $8.100 (20gr) cada uno, ¿qué ingrediente deseas (10% descuento en todo)?");
            if (ingredientes === ("1") || ingredientes === ("2") || ingredientes === ("3") || ingredientes.toLowerCase() === "manzanilla" || ingredientes.toLowerCase() === "lavanda" || ingredientes.toLowerCase() === "menta") {
                let cantidadIngredientes = prompt("¿Cuantas unidades deseas?");
                const valorIngredientes = cantidadIngredientes * ingrediente;
                const descuentoIngredientes = valorIngredientes * 0.1;
                const valorFinalIngredientes = valorIngredientes - descuentoIngredientes;
                alert("El total de tu compra en ingredientes es: " + valorFinalIngredientes);
            } else {
                alert("Opción incorrecta");
            }
            break;

        case "3":
        case "pigmentos":
            let pigmentos = prompt(
                "Contamos con pigmentos de color: 1. Rojo, 2. Azul y 3. Naranja con un valor cada uno de $9.300 (5gr). ¿Qué color deseas comprar?"
            );
            if (pigmentos === ("1") || pigmentos  === ("2") || pigmentos === ("3") || pigmentos.toLowerCase() === "rojo" || pigmentos.toLowerCase() === "azul" || pigmentos.toLowerCase() === "naranja") {
                let cantidadPigmento = prompt("¿Cuantos pigmentos deseas?");
                const valorPigmento = cantidadPigmento * pigmento;
                alert("El total de tu compra en pigmentos es: " + valorPigmento);
            } else {
                alert("Opción incorrecta");
            }
            break;

        default:
            alert("Opción incorrecta");
            break;
    }

    menu = prompt(
        "Ingrese el producto que desea comprar: | 1. Base | 2. Ingredientes (10% descuento) | 3. Pigmentos | 4. Salir"
    );
}