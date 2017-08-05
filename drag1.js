// JavaScript Document

function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		disX=ev.pangeX-obj.offsetLeft;
		disY=ev.pangeY-obj.offsetLeft;
	}
}