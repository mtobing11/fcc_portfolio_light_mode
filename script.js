const sections = document.querySelectorAll('.container');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const mainBtns = document.querySelectorAll('.btn-con');
const secContact = document.querySelector('#contact');

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

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        // console.log('toggle activated');
        const elementTheme = document.body;
        elementTheme.classList.toggle('light-mode');
    })

    // when click main-btn go to contact
    for (let i=0; i < mainBtns.length; i++){
        mainBtns[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace(' active-btn', '');
            secBtn[4].className += ' active-btn';

            secBtns.forEach(btn=>btn.classList.remove('active'));
            secContact.classList.add('active');
            sections.forEach(section=>section.classList.remove('active'));
        })
    }
    
}

pageTransition();

// from formspree.io to prevent go to their page after send email
// var form = document.getElementById("my-form");
    
//     async function handleSubmit(event) {
//       event.preventDefault();
//       var status = document.getElementById("status");
//       var data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         if (response.ok) {
//           status.innerHTML = "Thanks for your submission!";
//           status.classList.add('success');
//           form.reset()
//         } else {
//           response.json().then(data => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//             } else {
//               status.innerHTML = "Oops! There was a problem submitting your form"
//               status.classList.add('error');
//             }
//           })
//         }
//       }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     form.addEventListener("submit", handleSubmit)