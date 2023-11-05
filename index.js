window.onload = function () {
  window.setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("cloc");
    clock.innerHTML = Date() || now.toLocaleTimeString();
  }, 1000);
};
