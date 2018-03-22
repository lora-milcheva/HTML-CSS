// $(document).ready(function () {
// 	let movImg = {};
// 	movImg.onMouseMove = function (e) {
// 		let perX = (e.clientX / $(window).width() + 1);
// 		let perY = (e.clientY / $(window).height() + 1);
// 		if (perX > 1.5) {
// 			perX = -perX;
// 		}
// 		if (perY > 1.2) {
// 			perY = -(perY);
// 		}
// 		console.log(perX);
// 		console.log(perY);
// 		$('.move-img').css("transform", "rotateX(" + perX.toFixed(2) * 6 + "deg) rotateY(" + perY.toFixed(2) * 6 + "deg)")
// 			.css('transition', '1s');
// 	};
// 	movImg.init = function () {
// 		$('.move-img').mousemove(movImg.onMouseMove);
// 	};
// 	movImg.init();
// });



$(document).ready(function () {
	let movImg = {};
	movImg.onMouseMove = function (e) {
		let perX = (e.clientX / $(window).width() + 1);
		let perY = (e.clientY / $(window).height() + 1);
		if (perX > 1.5) {
			perX = -perX;
		}
		if (perY > 1.2) {
			perY = -(perY);
		}
		console.log(perX);
		console.log(perY);
		TweenMax.to('.move-img', 5, {rotationY: 10 * perX, rotationX: 10 * perY});
	};
	movImg.init = function () {
		$('.move-img').mousemove(movImg.onMouseMove);
	};
	movImg.init();
});