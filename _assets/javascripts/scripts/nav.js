
/* TOGGLE NAVIGATION =================================================================*/
$(document).ready(function(){
	var navLabel = $('.nav-label');
	var primaryNav = $('.primary-nav');
	navLabel.on('click',function(){
		primaryNav.toggleClass('enabled');
	});
});




   
   
   
