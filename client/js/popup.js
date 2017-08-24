$('.signIn').on('click', function (e) {
  e.preventDefault()
  console.log('well hello there')
  $('.signInPopUpContainer').removeClass('hide')
})

$('.signInPopUpContainer').on('mouseleave', function (e) {
  e.preventDefault()
  console.log('the art of lossing focus')
  $(this).addClass('hide')
})
