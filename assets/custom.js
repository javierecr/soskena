function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != 'loading') callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState == 'complete') callback();
    });
}

ready(function () {});

$(document).ready(function () {
  $(window).load(function () {
    $duration = 15;
    $('.seconds').text($duration);
    $('.popup-wrap').fadeIn(1500);

    $myTimer = setInterval(function () {
      startTimer();
    }, 1000);
    $('.popup .btn-close').on('click', function () {
      clearInterval($myTimer);
      $('.popup-wrap').fadeOut(500);
    });

    function startTimer() {
      $duration--;
      $('.seconds').text($duration);
      if ($duration == 0) {
        clearInterval($myTimer);
        $('.popup-wrap').fadeOut(500);
      }
    }
  });
});
