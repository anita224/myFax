document.addEventListener("DOMContentLoaded", function () {
    // Обработчик для бургер-меню
    const burgerIcon = document.querySelector(".burger-icon");
    const headerList = document.querySelector(".header-list");

    burgerIcon.addEventListener("click", function () {
        headerList.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });

    // Получение всех вкладок, стрелочек и блоков
    const tabs = document.querySelectorAll(".contacts-text-span");
    const arrows = document.querySelectorAll(".arrow");
    const blocks = document.querySelectorAll(".contacts-second-wrap");

    // Функция для скрытия всех блоков
    function hideAllBlocks() {
        blocks.forEach((block) => {
            block.style.display = "none";
        });
    }

    // Обработчик для каждой вкладки
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            hideAllBlocks();

            // Убираем активное состояние с предыдущей вкладки и стрелочки
            tabs.forEach((t) => t.classList.remove("active-tab"));
            arrows.forEach((arrow) => arrow.classList.remove("active-arrow"));

            // Добавляем активное состояние для текущей вкладки и стрелочки
            tab.classList.add("active-tab");
            if (arrows[index]) {
                arrows[index].classList.add("active-arrow");
            }

            // Получаем ID блока для отображения
            const targetBlockId = tab.textContent.toLowerCase();
            const targetBlock = document.getElementById(targetBlockId);

            // Отображаем выбранный блок с анимацией
            if (targetBlock) {
                targetBlock.style.opacity = "0";
                targetBlock.style.display = "flex";
                setTimeout(() => {
                    targetBlock.style.opacity = "1";
                }, 10);
            }
        });
    });

    // Устанавливаем активное состояние для первой вкладки и стрелочки
    tabs[0].classList.add("active-tab");
    if (arrows[0]) {
        arrows[0].classList.add("active-arrow");
    }

    // Отображаем блок "home" при загрузке страницы с анимацией
    const defaultBlock = document.getElementById("home");
    if (defaultBlock) {
        defaultBlock.style.opacity = "0";
        defaultBlock.style.display = "flex";
        setTimeout(() => {
            defaultBlock.style.opacity = "1";
        }, 10);
    }
});
