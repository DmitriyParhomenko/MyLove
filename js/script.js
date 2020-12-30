let chest = document.querySelector('.chest');
let textCode = document.querySelector('.text-code');

let stepOne = document.querySelector('.step-one');
let video = document.querySelector('.video');
let secretCcode = document.querySelector('.secret-code');

chest.onclick = function() {
    video.classList.add('show');
    stepOne.classList.add('hide');
}

textCode.onclick = function() {
    secretCcode.classList.add('show');
    video.classList.add('hide');
}