/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("ik wil dit van nu wel halen!");


//Deze code is afkomstig van w3Schools, alleen kan ik helaas de bron niet meer vinden van deze code :s
const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.innerHTML = 'Je bent er bijna, maar dit is de verkeerde plek.';
}

function logMouseOut() {
  p.innerHTML = 'Hover over de titel of klik op toets 5 om de achtergrond aan te passen';
    color: white;
}





//Voor deze code heb ik hulp gekregen van S. Niewenhuizen.


//Er wordt een eventelistner toegevoegd aan het toetsenbord code en consol-logt als op de toest gedrukt is.
document.addEventListener('keypress', function(e) {
    console.log("key clicked: " + e.keyCode);
    switch (e.keyCode) {


            //toetscode nummer 1.
        case 53: background_change(); break;

    }
});



//Bij het klikken van de toetscode 5 veranderd de achtergrond van blauw naar rebeccapurple en weer terug.
function background_change() {
    if (document.body.style.backgroundColor == "rebeccapurple") {
        document.body.style.backgroundColor = "#05346F";
    } else {
        document.body.style.backgroundColor = "rebeccapurple";
    }

}

