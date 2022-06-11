$(function () {

  $('input').keypress((e) => {
    if (e.which !=0 && (e.which < 48 || e.which > 100)) {
      $("#errmsg").html("Number Only").stop().show().fadeOut("slow");
      return false;
    }
  })

  $('button').on('click', (e) => {
    e.preventDefault();

    let width = $('.width').first().val();
    let height = $('.height').first().val();
    let number = $('.number').first().val();

    let res = Math.ceil((width * height * number) / (8 * 1024))

    // console.log(res);

    $('.result').animate({
      opacity: 1
    })

    $('#size').text(res + 'KB');
  })
})
