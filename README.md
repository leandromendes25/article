# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   -   [Screenshot](#screenshot)
    -   [Links](#links)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Author](#author)
    -   [Acknowledgments](#acknowledgments)

### Screenshot

![](./screenshot.PNG)

### Links

-   Solution URL: [article-solution](https://www.frontendmentor.io/solutions/article-component-solution-gRLMlm_ru)
-   Live Site URL: [article-site](https://article-frontend-master.netlify.app/)

### Built with

-   HTML5
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow

### What I learned

Learned a little more about javascript and how I can use it

```js
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
};
```

## Author

-   Frontend Mentor - [@leandromendes25](https://www.frontendmentor.io/profile/leandromendes25)
-   Linkedin - [@leandro mendes](https://www.linkedin.com/in/leandro-mendes1568/)
