document.addEventListener('DOMContentLoaded', btnFunction);

function btnFunction() {
    const consultBtn = document.querySelector('.consult-btn');
    const startBtn = document.querySelector('.start-btn');
    const optimumBtn = document.querySelector('.optimum-btn');
    const maximumBtn = document.querySelector('.maximum-btn');
    const threeMonthsBtn = document.getElementById('three-months-btn');
    const discountSignBtn = document.getElementById('discount-sign-btn');
    const freeAccreditationBtn = document.getElementById('free-acc-btn');
    let subject = document.getElementById('subject');

    consultBtn.addEventListener('click', changeSubject);
    startBtn.addEventListener('click', changeSubject);
    optimumBtn.addEventListener('click', changeSubject);
    maximumBtn.addEventListener('click', changeSubject);
    threeMonthsBtn.addEventListener('click', changeSubject);
    discountSignBtn.addEventListener('click', changeSubject);
    freeAccreditationBtn.addEventListener('click', changeSubject);

    function changeSubject () {
        subject.value = this.dataset.subj;
    }
}


