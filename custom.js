$(document).ready(function(){
	$(".dwr-accordion-title").click(function(e){
		var accitem = $(this).attr("data-tab");
		$("#" + accitem)
		.slideToggle()
		.parent()
		.siblings()
		.find(".dwr-accordion-content")
		.slideUp();

		$(this).toggleClass(".active-section");
		$("#" + accitem)
		.parent()
		.siblings()
		.find(".dwr-accordion-title")
		.removeClass("active-section");

		$("i.fa-chevron-down", this).toggleClass("chevron-top");
		$("#" + accitem)
		.parent()
		.siblings()
		.find(".dwr-accordion-title i.fa-chevron-down")
		.removeClass("chevron-top");
	})
})