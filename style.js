function openmenu(){
    var c=document.getElementById("theicon");
	var d=document.getElementById('hiddenmenu');
	var e=document.getElementById("thedark");
     
	   
		if (d.style.display=='none') {
			d.style.display='inline-block';
			d.style.opacity='1';
			d.style.height='auto';
			c.getAttribute('src');
			c.src=("close.png");
			c.style.width("15px");
			c.style.lineHeight("15px");
		}
		else{
			d.style.display='none';
			c.getAttribute('src');
			c.src=("menu.png");
			
		}
   		   
}
$('.levels li').on("click", function(e) {
    $(this).addClass('active').siblings().removeClass('active');    
});
$('textarea').autoResize();
 
