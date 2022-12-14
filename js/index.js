$(document).ready(function () {

  $('.home').hover(function (event) {
    event.preventDefault();
    $('.home-text').addClass("animate__lightSpeedInLeft");
  });
      // basic
      $('.r1').click(function (event) {
        event.preventDefault();
        $('.r1').addClass("change");
        $('.r1').siblings().removeClass("change");
        $('.my-intro-text').css("font-size","24px");
      });
      $('.r2').click(function (event) {
        event.preventDefault();
        $('.r2').addClass("change");
        $('.r2').siblings().removeClass("change");
        $('.my-intro-text').css("font-size","20px");
      });
      $('.r3').click(function (event) {
        event.preventDefault();
        $('.r3').addClass("change");
        $('.r3').siblings().removeClass("change");
        $('.my-intro-text').css("font-size","16px");
      });
});
