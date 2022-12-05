
let number = ""

function setActive() {

    const ratings = document.querySelectorAll(".rating-num");
    const ratingText = document.querySelector(".rating-selected");

    for (let i = 0; i < ratings.length; i++) {

        ratings[i].addEventListener("click", function (e) {

            for (let j = 0; j < ratings.length; j++) {
                ratings[j].dataset.set = "inactive";
            }
            if (this.dataset.set == "active") {
                this.dataset.set = "inactive";
            } else {
                this.dataset.set = "active";
            }

            ratingText.innerHTML = `You selected ${ratings[i].innerHTML} out of 5`

        })

    }
}




const submit = document.querySelector(".submit");
const content = document.querySelector(".content-rating");
const endRating = document.querySelector(".content-end");




submit.addEventListener('click', function () {
    content.style.display = "none";
    endRating.style.display = "flex"

})


setActive()

