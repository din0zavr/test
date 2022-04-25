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




window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+375 (__) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});




var XHR = new XMLHTTPRequest ()
function sendMail (f)
    {
var str = [] 
    for (var el = f.elements, j = 0; j < el.length - 1; j++)
        {
        str [j] = el[j]. name + '=' + encodeURIComponent (el[j].value);
        }
    XHR.open ('get', 'sendForm.php?' + str.join ('&'), true);
    XHR.send (null);
    }