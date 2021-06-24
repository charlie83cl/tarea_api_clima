$(document).ready(function(){

    $('#buscar_ciudad').click(function(){
        $('#my_form').submit();
    });

    $('form').submit(function() {
        var ciudad = $('#ciudad_buscada').val();
        if (ciudad.trim().length > 0)
        {
            var units = 'metric';   //especificar de esta forma que usaremos el sistema metrico para temperatura en Celsius
            var appid ='0ae3a66cbe339a9030b6655b903384dc'; //acá va mi apiid que obtuve creando una cuenta en openweathermap.org
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&language=es&&units=${units}&appid=${appid}`;
            //
            $.get(url, function(data) {         
                var html = `<h4 id="ciudad" class="fw-bold text-capitalize">${data.name}: ${data.weather[0].description}</h4>
                            <h4 id="temperatura">Temperatura: ${data.main.temp}°C</h4>
                            <h4 id="coordenadas">Coordenadas: ${data.coord.lon},${data.coord.lat}</h4>`;
                $('.card-body').removeClass('alert alert-danger').html(html);
            },'json').fail(function(){
                $('.card-body').addClass('alert alert-danger').html("No se encuentra la ciudad buscada");
            });
            // recordar retornar false para que no se refresque automatico
            return false;
        }
        else
        {
            alert("Ingresa Ciudad a Consultar...");
        }
    });

});