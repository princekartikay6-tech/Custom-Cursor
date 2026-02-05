// Basic Level Of Custom Cursor Animation.

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imagediv = document.querySelector("#image");

// mouse move
main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.6,
  });
});

// mouse enter
imagediv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View<br>More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff8a",
  });
});

// mouse leave
imagediv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
