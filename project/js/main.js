
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}


 $(document).ready(function(){
   getWeather();
 })

 function getWeather(){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID="+apiKey;
 
  $.ajax(url, {sucess:function(data){
    console.log(data);
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }})
 }
   

