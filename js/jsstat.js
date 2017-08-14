window.renderStatistics = function(ctx, names, times) {
  var initialX = 100;
  var initialY = 10;
  var polygonWidth = 420;
  var polygonHeight = 270;

  ctx.fillStyle = "white";
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillRect(initialX, initialY, polygonWidth, polygonHeight);

  var textIndentX = 60;
  var textIndentY = 20;
  var additionalTextIndentY = 20;
  var textColor = "black";

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.textBaseline = "top";
  ctx.font = "16px PT Mono";
  ctx.fillStyle = textColor;
  ctx.fillText("Ура вы победили!", initialX + textIndentX, textIndentY);
  ctx.fillText("Список результатов:", initialX + textIndentX, textIndentY + additionalTextIndentY);

  var maxTime = -1;

  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  var indentForNameY = 20;
  var indentForBarY = 30;
  var valueIndentY = 20;
  var barWidth = 40;
  var initialIndentForBar = 50;
  var additionalIndentForBar = 50 + barWidth;


  for(var i = 0; i < times.length; i++) {
    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "hsl(200, 99%, " + Math.random() * 100 + "%)";
    }
    
    ctx.fillRect(initialX + initialIndentForBar + additionalIndentForBar * i, polygonHeight - indentForBarY, barWidth, - (step * times[i]));
    ctx.fillStyle = textColor;
    ctx.fillText("" + Math.floor(times[i]), initialX + initialIndentForBar + additionalIndentForBar * i, polygonHeight - indentForBarY - valueIndentY - (step * times[i]));
    ctx.fillText(names[i], initialX + initialIndentForBar + additionalIndentForBar * i, polygonHeight - indentForNameY);
  }
};
