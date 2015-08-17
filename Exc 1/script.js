var flag;
var lastX;
var lastY;
function initiate()
{
    flag = false;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var range = document.getElementById('range');
    context.beginPath();
    context.strokeRect(100,100,400,400);
    context.strokeStyle = document.getElementById('color').value;
    context.fill();
    canvas.addEventListener("mousedown", getPosition, false);
    canvas.addEventListener("mousemove", drawFromPos, false); 
    canvas.addEventListener("mouseup", CancelFlag,false);
    //canvas.addEventListener("mouseout", CancelFlag,false);
    range.addEventListener("input", ChangeLabel,false);
    range.addEventListener("change", ChangeLabel,false);
}
function ChangeLabel()
{
    var label = document.getElementById('range-val');
    label.textContent = document.getElementById('range').value;
}
function getPosition(event)
  {
      flag = true;
    var x = new Number();
    var y = new Number();
    
    var canvas = document.getElementById("canvas");

    if (event.x != undefined && event.y != undefined)
    {
      x = event.x;
      y = event.y;
    }
    else // Firefox method to get the position
    {
      x = event.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
    }
    
    lastX =x -8;
    lastY = y -37;  
    var context = canvas.getContext('2d');
    var width = document.getElementById('range').value;
    context.beginPath();
    context.fillStyle = document.getElementById('color').value;
    context.fillRect(lastX,lastY,Math.sqrt(width),Math.sqrt(width));                         
  }
function drawFromPos(event)
{
    if (flag)
    {
        var x = new Number();
        var y = new Number();

        var canvas = document.getElementById("canvas");

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }

        var context = canvas.getContext('2d');        
        context.beginPath();
        context.strokeStyle = document.getElementById('color').value;
        context.lineWidth = document.getElementById('range').value;
        context.moveTo(lastX,lastY);
        context.lineTo(x-8,y-37);
        context.stroke();
        lastX = x -8;
        lastY = y -37;        
    }
}
function CancelFlag(event)
{
    flag = false;
}
addEventListener("load",initiate);
/*
function getMousePos(canvas,evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  ;
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas,evt);
    context.beginPath();
    context.moveTo(mousePos.x,mousePos.y);  
    context.lineWidth(document.getElementById('range').value);
    context.strokeStyle = document.getElementById('color').value;  
    context.fill();
  }, false);*/