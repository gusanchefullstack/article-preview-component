const shareButton  = document.querySelector(".social__share");
const shareBox = document.querySelector(".social-box");

shareButton.addEventListener("click", () => {
  if(shareBox.classList.contains("hidden")){
    shareBox.classList.remove("hidden");
  }
  else {
    shareBox.classList.add("hidden");
  }
})