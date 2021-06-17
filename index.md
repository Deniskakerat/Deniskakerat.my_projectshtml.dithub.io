<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>Найди клад!</title>
</head>
<body>
 <h1 id="heading">Найди клад!</h1>
 <h2 id="player">&#128021;&#8205;&#129466;</h2>
<img id="map" width=800 height=800 
src="https://gvard.github.io/dev/game/treasuremap.png">
<p id="distance"></p>
 <script src="https://code.jquery.com/jquery-2.1.0.js"></script>
 <script>
 alert("Это карта клада, где-то на карте спрятан клад, помоги собачке и выбери место где бы он мог бы бть, ищи его по подсказке снизу, тыкая по карте");
var getRandomNumber = function (size) {
 return Math.floor(Math.random() * size);
};
var clicks = 0;	
var width = 800;
var height = 800;
var target = {
 x: getRandomNumber(width),
 y: getRandomNumber(height)
};
 
$("#map").click(function (event) {
$("#player").offset({
 left: event.pageX,
 top: event.pageY
 });
 var getDistance = function (event, target) {
 var diffX = event.offsetX - target.x;
 var diffY = event.offsetY - target.y;
 return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
var getDistanceHint = function (distance) {
 if (distance < 20) {
 return "Обожжешься!";
 } else if (distance < 40) {
 return "Очень горячо";
 } else if (distance < 80) {
 return "Горячо";
 } else if (distance < 160) {
 return "Тепло";
 } else if (distance < 320) {
 return "Холодно";
 } else if (distance < 640) {
 return "Очень холодно";
 } else {
 return "Замерзнешь!";
 }
};
var distance = getDistance(event, target);
var distanceHint = getDistanceHint(distance);
$("#distance").text(distanceHint);
$("#distance").text(distanceHint);
$("#distance").text(distanceHint);
clicks++;
if (distance < 20) {
 alert("Клад найден! Сделано кликов: " + clicks);
}
});

 </script>
</body>
</html>
