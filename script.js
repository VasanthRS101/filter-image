const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
    filterItem.onclick = (event) => {
   if(event.target.classList.contains("item")){
       filterItem.querySelector(".active").classList.remove("active");
       event.target.classList.add("active");
       let filterName = event.target.getAttribute("data-name");
        filterImg.forEach((image)=> {
             let filterImages = image.getAttribute("data-name");
             
             if(filterImages === filterName || filterName == "all"){
                image.classList.remove("hide") 
                image.classList.add("show")
             } else {
                image.classList.add("hide")
                image.classList.remove("show")
             }
        })
   } 
    }
    for (let index = 0; index < filterImg.length; index++) {
       filterImg[index].setAttribute("onclick","preview(this)")
       
    }
}

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title"),
closeIcon = previewBox.querySelector(".icon");
shadow = document.querySelector(".shadow");

function preview(element){
   document.querySelector("body").style.overflow = "hidden";
   let selectedPrevImg = element.querySelector("img").src;
   let selectedImgCategory = element.getAttribute("data-name");
   previewImg.src = selectedPrevImg;
   categoryName.textContent = selectedImgCategory;
   shadow.classList.add("show");
   previewBox.classList.add("show");
   closeIcon.onclick = () => {
      previewBox.classList.remove("show");
      shadow.classList.remove("show")
      document.querySelector("body").style.overflow = "scroll";

   }
}