const key = 'fab56596b272ec71967a7b9b2c08e430';
const barraLateral = document.querySelector('.barraLateral');
const inputBuscar = document.querySelector('.inputBuscar');
const buscadorLugares = document.querySelector('.buscadorLugares');
const botonBuscador = document.querySelector('.botonBuscador');
const geoLocalizacion = document.querySelector('.geoLocalizacion');
const nomCiudades = document.querySelector('.nomCiudades');
const textoBarraLateral1 = document.querySelector('.textoBarraLateral1');
const barraLateral1 = document.querySelector('.nuevaBarra');
const ubicacion = document.querySelector('.ubicacion');
const temp = document.querySelector('.temp');
const estadoTiempo = document.querySelector('.estadoTiempo');
const fechaCompleta = document.querySelector('.fechaCompleta');
const millasViento = document.querySelector('.millasViento');
const numHumedad = document.querySelector('.numHumedad');
const numMillas = document.querySelector('.numMillas');
const numAire = document.querySelector('.numAire');
const barPorcentaje2 = document.querySelector('.barPorcentaje2');
const porcentaje = document.querySelector('.porcentaje');
const textoVisibilidad = document.querySelector('.textoVisibilidad');
const textoAire = document.querySelector('.textoAire');
const nubPrincipal = document.querySelector('.nubPrincipal');
const nubPrincipal2 = document.querySelector('.nubPrincipal2');
const spiner = document.querySelector('.spiner');
const conteinerPron5 = document.querySelector('.conteinerPron5');
const dia1 = document.querySelector('.dia1');
const title1 = document.querySelector('.title1');
const imgTiempo = document.querySelector('.imgTiempo');
const tempMax = document.querySelector('.tempMax');
const tempMin = document.querySelector('.tempMin');

// Fechas
// Fechas

const fecha = new Date();
const fecha1 = new Date();
fecha1.setDate(fecha1.getDate() + 1)
const fecha2 = new Date();
fecha2.setDate(fecha2.getDate() + 2)
const fecha3 = new Date();
fecha3.setDate(fecha3.getDate() + 3)
const fecha4 = new Date();
fecha4.setDate(fecha4.getDate() + 4)
const fecha5 = new Date();
fecha5.setDate(fecha5.getDate() + 5)

const dias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const mostrarFecha = dias[fecha.getDay()] +' '+ fecha.getDate() +' '+ mes[fecha.getMonth()]; 
const mostrarFecha1 = dias[fecha1.getDay()] +' '+ fecha1.getDate() +' '+ mes[fecha1.getMonth()];
const mostrarFecha2 = dias[fecha2.getDay()] +' '+ fecha2.getDate() +' '+ mes[fecha2.getMonth()];
const mostrarFecha3 = dias[fecha3.getDay()] +' '+ fecha3.getDate() +' '+ mes[fecha3.getMonth()];
const mostrarFecha4 = dias[fecha4.getDay()] + ' '+ fecha4.getDate() +' '+ mes[fecha4.getMonth()];
const mostrarFecha5 = dias[fecha5.getDay()] +' '+ fecha5.getDate() +' '+ mes[fecha5.getMonth()]

// Ubicacion actual
// Ubicacion actual

if('geolocation' in navigator) {
     navigator.geolocation.getCurrentPosition(success => {
          const lat = success.coords.latitude;
          const lon = success.coords.longitude;
          
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
          .then(res => res.json())
          .then(data => { 
               nubPrincipal.style = 'visibility: hidden'
               nubPrincipal2.style = 'visibility: visible'
               let imagen = data.weather[0].icon
               let urlIcon = `https://openweathermap.org/img/wn/${imagen}.png`
               let dirImg = document.createElement('img')
               dirImg.src = `${urlIcon}`
               nubPrincipal2.appendChild(dirImg)
               ubicacion.innerHTML = `<i class="fa-solid fa-location-dot"></i> &nbsp; ${data.name}`
               let temperatura = Math.round(data.main.temp)
               temp.textContent = `${temperatura}°C`
               estadoTiempo.textContent = data.weather[0].main
               millasViento.innerHTML = `<span class="v1">${data.wind.speed}</span><span class="v2">mph</span>`
               porcentaje.innerHTML = `<span class="v3">${data.main.humidity}</span><span class="v4">%</span>` 
               barPorcentaje2.style.width = `${data.main.humidity}%`
               textoVisibilidad.innerHTML = `<span class="v5">${data.visibility}</span><span class="v6">miles</span>`
               textoAire.innerHTML = `<span class="v7">${data.main.pressure}</span><span class="v8">mb</span>`

          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
          .then(response => response.json())
          .then(json => {
               const arr5 = json.list.slice(0, 5)

               arr5[0].fecha = `${mostrarFecha1}`
               arr5[1].fecha = `${mostrarFecha2}`
               arr5[2].fecha = `${mostrarFecha3}`
               arr5[3].fecha = `${mostrarFecha4}`
               arr5[4].fecha = `${mostrarFecha5}`
               
               let arr6 = ''
               arr5.forEach(x => {
                    let imagen = x.weather[0].icon
                    let urlIcon = `https://openweathermap.org/img/wn/${imagen}.png`
                    let tz = Math.floor(x.main.temp_max)
                    let ty = Math.floor(x.main.temp_min)
                    
                    arr6 = arr6 + `<div class="card">
                    <div class="seccion1">
                    <h2>${x.fecha}</h2>
                    </div>
                    <div class="seccion2">
                         <img src="${urlIcon}">
                    </div>
                    
                    <div class="seccion3">
                    <h3>${tz}° &nbsp;. &nbsp; ${ty}°</h3>
                    </div>                
                    </div>`                                   
               })
               conteinerPron5.innerHTML = arr6               
          }) 
     });     
});                    
}

 else {
     console.log('Geolocation is not available');
     alert('gg');
}

// boton geolocalizacion
// boton geolocalizacion

geoLocalizacion.addEventListener('click', () => {
     if('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(success => {
               const lat = success.coords.latitude;
               const lon = success.coords.longitude;

               fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
               .then(res => res.json())
               .then(data => {   
                    let imagen = data.weather[0].icon
                    let urlIcon = `<img src="https://openweathermap.org/img/wn/${imagen}.png">`
                    nubPrincipal2.innerHTML = urlIcon
                    ubicacion.innerHTML = `<i class="fa-solid fa-location-dot"></i> &nbsp; ${data.name}`
                    let temperatura = Math.round(data.main.temp)
                    temp.textContent = `${temperatura}°C`
                    estadoTiempo.textContent = data.weather[0].main
                    millasViento.innerHTML = `<span class="v1">${data.wind.speed}</span><span class="v2">mph</span>`
                    porcentaje.innerHTML = `<span class="v3">${data.main.humidity}</span><span class="v4">%</span>` 
                    barPorcentaje2.style.width = `${data.main.humidity}%`
                    textoVisibilidad.innerHTML = `<span class="v5">${data.visibility}</span><span class="v6">miles</span>`
                    textoAire.innerHTML = `<span class="v7">${data.main.pressure}</span><span class="v8">mb</span>`
     
               fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
               .then(response => response.json())
               .then(json => {

                    const arr5 = json.list.slice(0, 5)
                    arr5[0].fecha = `${mostrarFecha1}`
                    arr5[1].fecha = `${mostrarFecha2}`
                    arr5[2].fecha = `${mostrarFecha3}`
                    arr5[3].fecha = `${mostrarFecha4}`
                    arr5[4].fecha = `${mostrarFecha5}`
                    let arr6 = ''
                    arr5.forEach(x => {
                         let imagen = x.weather[0].icon
                         let urlIcon = `https://openweathermap.org/img/wn/${imagen}.png`
                         let tz = Math.floor(x.main.temp_max)
                         let ty = Math.floor(x.main.temp_min)
                         arr6 = arr6 + `<div class="card">
                                             <div class="seccion1">
                                                  <h2>${x.fecha}</h2>
                                             </div>
                                             <div class="seccion2">
                                                  <img src="${urlIcon}">
                                             </div>
                                             <div class="seccion3">
                                                   <h3>${tz}° &nbsp;. &nbsp; ${ty}°</h3>
                                             </div>                
                                        </div>`
                                        
                    })
                    conteinerPron5.innerHTML = arr6               
               }) 
          });     
     });                    
     }
     
      else {
          console.log('Geolocation is not available');
          alert('gg');
     }
})

fechaCompleta.innerHTML = `Today . ${mostrarFecha}`;

// buscador ciudades
// buscador ciudades
                  
botonBuscador.addEventListener('click', async() => {
       try {
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBuscar.value}&units=metric&appid=${key}`)
            if (respuesta.status === 200) {
               const datos = await respuesta.json();

               //   PINTAR API

               textoBarraLateral1.style = 'visibility:hidden'
               nomCiudades.style = 'visibility:visible'
               nomCiudades.innerHTML = `<li>${datos.name}</li>`

          } else if (respuesta.status === 404) {
                 alert('City not found')
            }          
       }
       catch (error) {
            console.log(error)             
       }
})

nomCiudades.addEventListener('click',async ()=> {
      try {
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBuscar.value}&units=metric&appid=${key}`)
          
            if (respuesta.status === 200) {
               const datos1 = await respuesta.json();
               const lat1 = datos1.coord.lat
               const lon1 = datos1.coord.lon
               
               //   PINTAR API
                 
               document.getElementById('barraLateral1').classList.toggle('nuevaBarra');
                 
               let imagen = datos1.weather[0].icon
               let urlIcon = `<img src="https://openweathermap.org/img/wn/${imagen}.png">`
               nubPrincipal2.innerHTML = urlIcon
               let temperatura = Math.round(datos1.main.temp)
               temp.textContent = `${temperatura}°C`
               estadoTiempo.textContent = datos1.weather[0].main
               ubicacion.innerHTML = `<i class="fa-solid fa-location-dot"></i> &nbsp; ${datos1.name}`
               millasViento.innerHTML = `<span class="v1">${datos1.wind.speed}</span><span class="v2">mph</span>`
               porcentaje.innerHTML = `<span class="v3">${datos1.main.humidity}</span><span class="v4">%</span>`
               barPorcentaje2.style.width = `${datos1.main.humidity}%`               
               textoVisibilidad.innerHTML = `<span class="v5">${datos1.visibility}</span><span class="v6">miles</span>`               
               textoAire.innerHTML = `<span class="v7">${datos1.main.pressure}</span><span class="v8">mb</span>`
               
               // pronostico 5 dias
               // pronostico 5 dias
               
               fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&units=metric&appid=${key}`)
               .then(response => response.json())
               .then(json => {
                    const arr5 = json.list.slice(0, 5)
                    arr5[0].fecha = `${mostrarFecha1}`
                    arr5[1].fecha = `${mostrarFecha2}`
                    arr5[2].fecha = `${mostrarFecha3}`
                    arr5[3].fecha = `${mostrarFecha4}`
                    arr5[4].fecha = `${mostrarFecha5}`
                    let arr6 = ''
                    arr5.forEach(x => { 
                         let imagen = x.weather[0].icon
                         let urlIcon = `https://openweathermap.org/img/wn/${imagen}.png`              
                         let tz = Math.floor(x.main.temp_max)
                         let ty = Math.floor(x.main.temp_min)
                         arr6 = arr6 + `<div class="card">
                                             <div class="seccion1">
                                                  <h2>${x.fecha}</h2>
                                             </div>
                                             <div class="seccion2">
                                                  <img src="${urlIcon}">
                                             </div>
                                             <div class="seccion3">
                                                  <h3>${tz}° &nbsp;. &nbsp; ${ty}°</h3>
                                             </div>                
                                        </div>`                                         
                    })
                    conteinerPron5.innerHTML = arr6               
               }) 
               inputBuscar.value = '';
               nomCiudades.style = 'visibility: hidden'     
               }
               else if (respuesta.status === 404) {
               alert('City not found')
               }         
          }
 catch (error) {
               console.log(error)             
           }})
               
//boton cerrar
//boton cerrar

buscadorLugares.addEventListener('click', function() {
     document.getElementById('barraLateral1').classList.toggle('nuevaBarra');
})

const btnCerrarBuscador = document.querySelector('.iconoCerrar');
btnCerrarBuscador.addEventListener('click', function() {
     document.getElementById('barraLateral1').classList.toggle('nuevaBarra');
}) 
