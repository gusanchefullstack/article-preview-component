const shareButton  = document.querySelector(".social__share");
const shareBox = document.querySelector(".social-box");
const shareImg = document.querySelector(".share__image");

shareButton.addEventListener("click", () => {
  if(shareBox.classList.contains("hidden")){
    shareBox.classList.remove("hidden");
    shareButton.style.backgroundColor  = "hsl(214, 17%, 51%)";
    shareImg.setAttribute("src","images/icon-share-light.svg");
  }
  else {
    shareBox.classList.add("hidden");
    shareButton.style.backgroundColor  = "#ecf2f8";
    shareImg.setAttribute("src","images/icon-share.svg");
  }
});
