/**
 * Created by User on 23.05.2017.
 */
"use strict";
(function () {
    // назначаем количество элементов на странице
    let pageSize = 1;
    // расчет количества элементов данного класса
    let pagesCount = $(".content").length;
    // расчет количества страниц
    let totalPages = Math.ceil(pagesCount / pageSize);
    //текущая (отображаемая) страница
    let currentPage = 1;
    //контейнер для вывода
    let nav = '';
    //динамический вывод кнопок с нумерацией
    for (let i=0; i<totalPages; i++){
        nav += '<li class="numeros"><a href="#">'+(i+1)+'</a></li>';
    }
    // Добавляем нумерацию страниц после кнопки «prev»:
    $(".pag_prev").after(nav);
    // добавляем класс "active" первой кнопке с нумерацией (класса ".numeros")
    $(".numeros").first().addClass("active");

     function validateDisableClass() {
        if (currentPage === 1) {
            $('li.pag_prev').addClass('disabled'); //если первый, то не активна кнопка "влево"
            $('li.pag_first').addClass('disabled');
        } else {
            $('li.pag_prev').removeClass('disabled');
            $('li.pag_first').removeClass('disabled');
        }
        if (currentPage === totalPages) {
            $('li.pag_next').addClass('disabled'); // если последний, то не активна кнопка "вправо"
            $('li.pag_last').addClass('disabled');
        } else {
            $('li.pag_next').removeClass('disabled');
            $('li.pag_last').removeClass('disabled');
        }
    }

     function showPage() {
        validateDisableClass();
        $(".content").hide().each(function (n) {
            if (n >= (currentPage - 1) && n < pageSize * currentPage)
                $(this).show();
        });
    }

    showPage();

    //определение currentPage по клику на кнопку с нумерацией
    $(".pagination li.numeros").click(function() {
        $(".pagination li").removeClass("active"); //удаляем класс "active"
        $(this).addClass("active"); //присваиваем класс "active" выбранному элементу
        currentPage = parseInt($(this).text());
        showPage();
    });

    $(".pagination li.pag_prev").click(function() {
        if (currentPage > 1) {
            // удалить класс "active" текущего числа и добавить к предыдущему номеру
            $('.numeros.active').removeClass('active').prev().addClass('active');
            currentPage--; //текущая страница на 1 меньше
            showPage();
        }
    });

    $(".pagination li.pag_next").click(function() {
        if (currentPage < totalPages) {
            //удалить класс "active" текущего числа и добавить к следующему номеру
            $('.numeros.active').removeClass('active').next().addClass('active');
            currentPage++; //текущая страница на 1 больше
            showPage();
        }
    });

    $(".pagination li.pag_first").click(function() { //при нажатии на кнопку "first"
        $('.numeros.active').removeClass('active');  // снимаем класс "active" с текущего элемента
        $('.numeros').first().addClass('active');    // присваиваем его первому элементу
        currentPage = 1;
        showPage();
    });

    $(".pagination li.pag_last").click(function() {  // при нажатии на кнопку "last"
        $('.numeros.active').removeClass('active');  // снимаем класс "active" с текущего элемента
        $('.numeros').last().addClass('active');     // присваиваем его последнему элементу
        currentPage = totalPages;
        showPage();
    });
}());
