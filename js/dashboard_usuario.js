const viajes = [
    {
        "id": "V01",
        "Duracion": 2,
        "Fecha": "2024-04-24",
        "Origen": "Miraflores",
        "Destino": "San Isidro",
        "Conductor": "Juan Pérez"
    },
    {
        "id": "V02",
        "Duracion": 1,
        "Fecha": "2024-04-25",
        "Origen": "Surco",
        "Destino": "San Borja",
        "Conductor": "María García"
    },
    {
        "id": "V03",
        "Duracion": 1,
        "Fecha": "2024-04-26",
        "Origen": "Barranco",
        "Destino": "Magdalena",
        "Conductor": "Luis Martínez"
    },
    {
        "id": "V04",
        "Duracion": 3,
        "Fecha": "2024-04-27",
        "Origen": "Lince",
        "Destino": "Jesús María",
        "Conductor": "Ana Rodríguez"
    },
    {
        "id": "V05",
        "Duracion": 3,
        "Fecha": "2024-04-28",
        "Origen": "Pueblo Libre",
        "Destino": "Breña",
        "Conductor": "Carlos Gómez"
    },
    {
        "id": "V06",
        "Duracion": 2,
        "Fecha": "2024-04-29",
        "Origen": "Chorrillos",
        "Destino": "La Molina",
        "Conductor": "Laura Pérez"
    },
    {
        "id": "V07",
        "Duracion": 4,
        "Fecha": "2024-04-30",
        "Origen": "San Miguel",
        "Destino": "Cercado de Lima",
        "Conductor": "Javier González"
    },
    {
        "id": "V08",
        "Duracion": 1,
        "Fecha": "2024-05-01",
        "Origen": "Villa El Salvador",
        "Destino": "Ate",
        "Conductor": "Rosa Díaz"
    },
    {
        "id": "V09",
        "Duracion": 2,
        "Fecha": "2024-05-02",
        "Origen": "San Juan de Lurigancho",
        "Destino": "San Juan de Miraflores",
        "Conductor": "Pedro Sánchez"
    },
    {
        "id": "V10",
        "Duracion": 1,
        "Fecha": "2024-05-03",
        "Origen": "Callao",
        "Destino": "Ventanilla",
        "Conductor": "Isabel López"
    }
];



const $ultimosViajes = $("#ultimosViajes");
const ultimosViajes = viajes.slice(-4);

ultimosViajes.forEach((viaje) => {
    const link = "ultimoviaje.html?idViaje=" + viaje.id;
    const template = `
    <li class="collection-item avatar" data-id="${viaje.id}">
        <i class="material-icons circle red">play_arrow</i>
        <span class="title">${viaje.Origen} - ${viaje.Destino}</span>
        <p class="ciclo">
            Duracion de viaje: ${viaje.Duracion} Hora/s
        </p>
        <p class="ciclo">
            Fecha: ${viaje.Fecha}
        </p>
        <p class="ciclo">
            Conductor: ${viaje.Conductor}
        </p>
    </li>
    `;
    $ultimosViajes.append(template);
});



document.getElementById('verMas').addEventListener('click', function() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const idViaje = params.get("idViaje");
    let misViajes = [];

    if (idViaje) {
        viajes.forEach((viaje) => {
            if (viaje.id == idViaje) {
                const link = "viaje.html?idViaje=" + viaje.id;
                const template = `
                    <li class="collection-item avatar" data-id="${viaje.id}">
                        <i class="material-icons circle red">play_arrow</i>
                        <span class="title">${viaje.Origen} - ${viaje.Destino}</span>
                        <p class="ciclo">
                            Duracion de viaje: ${viaje.Duracion} Hora/s
                        </p>
                        <p class="ciclo">
                            Fecha: ${viaje.Fecha}
                        </p>
                        <p class="ciclo">
                            Conductor: ${viaje.Conductor}
                        </p>
                    </li>
                `;
                misViajes.push(template);
            }
        });

        if (misViajes.length > 0) {
            $("#myTitle").html(misViajes[0].nombre); // Suponiendo que el nombre del viaje se puede obtener del primer elemento
            misViajes.forEach((descripcion) => {
                $("#misViajes").append(descripcion);
            });
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        location.href = "index.html";
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.close();
    });
});