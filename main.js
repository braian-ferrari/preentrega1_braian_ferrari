let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese contraseña");
let partidosJugados = parseInt(prompt("Indique  el numero de partidos jugados"));
let totalTiros = 0;
let totalTirosConvertidos = 0;
let totalRebotesTomados = 0;
let totalAsistenciasDadas = 0;
let totalMinutosJugados = 0;

function calcularTotales(partidosJugados) {

    if (partidosJugados != 0) {
        for (let i = 1; i <= partidosJugados; i++) {
            let tiros = parseInt(prompt("Cuantos tiros en total en el partido " + i));
            let tirosConvertidosPartido = parseInt(prompt("Cuantos convirtio en el partido " + i));
            let rebotesTomadosPartido = parseInt(prompt("Cuantos rebotes tomo en el partido " + i));
            let asistenciasDadasPartido = parseInt(prompt("Cuantas asistencias en el partido " + i));
            let minutosJugadosPartido = parseInt(prompt("¿Cuanto minutos jugó en el partido " + i));

            totalTiros += tiros;
            totalTirosConvertidos += tirosConvertidosPartido;
            totalRebotesTomados += rebotesTomadosPartido;
            totalAsistenciasDadas += asistenciasDadasPartido;
            totalMinutosJugados += minutosJugadosPartido;
        }
    } else {
        alert("No se Jugaron Partidos🚨🚨🚨");
    }
}

calcularTotales(partidosJugados);

console.log("Total de tiros: " + totalTiros);
console.log("Total de tiros convertidos: " + totalTirosConvertidos);
console.log("Total de rebotes tomados: " + totalRebotesTomados);
console.log("Total de asistencias dadas: " + totalAsistenciasDadas);
console.log("Total de minutos jugados: " + totalMinutosJugados);