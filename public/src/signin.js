var sign_up_1 = document.getElementById("signIn_form");
var sign_up_2 = document.getElementById("signUp");
var sign_up_3 = document.getElementById("changeLeft");
var sign_up_4 = document.getElementById("signUp_form");
var sign_up_5 = document.getElementById("userForm");
var previous1 = document.getElementById("part1");
var nextStep1 = document.getElementById("chevron-left");
var nextStep2 = document.getElementById("part2");
var nextStep3 = document.getElementById("img2");
var nextStep4 = document.getElementById("userImg");
var nextStep5 = document.getElementById("ok");
var finish1 = document.getElementById("finish");
var getForm = document.getElementById("userForm");
var success = document.getElementById("a");
var success2 = document.getElementById("success");
var choose1 = document.getElementById("choose");
var filter1 = document.getElementById("card");
var filter2 = document.getElementById("filterPart");
var filter3 = document.getElementById("filterForm");
// var changePhoto = document.getElementById("photo");
// var stop = setInterval(imgRotate, 500);

function signUp() {
    sign_up_1.style.zIndex = "-1";
    sign_up_2.style.zIndex = "-1";
    sign_up_3.style.zIndex = "2";
    sign_up_4.style.zIndex = "2";
}

function signIn() {
    sign_up_1.style.zIndex = "2";
    sign_up_2.style.zIndex = "2";
    sign_up_3.style.zIndex = "-1";
    sign_up_4.style.zIndex = "-1";
}

function nextStep() {
    previous1.style.display = "none";
    nextStep1.style.visibility = "visible";
    nextStep2.style.display = "block";
    nextStep3.src = "./img/two (1).png";
    nextStep4.style.display = "none";
    nextStep5.style.display = "none";
    finish1.style.display = "block";
}

function previous() {
    previous1.style.display = "block";
    nextStep2.style.display = "none";
    nextStep3.src = "./img/two.png";
    nextStep4.style.display = "flex";
    nextStep1.style.visibility = "hidden";
    nextStep5.style.display = "block";
    finish1.style.display = "none";
}

function finish() {
    // $("#userForm").on("submit", function(e) {

    //     var dataString = $(this).serialize();
    //     console.log('ok');
    //     // alert(dataString); return false;

    //     $.ajax({
    //         type: "POST",
    //         url: "bin/process.php",
    //         data: dataString,
    //         success: function() {
    //
    //         }
    //     });

    //     e.preventDefault();
    // });
    window.location.href = "#success";
    success2.style.display = "flex";
    setTimeout(() => {
        getForm.submit();
    }, 1000);
    success.style.display = "none";
}

function like() {
    choose1.style.transform = "rotate(45deg)";
    choose1.style.transition = "0.3s";
    // changePhoto.src = "./img/photo2.PNG";
    setTimeout(imgRotate, 200);
    // let stop = setInterval(imgRotate, 500);
}

function dislike() {
    choose1.style.transform = "rotate(-45deg)";
    choose1.style.transition = "0.3s";
    // changePhoto.src = "./img/photo3.PNG";
    setTimeout(imgRotate, 200);
}

function imgRotate() {
    choose1.style.transform = "rotate(0deg)";
    choose1.style.transition = "0.1s";
    console.log("ok");
}

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1;

document.addEventListener("DOMContentLoaded", function () {
    let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
    rangeInput[0].value = minPrice;
    rangeInput[1].value = maxPrice;
    range.style.left =
        ((minPrice - rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) *
        100 +
        "%";
    range.style.right =
        100 -
        ((maxPrice - rangeInput[1].min) / (rangeInput[1].max - rangeInput[1].min)) *
        100 +
        "%";
});

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
        if (minPrice >= rangeInput[0].min && maxPrice <= rangeInput[1].max) {
            if (maxPrice - minPrice > priceGap) {
                rangeInput[0].value = minPrice;
                rangeInput[1].value = maxPrice;
                range.style.left =
                    ((minPrice - rangeInput[0].min) /
                        (rangeInput[0].max - rangeInput[0].min)) *
                    100 +
                    "%";
                range.style.right =
                    100 -
                    ((maxPrice - rangeInput[1].min) /
                        (rangeInput[1].max - rangeInput[1].min)) *
                    100 +
                    "%";
            } else {
                rangeInput[0].value = rangeInput[0].min;
                range.style.left = "0%";
                rangeInput[1].value = rangeInput[1].max;
                range.style.right = "0%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left =
                ((minVal - rangeInput[0].min) /
                    (rangeInput[0].max - rangeInput[0].min)) *
                100 +
                "%";
            range.style.right =
                100 -
                ((maxVal - rangeInput[1].min) /
                    (rangeInput[1].max - rangeInput[1].min)) *
                100 +
                "%";
        }
    });
});

function filter() {
    filter1.style.display = "none";
    filter2.style.display = "block";
}

function xmark() {
    filter1.style.display = "block";
    filter2.style.display = "none";
}

function check() {
    filter1.style.display = "block";
    filter2.style.display = "none";
    // changePhoto.src = "./img/photo2.PNG";
    filter3.submit();
    // changePhoto.src = "./img/photo2.PNG";
}