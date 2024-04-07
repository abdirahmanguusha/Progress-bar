const cont = document.querySelector(".cont");
const circle = document.querySelectorAll(".circle");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => stepHandler("next"));
prevBtn.addEventListener("click", () => stepHandler("prev"));

let currentIndex = 1;
function stepHandler(step) {
  if (step == "next") currentIndex++;
  if (step == "prev") currentIndex--;
  
  if (currentIndex == 1) {
    prevBtn.setAttribute("disabled", true);
  } else {
    prevBtn.removeAttribute("disabled");
  }

  if (currentIndex == 4) {
    nextBtn.setAttribute("disabled", true);
  } else {
    nextBtn.removeAttribute("disabled");
  }

  console.log(currentIndex);
}
