"use strict"

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

const createSquareBtn = document.getElementById("createSquareBtn");
const createCircleBtn = document.getElementById("createCircleBtn");
const createTriangleBtn = document.getElementById("createTriangleBtn")
const deleteAllBtn = document.getElementById("deleteAllBtn");

const figuresSpace = document.querySelector(".figuresSpace");

let figureId = 0;

createSquareBtn.addEventListener("click", () => {

    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const new_square = document.createElement("div");

        const squareSide = getRandomNum(80, 150) + "px";
        new_square.style.width = squareSide;
        new_square.style.height = squareSide;
        new_square.style.backgroundColor = "blue";
        new_square.style.opacity = "0.8";
        new_square.style.position = "absolute";
        new_square.style.marginLeft = getRandomNum(0, 1350) + "px";
        new_square.style.marginTop = getRandomNum(0, 450) + "px";
        new_square.style.display = "none";
        new_square.style.transition = "opacity" + " " + "0.3s" + " " + "easy-out";
        figureId ++;
        new_square.id = figureId;
        new_square.classList.add("square");

        figuresSpace.appendChild(new_square);

        $(".square").fadeIn(5);

        new_square.addEventListener("click", () => {
            $("#" + new_square.id).fadeOut(5);
            setTimeout( () => {
                figuresSpace.removeChild(new_square);
            }, 5)
        })

        let animationInStatus = false;
        let animationOutStatus = false;
        new_square.addEventListener("mouseenter", () => {
            animationInStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(new_square).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange + 0.005;
                const newOpacity = currentOpacity + opacityChange;
                new_square.style.opacity = newOpacity;

                if (newOpacity > 0.49) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

                if (animationOutStatus === true) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

            }, 10)


        })

        new_square.addEventListener("mouseout", () => {
            animationOutStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(new_square).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange - 0.005;
                const newOpacity = currentOpacity + opacityChange;
                new_square.style.opacity = newOpacity;
                if (newOpacity < 0.21) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

                if (animationInStatus === true) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

            }, 10)


        })
    }
})

createCircleBtn.addEventListener("click", () => {
    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const new_circle = document.createElement("div");

        const circleSide = getRandomNum(80, 150) + "px";
        new_circle.style.width = circleSide;
        new_circle.style.height = circleSide;
        new_circle.style.backgroundColor = "red";
        new_circle.style.opacity = "0.8";
        new_circle.style.position = "absolute";
        new_circle.style.borderRadius = "100%"
        new_circle.style.marginLeft = getRandomNum(0, 1350) + "px";
        new_circle.style.marginTop = getRandomNum(0, 450) + "px";
        new_circle.style.display = "none";
        figureId ++;
        new_circle.id = figureId;
        new_circle.classList.add("circle");

        figuresSpace.appendChild(new_circle);

        $(".circle").fadeIn(5);

        new_circle.addEventListener("click", () => {
            $("#" + new_circle.id).fadeOut(5);
            setTimeout( () => {
                figuresSpace.removeChild(new_circle);
            }, 5)
        })

        let animationInStatus = false;
        let animationOutStatus = false;
        new_circle.addEventListener("mouseenter", () => {
            animationInStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(new_circle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange + 0.005;
                const newOpacity = currentOpacity + opacityChange;
                new_circle.style.opacity = newOpacity;

                if (newOpacity > 0.49) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

                if (animationOutStatus === true) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

            }, 10)
        })

        new_circle.addEventListener("mouseout", () => {
            animationOutStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(new_circle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange - 0.005;
                const newOpacity = currentOpacity + opacityChange;
                new_circle.style.opacity = newOpacity;
                if (newOpacity < 0.21) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

                if (animationInStatus === true) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

            }, 10)
        })
    }
})

createTriangleBtn.addEventListener("click", () => {
    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const new_triangle = document.createElement("div");

        const triangleSide = getRandomNum(80, 150) + "px";

        new_triangle.style.width = triangleSide;
        new_triangle.style.height = triangleSide;
        new_triangle.style.backgroundColor = "lime";

        new_triangle.style.clipPath = "polygon(50% 50%, 100% 100%, 0% 100%)";
        new_triangle.style.opacity = "0.8";
        new_triangle.style.position = "absolute";
        new_triangle.style.marginLeft = getRandomNum(0, 1350) + "px";
        const marginTop = getRandomNum(-40, 450);
        new_triangle.style.marginTop = marginTop + "px";
        new_triangle.style.display = "none";
        figureId ++;
        new_triangle.id = figureId;
        new_triangle.classList.add("triangle");

        figuresSpace.appendChild(new_triangle);

        $(".triangle").fadeIn(5);

        new_triangle.addEventListener("click", () => {
            $("#" + new_triangle.id).fadeOut(5);
            setTimeout( () => {
                figuresSpace.removeChild(new_triangle);
            }, 5)
        })

        let animationInStatus = false;
        let animationOutStatus = false;
        new_triangle.addEventListener("mouseenter", () => {
            animationInStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(new_triangle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange + 0.005;
                const newOpacity = currentOpacity + opacityChange;
                new_triangle.style.opacity = newOpacity;

                if (newOpacity > 0.49) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

                if (animationOutStatus === true) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

            }, 10)
        })

        new_triangle.addEventListener("mouseout", () => {
            animationOutStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(new_triangle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange - 0.005;
                const newOpacity = currentOpacity + opacityChange;
                new_triangle.style.opacity = newOpacity;
                if (newOpacity < 0.21) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

                if (animationInStatus === true) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

            }, 10)
        })
    }
})


deleteAllBtn.addEventListener("click", () => {
    $(".square").fadeOut(400);
    $(".circle").fadeOut(400);
    $(".triangle").fadeOut(400);

    setTimeout( () => {
        const figures = Array.from(figuresSpace.children);
        figures.forEach(figure => {
            figuresSpace.removeChild(figure);
        });
    }, 5)

})
