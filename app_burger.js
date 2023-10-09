let nav = document.getElementById("nav")


adaptiveMenu()

window.addEventListener("resize", function(){
    adaptiveMenu();
});

function adaptiveMenu (){
    if(window.innerWidth <=767){
        nav.classList.add("hidden")
    }
    else{
        nav.classList.remove("hidden")
    }
}

let btnMenuOpen = document.querySelector(".burger-menu")
// console.log(btnMenuOpen);

btnMenuOpen.addEventListener("click", function(e){
    e.preventDefault()
    btnMenuOpen.classList.add("hidden")
    btnMenuClose.classList.remove("hidden")
    nav.classList.remove("hidden") 
    
    let allNav = document.querySelectorAll(".nav-block")
    console.log(allNav);
    allNav.forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault()
                btnMenuClose.classList.add("hidden")
    btnMenuOpen.classList.remove("hidden")
    nav.classList.add("hidden")
            
        })
        
    });
    
    

    // allNav.document.querySelector(".nav-block").addEventListener("click", function(e){
    //     preventDefault();
    //     btnMenuClose.classList.add("hidden")
    // btnMenuOpen.classList.remove("hidden")
    // nav.classList.add("hidden")

    // })
    
})

let btnMenuClose = document.querySelector(".burger-menu_x")
console.log();

btnMenuClose.addEventListener("click", function(e){
    e.preventDefault()
    btnMenuClose.classList.add("hidden")
    btnMenuOpen.classList.remove("hidden")
    nav.classList.add("hidden")

})