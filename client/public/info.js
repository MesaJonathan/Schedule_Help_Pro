$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });