const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "red":
        body.style.backgroundColor = e.target.id;
        break;
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "black":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});
