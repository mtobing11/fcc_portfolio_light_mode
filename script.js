const sections = document.querySelectorAll('.container');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition() {
    // button click active class
    for (let i=0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
    }

    // active class section
    allSections.addEventListener('click', function(e){
        const id = e.target.dataset.id;

        if(id){
            // remove class active other pages
            secBtns.forEach(btn=>btn.classList.remove('active'));
            e.target.classList.add('active')

            // hide other section
            sections.forEach(section=>section.classList.remove('active'));

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

pageTransition();