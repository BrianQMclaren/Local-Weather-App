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
        
           
       if(fahrenheit <= 99 && fahrenheit >= 50){
         $('body').css('background-image', 'url(https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=e32385abbc5443a267ec7ae418295bbe)');
       } else if (fahrenheit <= 49 && fahrenheit >= 40) {
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1445264618000-f1e069c5920f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=134538e6eb056c392a2625d747c4ce86)');        
           }
         else if (fahrenheit <= 39 && fahrenheit >= 30) {
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=a7445179482bf290ee76b166b4212e06)'); 
         }
         else {
      $('body').css('background-image', 'url(https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=a7445179482bf290ee76b166b4212e06)'); 
         
  }
 
     
      });                
    
    
   
  });
  
  
});
