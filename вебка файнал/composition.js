document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = 'all'; // Изначально все товары видны

    // Функция для фильтрации товаров по выбранному цвету
    function filterProductsByColor(color) {
        const products = document.querySelectorAll('.bestseller-card');

        products.forEach((product) => {
            const productColor = product.dataset.color;

            // Показываем или скрываем товар в зависимости от выбранного цвета
            if (color === 'all' || productColor === color) {
                product.style.display = 'block'; // Показываем товар
            } else {
                product.style.display = 'none'; // Скрываем товар
            }
        });
    }

    // Обработка клика по кнопкам выбора цвета
    const colorButtons = document.querySelectorAll('.color-button');
    
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем класс "selected" у всех кнопок
            colorButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Добавляем класс "selected" на выбранную кнопку
            button.classList.add('selected');
            
            selectedColor = button.dataset.color; // Сохраняем выбранный цвет
            console.log(`Выбран цвет: ${selectedColor}`);
            
            // Фильтруем товары по выбранному цвету
            filterProductsByColor(selectedColor);
        });
    });
});
