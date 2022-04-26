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


const monday = `
<div class="dishes-item monday">
<img class="dishes-item_img" src="./img/food.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Понедельник</div>
    <ul>
        <li>Салат “Белые росы” (1.23р.)</li>
        <li>Котлета “Нясвиж” (2.48р.)</li>
        <li>Пюре из картошки (1.08р.)</li>
        <li>Кетчуп “Нежный” (0.24р.)</li>
        <li>Сок “Рич” томатный (0.72р.)</li>
        <li> Батон “Аппетитный” (0.13р.)</li>
    </ul>
</div>
</div>`

const tuesday =`<div class="dishes-item tuesday">
<img class="dishes-item_img" src="./img/food.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Вторник</div>
    <ul>
        <li>Биточки рыбные (филе сайды) (2.53р.)</li>
        <li>Рис (0.65р.)</li>
        <li>Салат “Зарница” (1.08р.)</li>
        <li>Горчица “Английская” (0.21р.) (0.24р.)</li>
        <li>Чай “Арденский лес” черный (0.77р.)</li>
        <li>Эклерчики (1.89р.)</li>
    </ul>
</div>
</div>`


const wednesday = `
<div class="dishes-item wednesday">
<img class="dishes-item_img" src="./img/food.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Среда</div>
    <ul>
        <li>Салат “Белые росы” (1.23р.)</li>
        <li>Котлета “Нясвиж” (2.48р.)</li>
        <li>Пюре из картошки (1.08р.)</li>
        <li>Кетчуп “Нежный” (0.24р.)</li>
        <li>Сок “Рич” томатный (0.72р.)</li>
        <li> Батон “Аппетитный” (0.13р.)</li>
    </ul>
</div>
</div>`

const thursday = `<div class="dishes-item thursday">
<img class="dishes-item_img" src="./img/food.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Четверг</div>
    <ul>
        <li>Салат “Белые росы” (1.23р.)</li>
        <li>Котлета “Нясвиж” (2.48р.)</li>
        <li>Пюре из картошки (1.08р.)</li>
        <li>Кетчуп “Нежный” (0.24р.)</li>
        <li>Сок “Рич” томатный (0.72р.)</li>
        <li> Батон “Аппетитный” (0.13р.)</li>
    </ul>
</div>
</div>`

const friday = `<div class="dishes-item friday">
<img class="dishes-item_img" src="./img/food.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Пятница</div>
    <ul>
        <li>Салат “Белые росы” (1.23р.)</li>
        <li>Котлета “Нясвиж” (2.48р.)</li>
        <li>Пюре из картошки (1.08р.)</li>
        <li>Кетчуп “Нежный” (0.24р.)</li>
        <li>Сок “Рич” томатный (0.72р.)</li>
        <li> Батон “Аппетитный” (0.13р.)</li>
    </ul>
</div>
</div>`

const saturday = `<div class="dishes-item saturday">
<img class="dishes-item_img" src="./img/food.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Суббота</div>
    <ul>
        <li>Салат “Белые росы” (1.23р.)</li>
        <li>Котлета “Нясвиж” (2.48р.)</li>
        <li>Пюре из картошки (1.08р.)</li>
        <li>Кетчуп “Нежный” (0.24р.)</li>
        <li>Сок “Рич” томатный (0.72р.)</li>
        <li> Батон “Аппетитный” (0.13р.)</li>
    </ul>
</div>
</div>`

const weekDaysCode=[ wednesday, thursday, friday, saturday, monday, tuesday]

let mondayInHtml, tuesdayInHtml, wednesdayInHtml, thursdayInHtml, fridayInHtml, saturdayInHtml
const weekDaysInHtml = [mondayInHtml, tuesdayInHtml, wednesdayInHtml, thursdayInHtml, fridayInHtml, saturdayInHtml]

const backButton = document.querySelector(".backButton")
const nextButton = document.querySelector(".nextButton")
const dishesContainer = document.querySelector(".dishes-content")

dishesContainer.insertAdjacentHTML("beforeend", monday)
dishesContainer.insertAdjacentHTML("beforeend", tuesday)

console.log(dishesContainer.firstElementChild);

backButton.addEventListener("click", doBack)
nextButton.addEventListener("click", doNext)

function doNext(){
    weekDaysInHtml[0] = dishesContainer.firstElementChild
    weekDaysInHtml[0].remove()
    weekDaysInHtml.push(weekDaysInHtml[0])
    weekDaysInHtml.shift()
    
    dishesContainer.insertAdjacentHTML("beforeend", weekDaysCode[0])
    weekDaysCode.push(weekDaysCode[0])
    weekDaysCode.shift()
}

function doBack(){
    weekDaysCode.unshift(weekDaysCode[5])
    weekDaysCode.pop()
    dishesContainer.insertAdjacentHTML("afterbegin", weekDaysCode[0])

    weekDaysInHtml[0] = dishesContainer.lastElementChild
    weekDaysInHtml[0].remove()
    weekDaysInHtml.push(weekDaysInHtml[5])
    weekDaysInHtml.shift()

}
