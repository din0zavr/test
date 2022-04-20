const recipeMenuButton = document.querySelector(".dropdownMenuButton")
const dropDownMenu = document.querySelector(".dropDownMenu")
const dropdownMenuContainer = document.querySelector(".dropdownMenuContainer")

dropdownMenuContainer.addEventListener("mouseover", showRecipeMenu)
dropdownMenuContainer.addEventListener("mouseout", closeRecipeMenu)

function showRecipeMenu(){
    dropDownMenu.classList.remove("close")
    dropDownMenu.classList.add("open")
}
 
function closeRecipeMenu(){
    dropDownMenu.classList.remove("open")
    dropDownMenu.classList.add("close")
}