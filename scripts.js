const midia = document.querySelector(".midia");
const btn = document
    .querySelector(".share-bg")
    .addEventListener("click", () => {
        let res = midia.classList.toggle("invisible");
        if (res == false) {
            document.querySelectorAll(".share").forEach((share) => {
                share.classList.add("press-icon-color");
            });

            document.querySelectorAll(".share-bg").forEach((shareBg) => {
                shareBg.style.backgroundColor = "hsl(214, 17%, 51%)";
            });
        }
        if (res == true) {
            document
                .querySelector(".share")
                .classList.remove("press-icon-color");
            document.querySelector(".share-bg").style.backgroundColor =
                "hsl(210, 46%, 95%)";
        }
    });
