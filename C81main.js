canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Grey";
ctx.lineWidth = 2;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(350,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 5;
ctx.arc(450,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300,250,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(400,250,40,0,2* Math.PI);
ctx.stroke();