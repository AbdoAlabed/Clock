	function myClock(){
	var canras = document.getElementById('clc');
	var ctx = canras.getContext("2d")
	ctx.beginPath();
	ctx.arc(200, 200, 195, 0, 2 * Math.PI);
	ctx.strokeStyle = "#FFffff";
	ctx.stroke();
}
myClock();