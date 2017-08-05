// JavaScript Document

function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		disX=ev.pangeX-obj.offsetLeft;
		disY=ev.pangeY-obj.offsetLeft;
		document.onmousemove=function(ev){
			obj.style.left=ev.pangeX-disX+'px';
		    obj.style.top=ev.pangeY-disY+'px';
		}
	}
}