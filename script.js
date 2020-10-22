/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms;



//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    start: function start() {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    
    },

    rememberMyFilms: function rememberMyFilms() {
        for (let i = 0; i < 2; i++){
            const  a = prompt('Один из последних просмотренных фильмов?', ''),
                   b = prompt('На сколько оцените его?', '');           
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        
        }
    },

    
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10){
            console.log("Malo prosmotreno")
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30 ) {
            console.log('Classic viewer')
        } else if (personalMovieDB.count >= 50) {
            console.log('Cool viewer')
        } else {
            console.log('Error')
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },

    writeYourGenres:  function () {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt (`Ваш любимый жанр под номером ${i+1}: `)
            if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == 'null') {
                i--;
                alert('Вы нажали отмена или ничего не ввели. Попробуйте снова');
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1}  - это ${item}`);
        });
    },

    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;

        }
    }
};

personalMovieDB.writeYourGenres();






