const startBtn = document.querySelector(".js-start-button");
const popupInfo = document.querySelector(".pop-up-message");
const main = document.querySelector('.main');
const brainTeaserBtn = document.querySelector('.js-brain-teaser-btn');
const brainTeaser = document.querySelector('.brain-teaser');
const machineProblem = document.querySelector('.machine-problem');
const machineProblemBtn = document.querySelector('.js-machine-problem-btn');
const navBarBrainTeaser = document.querySelector('.brain-teaser-navbar')
const homeNavBar = document.querySelector('.home-navbar');
const machineProblemNavBar = document.querySelector('.machine-problem-navbar');
const closePopMessage = document.querySelector('.js-close');
const quizBoxAnimate = document.querySelector('.quiz-box');
const quizBoxMachineProblemAnimate = document.querySelector('.quiz-box-machine-problem');
const infoMessage = document.querySelector('.info-message');
const infoIcon = document.querySelector('.info-icon');
const closeInfoMessage = document.querySelector('.js-close-info-message');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

closePopMessage.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

infoIcon.onclick = () => {
    infoMessage.classList.add('active');
    main.classList.add('active');
}

closeInfoMessage.onclick = () => {
    infoMessage.classList.remove('active');
    main.classList.remove('active');
}


machineProblemNavBar.onclick = activeElementsMachineProblem;
machineProblemBtn.onclick = activeElementsMachineProblem;

function activeElementsMachineProblem () {
    machineProblem.classList.add('active');
    machineProblemNavBar.classList.add('active');

    main.classList.remove('active');
    popupInfo.classList.remove('active');
    homeNavBar.classList.remove('active');
    navBarBrainTeaser.classList.remove('active');
    brainTeaser.classList.remove('active');
    quizBoxMachineProblemAnimate.classList.add('active');
    quizBoxAnimate.classList.remove('active');
    sectionConsequences.classList.remove('active');
    navbarConsequences.classList.remove('active');
    consequencesBox.classList.remove('active');

    showMachineProblem(machineProblemCount);

}

homeNavBar.onclick = () => {
    homeNavBar.classList.add('active');
    navBarBrainTeaser.classList.remove('active');
    brainTeaser.classList.remove('active');
    machineProblem.classList.remove('active');
    machineProblemNavBar.classList.remove('active');
    quizBoxMachineProblemAnimate.classList.remove('active');
    quizBoxAnimate.classList.remove('active');
    sectionConsequences.classList.remove('active');
    navbarConsequences.classList.remove('active');
    consequencesBox.classList.remove('active');
}

navBarBrainTeaser.onclick = activeElements;
brainTeaserBtn.onclick = activeElements;

function activeElements() {
    brainTeaser.classList.add('active');
    navBarBrainTeaser.classList.add('active');
    homeNavBar.classList.remove('active');
    popupInfo.classList.remove('active');
    machineProblem.classList.remove('active');
    machineProblemNavBar.classList.remove('active');
    main.classList.remove('active');
    quizBoxAnimate.classList.add('active');
    quizBoxMachineProblemAnimate.classList.remove('active');
    sectionConsequences.classList.remove('active');
    navbarConsequences.classList.remove('active');
    consequencesBox.classList.remove('active');

    showBrainTeaser(brainTeaserCount);
}

