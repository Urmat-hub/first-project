const swiper = new Swiper('.swiper-cantainer', {
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	 },
})




$(document).ready(function() {
   $('.block-title').click(function(event){
		if($('.akardions').hasClass('one')){
			$('.block-title').not($(this)).removeClass('active');
			$('.text-block').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});