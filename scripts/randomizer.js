const sectionConsequences = document.querySelector('.consequences');
const navbarConsequences = document.querySelector('.consequences-navbar');
const consequencesBox = document.querySelector('.consequences-box');
const randomizerBTN = document.querySelector('.js-randomize-button');
const openMysteryBox = document.querySelector('.js-randomize-open');
const okayBtnMysteryBox = document.querySelector('.js-randomize-okay');
const mysteryBoxes = document.querySelector('.mystery-boxes');

const mysteryBoxItem1 = document.querySelector('.mystery-box1');
const mysteryBoxItem2 = document.querySelector('.mystery-box2');
const mysteryBoxItem3 = document.querySelector('.mystery-box3');
const mysteryBoxItem4 = document.querySelector('.mystery-box4');

const mysteryBoxTitle1 = document.querySelector('.mystery-item-title1');
const mysteryBoxTitle2 = document.querySelector('.mystery-item-title2');
const mysteryBoxTitle3 = document.querySelector('.mystery-item-title3');
const mysteryBoxTitle4 = document.querySelector('.mystery-item-title4');

navbarConsequences.onclick = () => {
    sectionConsequences.classList.add('active');
    consequencesBox.classList.add('active');
    navbarConsequences.classList.add('active');
    homeNavBar.classList.remove('active');

    machineProblem.classList.remove('active');
    machineProblemNavBar.classList.remove('active');

    brainTeaser.classList.remove('active');
    navBarBrainTeaser.classList.remove('active');

    imageRandomizer.classList.add('active');
}



let randomValueMysteryBox = 0;
let randomValue = 0;
const imageRandomizer = document.querySelector('.image-randomizer');
const titleRandomizer = document.querySelector('.title-randomizer');

randomizerBTN.onclick = () => {
    imageRandomizer.classList.add('active');
    randomValue = Math.floor(Math.random() * 100);

    if(randomValue < 60) {

        mysteryBoxes.classList.add('active')

        imageRandomizer.src = consequences[0].image;
        titleRandomizer.innerText = consequences[0].title;
        randomizerBTN.classList.add('hide');
        openMysteryBox.classList.add('active');
        openMysteryBox.onclick = () => {
            randomValueMysteryBox = Math.floor(Math.random() * 4 + 1);
            console.log(randomValueMysteryBox)

            okayBtnMysteryBox.classList.add('active');
            openMysteryBox.classList.remove('active');

            switch (randomValueMysteryBox) {
                case 1:
                    mysteryBoxItem1.src = consequences[0].mysteryBox[0].mysteryImage;
                    mysteryBoxTitle1.innerText = consequences[0].mysteryBox[0].name;
                    break;
                case 2:
                    mysteryBoxItem2.src = consequences[0].mysteryBox[1].mysteryImage;
                    mysteryBoxTitle2.innerText = consequences[0].mysteryBox[1].name;
                    break;
                case 3:
                    mysteryBoxItem3.src = consequences[0].mysteryBox[2].mysteryImage;
                    mysteryBoxTitle3.innerText = consequences[0].mysteryBox[2].name;
                    break;
                case 4:
                    mysteryBoxItem4.src = consequences[0].mysteryBox[3].mysteryImage;
                    mysteryBoxTitle4.innerText = consequences[0].mysteryBox[3].name;
                    break;
            }

            // if(randomValueMysteryBox === 0) {
            //     mysteryBoxItem1.src = consequences[0].mysteryBox[randomValueMysteryBox + 1].mysteryImage;
            // }

            // const mysteryBoxIndex = randomValueMysteryBox;
            //
            // if (consequences.length > 0 && consequences[0].mysteryBox[mysteryBoxIndex]) {
            //     imageRandomizer.src = consequences[0].mysteryBox[mysteryBoxIndex].mysteryImage;
            //     titleRandomizer.innerText = consequences[0].mysteryBox[mysteryBoxIndex].name;
            // }

            okayBtnMysteryBox.onclick = () => {
                titleRandomizer.innerText = '';
                okayBtnMysteryBox.classList.remove('active');
                randomizerBTN.classList.remove('hide');
                imageRandomizer.src = 'images/question-mark.png';
                mysteryBoxes.classList.remove('active');

                mysteryBoxItem1.src = 'images/question-mark.png';
                mysteryBoxItem2.src = 'images/question-mark.png';
                mysteryBoxItem3.src = 'images/question-mark.png';
                mysteryBoxItem4.src = 'images/question-mark.png';

                mysteryBoxTitle1.innerText = '';
                mysteryBoxTitle2.innerText = '';
                mysteryBoxTitle3.innerText = '';
                mysteryBoxTitle4.innerText = '';
            }

        }

    } else {
        console.log(randomValue)
        titleRandomizer.innerText = consequences[1].title;
        imageRandomizer.src = consequences[1].image;
        okayBtnMysteryBox.classList.add('active');
        randomizerBTN.classList.add('hide');
        okayBtnMysteryBox.onclick = () => {
            imageRandomizer.src = 'images/question-mark.png';
            okayBtnMysteryBox.classList.remove('active');
            randomizerBTN.classList.remove('hide');
            titleRandomizer.innerText = '';
        }
    }

}

