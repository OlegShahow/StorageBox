"use strict";


// document.querySelectorAll('td').forEach(function(td, index) {
//     td.addEventListener('mouseenter', function() {
//         const columnIndex = index; // Индекс колонки
//         document.querySelectorAll('th').forEach(function(th, thIndex) {
//             if (thIndex === columnIndex) {
//                 th.classList.add('hovered'); // Добавляем тень для соответствующего <th>
//             }
//         });
//     });

//     td.addEventListener('mouseleave', function() {
//         const columnIndex = index; // Индекс колонки
//         document.querySelectorAll('th').forEach(function(th, thIndex) {
//             if (thIndex === columnIndex) {
//                 th.classList.remove('hovered'); // Убираем тень
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ячейки в теле таблицы
    const tableCells = document.querySelectorAll('.tbody td');
    
    // Обработчик для наведения на ячейку
    tableCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            // Находим индекс столбца
            const columnIndex = Array.from(cell.parentNode.children).indexOf(cell);
            
            // Подсвечиваем все ячейки в этом столбце
            document.querySelectorAll('.tbody tr').forEach(row => {
                row.children[columnIndex].classList.add('highlight');
            });

            // Подсвечиваем соответствующий заголовок
            document.querySelectorAll('.sticky-header th')[columnIndex].classList.add('highlight');
        });

        // Обработчик для выхода мышки
        cell.addEventListener('mouseleave', function() {
            // Убираем подсветку со всех ячеек в этом столбце
            const columnIndex = Array.from(cell.parentNode.children).indexOf(cell);
            document.querySelectorAll('.tbody tr').forEach(row => {
                row.children[columnIndex].classList.remove('highlight');
            });

            // Убираем подсветку с заголовка столбца
            document.querySelectorAll('.sticky-header th')[columnIndex].classList.remove('highlight');
        });
    });
});