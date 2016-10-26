function Start() {

    var canvas = document.getElementById('drawingCanvas');
    var context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", MD, false);
    canvas.addEventListener("mouseup", MU, false);
    canvas.addEventListener("mousemove", MM, false);

    var draw = false;

    var color = "rgb(255, 0, 0)";
    var brushSize = 30;

    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = color;
    context.lineWidth = brushSize;


    function MD(e) {
        context.beginPath();
        context.moveTo(e.pageX, e.pageY);
        draw = true;
        console.log("click");

    }

    function MM(e) {
        if (draw) {
            context.lineTo(e.pageX, e.pageY);
            console.log(draw);
        }
    }

    function MU(e) {
        console.log("stop");
        draw = false;
    }

}
