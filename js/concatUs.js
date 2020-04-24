$(document).ready(function() {
  $('.more-btn').click(function() {
    alert('开发中...')
  })
  $("#info-tab li").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $('.info-express .mainCont').eq($(this).index()).siblings().removeClass('selected')
    $('.info-express .mainCont').eq($(this).index()).addClass('selected');
  })
})