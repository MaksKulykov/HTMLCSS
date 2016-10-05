/*
Функция, которая извлекает данные из источника template.js и присваивает их переменной params. После чего данные выводятся в консоль.
A function that retrieves data from a source template.js and set them to the variable params. Then data is output to the console.
 */
(function (win) {
    var params = {
        states: {
            url: "/", template: "template.js"
        }
    };

    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    }

    setStates();
    console.log(params.states.template);
})
(window);