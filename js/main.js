// Simulador de Cuotas - Pre-Entrega 2
alert("Bienvenido al Simulador de Cuotas")

const nombre = prompt("Ingresá tu nombre")

let opcion = ""
let precio
let cuotas

while (opcion !== "3") {
    opcion = prompt(
        `Hola ${nombre}, elegí una opción:\n` +
        "[1] - Simular una compra en cuotas\n" +
        "[2] - Ver planes disponibles\n" +
        "[3] - Salir"
    )

    switch (opcion) {
        case "1":
            // do...while: pide el precio hasta que sea un número mayor a 0
            do {
                precio = parseFloat(prompt("Ingresá el precio del producto"))
                if (isNaN(precio) || precio <= 0) {
                    alert("❌ Precio inválido. Ingresá un número mayor a 0")
                }
            } while (isNaN(precio) || precio <= 0)

            // do...while: pide las cuotas hasta que sea un plan válido
            do {
                cuotas = parseInt(prompt("Ingresá la cantidad de cuotas (1, 3, 6 o 12)"))
                if (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12) {
                    alert("❌ Número de cuotas inválido. Elegí 1, 3, 6 o 12")
                }
            } while (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12)

            // Igual que en la Pre-Entrega 1: el precio se divide en cuotas sin interés
            const valorCuota = precio / cuotas

            // for: se conoce la cantidad de repeticiones (una por cuota)
            console.log(`--- Detalle de pagos de ${nombre} ---`)
            for (let i = 1; i <= cuotas; i++) {
                console.log(`Cuota ${i} de ${cuotas}: $${valorCuota.toFixed(2)}`)
            }

            alert(
                `Resumen:\n` +
                `Precio: $${precio.toFixed(2)}\n` +
                `${cuotas} cuotas de $${valorCuota.toFixed(2)}\n\n` +
                "(Mirá la consola para ver el detalle de cada cuota)"
            )
            break

        case "2":
            alert(
                "Planes disponibles (todos sin interés):\n" +
                "1 cuota\n" +
                "3 cuotas\n" +
                "6 cuotas\n" +
                "12 cuotas"
            )
            break

        case "3":
            alert(`¡Gracias por usar el simulador, ${nombre}!`)
            break

        default:
            alert("❌ Opción inválida. Elegí 1, 2 o 3")
    }
}
