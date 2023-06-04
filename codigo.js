 // 1 es piedra, 2 es papel, 3 es tijera

 let triunfos = 0
 let perdidas = 0
 while ((triunfos < 3) && (perdidas < 3)) {

     let jugador = parseInt(prompt("Elige: 1 - Piedra, 2 - Papel , 3 - Tijera "))
     let pc =  random(1, 3)

     alert("Elegiste " + eleccion(jugador) + " y la computadora eligió " + eleccion(pc) )

     // COMBATE
     if(pc == jugador) {
         alert("EMPATE")
     } else if ( (jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2) ) {
         alert("GANASTE")
         triunfos++
     } else {
         alert("PERDISTE")
         perdidas++
     }
 } 

 alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces")

 function eleccion(params) {
     switch (parseInt(params)) {
         case 1:
             texto = "Piedra 🥌"
             break;
         case 2:
             texto = "Papel 📋"
             break;
         case 3:
             texto = "Tijera ✂"
             break;
         default:
             texto = "el valor equivocado"
             break;
     }
     return texto
 }

 function random(min, max) {
     return Math.floor((Math.random() * (max - min + 1)) + min);
 }