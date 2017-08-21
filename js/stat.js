'use strict';

var drawContainer = function(context, containerCol, x, y, width, height, shadowCol, shadowX, shadowY) {
  context.fillStyle = containerCol;
  context.shadowColor = shadowCol;
  context.shadowOffsetX = shadowX;
  context.shadowOffsetY = shadowY;
  context.fillRect(x, y, width, height);
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
}

var drawText = function() {
  ctx.textBaseline = 'top';
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';

}

var drawText = function(context, baseline, font, fontColor, text, textX, textY) {
  context.textBaseline = baseline;
  context.font = font;
  context.fillStyle = fontColor;
  context.fillText(text, textX, textY);
}

var findMaxValueInArr = function(arr) {
  var maxVal = -1;

  for(var i = 0; i < arr.length; i++) {
    var currentVal = arr[i];
    if (currentVal > maxVal) {
      maxVal = currentVal;
    }
  }

  return maxVal;
}

var paintBar = function(context, val1, val2, color, color2) {
  if (val1 === val2) {
    context.fillStyle = color;
  } else {
    context.fillStyle = color2;
  }
};

var drawBarAndSignature = function(context, x, y, width, indent, text, textColor, textIndent, sign, signIndent) {
  context.fillRect(x, y, width, indent);
  context.fillStyle = textColor;
  context.fillText(text, x, textIndent);
  context.fillText(sign, x, signIndent);
};

window.renderStatistics = function(ctx, names, times) {
  var polygonColor = 'hsla(360,100%,100%,1.00)';
  var polygonShadowColor = 'hsla(0, 0%, 0%, 1)';
  var initialX = 100;
  var initialY = 10;
  var polygonWidth = 420;
  var polygonHeight = 270;
  var polygonShadowX = 10;
  var polygonShadowY = 10;
  var text1 = 'Ура вы победили!';
  var text2 = 'Список результатов:';
  var textBaseline = 'top';
  var font = '16px PT Mono';
  var textIndentX = 60;
  var textIndentY = 20;
  var additionalTextIndentY = 20;
  var textColor = 'black';
  var maxTime = findMaxValueInArr(times);
  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  var indentForNameY = 20;
  var indentForBarY = 30;
  var valueIndentY = 20;
  var barWidth = 40;
  var initialIndentForBar = 50;
  var additionalIndentForBar = 50 + barWidth;
  var currentPlayer = 'Вы';
  var currentPlayerColor = 'hsla(0, 100%, 50%, 1)'; // rgba(255, 0, 0, 1)

  drawContainer(ctx, polygonColor, initialX, initialY, polygonWidth, polygonHeight, polygonShadowColor, polygonShadowX, polygonShadowY);
  drawText(ctx, textBaseline, font, textColor, text1, initialX + textIndentX, textIndentY);
  drawText(ctx, textBaseline, font, textColor, text2, initialX + textIndentX, textIndentY + additionalTextIndentY);

  for(var i = 0; i < times.length; i++) {

    var bar = {
      'colorForOthersPlayers': 'hsla(200, 99%, ' + Math.random() * 100 + '%, 1)',
      'x': initialX + initialIndentForBar + additionalIndentForBar * i,
      'y': polygonHeight - indentForBarY,
      'width': barWidth,
      'indent': - (step * times[i]),
      'text': '' + Math.floor(times[i]),
      'textIndent': polygonHeight - indentForBarY - valueIndentY - (step * times[i]),
      'sign': names[i],
      'signIndent': polygonHeight - indentForNameY
    }

    paintBar(ctx, names[i], currentPlayer, currentPlayerColor, bar.colorForOthersPlayers);
    drawBarAndSignature(ctx, bar.x, bar.y, bar.width, bar.indent, bar.text, textColor, bar.textIndent, bar.sign, bar.signIndent);
  }
};






