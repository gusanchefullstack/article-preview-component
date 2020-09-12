const shareButton  = document.querySelector(".social__share");
const shareBox = document.querySelector(".social-box");

shareButton.addEventListener("click", () => {
  if(shareBox.classList.contains("hidden")){
    shareBox.classList.remove("hidden");
    shareButton.style.backgroundColor  = "hsl(214, 17%, 51%)";
  }
  else {
    shareBox.classList.add("hidden");
    shareButton.style.backgroundColor  = "#ecf2f8";
  }
});
