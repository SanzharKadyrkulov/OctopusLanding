const optimaBtn = document.getElementById("opt-btn");
const oBtn = document.getElementById("o-btn");
const optimaN = document.getElementById("opt-n");
const oN = document.getElementById("o-n");

oBtn.addEventListener("click", (e) => {
  optimaBtn.className = optimaBtn.className.split(" ")[0];
  oBtn.className += " active";
  optimaN.className = optimaN.className.split(" ")[0];
  oN.className += " active-c";
});

optimaBtn.addEventListener("click", (e) => {
  oBtn.className = oBtn.className.split(" ")[0];
  optimaBtn.className += " active";
  oN.className = oN.className.split(" ")[0];
  optimaN.className += " active-c";
});
$(".scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 163,
    },
    500
  );
  return false;
});
