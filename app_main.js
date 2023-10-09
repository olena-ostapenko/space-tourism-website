let allMainNav = document.querySelectorAll(".nav-a")

let allSections = document.querySelectorAll(".page")


let navigation = document.querySelector(".section-text_nav")
let navigationNumber = document.querySelector(".section_nav-number")
let navigationName = document.querySelector(".section_nav-copy")

let phrathers = ["Pick your destination", "Meet your crew", "SPACE LAUNCH 101"]

if (allMainNav[0]) {
    navigation.classList.add("hidden")
}
else (navigation.classList.remove("hidden"))

for (let i = 0; i < allMainNav.length; i++) {
    allMainNav[i].addEventListener("click", function (e) {
        e.preventDefault();
        swetchMainTab(i);
    });
}

function swetchMainTab(i) {
    for (let u = 0; u < allMainNav.length; u++) {
        allMainNav[u].classList.remove("active");
    }

    allMainNav[i].classList.add("active");

    for (let v = 0; v < allSections.length; v++) {
        allSections[v].classList.add("hidden");
    }

    allSections[i].classList.remove("hidden");

    if (i > 0) {
        navigation.classList.remove("hidden")
        navigationNumber.innerHTML = allMainNav[i].querySelector(".nav-number").innerHTML
        navigationName.innerHTML = phrathers[i - 1]
    }
    else {
        navigation.classList.add("hidden")
    }

}


let exploreBtn = document.querySelector(".btn-explore")
exploreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    swetchMainTab(1);
});

let titlePlanet = document.querySelector(".destination-conteiner_text-title");
let textAbout = document.querySelector(".destination-conteiner_text-p");
let distance = document.querySelector(".destination_distance");
let timeTravel = document.querySelector(".destination_time");
let imagePlanet = document.querySelector(".destination-conteiner_image-block");

let desrNavParent = document.querySelector(".destination-list");
let desrNavTamplate = document.querySelector(".destination_nav-block");

let crewProffecion = document.querySelector(".crew-conteiner_text-profession");
let crewPerson = document.querySelector(".crew-conteiner_text-name");
let textCrew = document.querySelector(".crew-conteiner_text-p");
let imagePerson = document.querySelector(".crew-conteiner_image-block");

let crewNavParent = document.querySelector(".crew-conteiner_text-tab");
let crewNavTamplate = document.querySelector(".crew_list");

let techShip = document.querySelector(".technology-conteiner_text-ship");
let techText = document.querySelector(".technology-conteiner_text-p");
let techImage = document.querySelector(".technology_image-block");
let techImageLandscape = document.querySelector(".technology_image-block-landscape");
let techImagePortrait = document.querySelector(".technology_image-block-portrait");

let techParent = document.querySelector(".technology-conteiner-tab");
let techTamplate = document.querySelector(".technology_list");
// console.log(techImage);

const url = "./data.json";

fetch(url)
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        console.log(data);

        for (let i = 0; i < data.destinations.length; i++) {
            let addLi = desrNavTamplate.cloneNode(true);
            desrNavParent.append(addLi);

            addLi.querySelector(".destination_nav-title").innerHTML = data.destinations[i].name
            addLi.querySelector(".destination-a").addEventListener("click", function (e) {
                e.preventDefault();
                titlePlanet.innerHTML = data.destinations[i].name;
                textAbout.innerHTML = data.destinations[i].description;
                distance.innerHTML = data.destinations[i].distance;
                timeTravel.innerHTML = data.destinations[i].travel;
                imagePlanet.style.backgroundImage = "url('" + data.destinations[i].images.png + "')";

                // console.log(document.querySelectorAll(".destination_nav-block"))
                let desAllLi = document.querySelectorAll(".destination_nav-block")

                activeTag(desAllLi, "active", addLi)
                // for (let a = 0; a < desAllLi.length; a++) {
                //     desAllLi[a].classList.remove("active")
                // }
                // addLi.classList.add("active");
                // console.log("add", addLi);

            });

        }
        desrNavTamplate.remove();

        for (let i = 0; i < data.crew.length; i++) {
            let dotLi = crewNavTamplate.cloneNode(true);
            crewNavParent.append(dotLi);
            dotLi.querySelector(".crew-a").addEventListener("click", function (e) {
                e.preventDefault();
                crewProffecion.innerHTML = data.crew[i].role;
                crewPerson.innerHTML = data.crew[i].name;
                textCrew.innerHTML = data.crew[i].bio;
                imagePerson.style.backgroundImage = "url('" + data.crew[i].images.png + "')";

              let crewAllLi = document.querySelectorAll(".crew_list")
                activeTag(crewAllLi, "active-d", dotLi)
                console.log(crewAllLi, dotLi );

                // for (let d = 0; d <)

            })
        }
        crewNavTamplate.remove()

        
        function addElement (arrayA, liA, tamplateA, parentA){
            for (let i = 0; i < arrayA; i++){
                let liA = tamplateA.cloneNode(true);
                parentA.append(liA)
            }


        }
//  addElement(data.technology.length, dotNumberLi, techTamplate )

        for (let i = 0; i < data.technology.length; i++) {
            let dotNumberLi = techTamplate.cloneNode(true);
            techParent.append(dotNumberLi);

            dotNumberLi.querySelector(".technology-a").innerHTML = i + 1;

            dotNumberLi.querySelector(".technology-a").addEventListener("click", function (e) {
                e.preventDefault()
                techShip.innerHTML = data.technology[i].name;
                techText.innerHTML = data.technology[i].description;

                techImage.src = data.technology[i].images.portrait;
                techImageLandscape.srcset = data.technology[i].images.landscape;
                techImagePortrait.srcset = data.technology[i].images.portrait;

                let techAllLi = document.querySelectorAll(".technology_list")

                activeTag(techAllLi, "active-t", dotNumberLi)

                // for (let r = 0; r  < techAllLi.length; r++){
                //     techAllLi[r].classList.remove("active-t")
                //     console.log(techAllLi[r]);
                // }
                // dotNumberLi.classList.add("active-t")

            });
        }

        techImage.src = data.technology[0].images.portrait;
        techTamplate.remove()
    });

function activeTag(allLi, className, elLi) {
    for (let n = 0; n < allLi.length; n++) {
        allLi[n].classList.remove(className)
    }
    elLi.classList.add(className)

}