"use strict";

// pattern  "module" //////////////////////////////////////////////////////////////////////////
// Изоляция области видимости описаний 
// IIFE - immediatele invoker functions expression
// (function() {

//     var a=5;

//     function f(b) {
//         console.log( "a="+a + " b="+b );
//     }

//     f(7);

// })( );

//////////////////////////////////////////////////////////////////////////////////////////////
//////Pattern Observer
function Weather() {
    var self=this;

    var num=1; // погода: 1=солнце 2=дождь; приватная!

    // кому интересно изменение погоды?
    var listeners=[]; // здесь список функций, которые надо вызвать
    self.addListener=function(func) {
        listeners.push(func);
        func(num); // и сразу вызываем функцию, передаём погоду и что ещё надо
    }

    self.change=function() {
        num=3-num; // меняем на противоположную

        self.update();

        for ( var f=0; f<listeners.length; f++ ) {
            var func=listeners[f]; // func - это функция-слушатель
            func(num); // вызываем её, передаём погоду и что ещё надо
        }
    }

    self.update=function() {
        var weatherElem=document.getElementById('IWeather');
        weatherElem.src='/Examples/weather/'
            +((num==1)?'weather_sun.jpg':'weather_rain.jpg');
    }

}


var weather=new Weather;
weather.update();

function Cat() {
    var self=this;

    var state=-1; // состояние: 11=загар 12=зонтик; приватная!

    self.checkWeather=function(weatherNum) {
        // здесь this не будет указывать на объект кота
        // т.к. функция вызывается не в виде объект.метод()
        console.log('Кот узнал, что новая погода: '+weatherNum);
        state=weatherNum+10;
        self.update();
    }

    self.update=function() {
        var catElem=document.getElementById('ICat');
        catElem.src='/Examples/weather/'
            +((state==11)?'cat_sun.jpg':'cat_rain.jpg');
    }
}

var cat=new Cat;
weather.addListener(cat.checkWeather);
function Dog() {
    var self=this;

    var state=-1; // состояние: 11=загар 12=зонтик; приватная!

    self.checkWeather=function(weatherNum) {
        // здесь this не будет указывать на объект кота
        // т.к. функция вызывается не в виде объект.метод()
        console.log('Собака узнала, что новая погода: '+weatherNum);
        state=weatherNum+10;
        self.update();
    }

    self.update=function() {
        var dogElem=document.getElementById('IDog');
        dogElem.src='/Examples/weather/'
            +((state==11)?'dog_sun.jpg':'dog_rain.jpg');
            dogElem.style.width = 300 +'px';
    }
}

var dog=new Dog;
weather.addListener(dog.checkWeather);