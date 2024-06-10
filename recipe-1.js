$(document).ready(function () {
  $(".has-animation").each(function () {
    var $this = $(this);
    var delay = $this.data("delay");
    setTimeout(function () {
      $this.addClass("animate-in");
    }, delay);
  });
});
