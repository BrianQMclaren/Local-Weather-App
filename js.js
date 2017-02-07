$(document).ready(function(){


  //API for location
  $.getJSON('http://ip-api.com/json', function(location){

    var lat = location.lat;
    var lon = location.lon;


      //Ajax Request
      var api ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=481f7bb8ec1597b2235c0814c0ffddc1";


      $.getJSON(api, function(data){

        var city = data.name.toUpperCase();

        var weather = data.weather[0].description.toUpperCase();
        var temp = data.main.temp;
        var windSpeed = data.wind.speed;
        var celsius = (temp - 273.15).toFixed(0);
        var fahrenheit = (celsius * 9 / 5 + 32).toFixed(0);
        windSpeed = (2.237 * (windSpeed)).toFixed(1);

        var icon = data.weather[0].icon;
        var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";


        $("#city").html(city);
        $("#weather").html(weather);
        $("#temp").html("<img src='"+ iconSrc +"'>"+ fahrenheit + " &#8451;");
        $("#windSpeed").html(windSpeed + " mph");




        var tempSwap = true;
         $("#temp").click(function(){
        if (tempSwap===false) {

          $("#temp").html("<img src='"+ iconSrc +"'>"+ fahrenheit + " &#8457;");
          tempSwap=true;

        } else {
           $("#temp").html("<img src='"+ iconSrc +"'>" + celsius + "  &#8451;");
          tempSwap=false;
        }
         });


       if(weather === 'SUNNY'){
         $('body').css('background-image', 'url(img/sunny.jpg)');
       } else if (weather === 'CLEAR SKY') {
      $('body').css('background-image', 'url(img/clear.jpg)');
           }
         else if (weather === 'RAIN') {
      $('body').css('background-image', 'url(img/rain.jpg)');
         }
         else if (weather === 'SNOW') {
      $('body').css('background-image', 'url(img/snow.jpg)');
         }
         else if (weather === 'CLOUDY') {
      $('body').css('background-image', 'url(img/cloudy.jpg)');
         }
         else {
      $('body').css('background-image', 'url(img/sunset.jpg)');

  }


      });



  });


});
