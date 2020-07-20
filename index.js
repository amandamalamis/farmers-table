$(document).ready(function () {
  $('.container-fluid').on('click', function () {
    console.log('click')
  });

  $('.input-group-append button').on('click', function () {
    if ($('.search-container').find('input')) {
      var zipCodes = $('.search-container').find('input').val();
      if ((zipCodes > 40000) && (zipCodes < 50000))
        console.log('show deliver modal')

    }
    else (console.log('do not deliver'))

  });
});