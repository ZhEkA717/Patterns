"use strict";
// паттерн "модуль" ////////////////////////////////////////////////////////////
// Изоляция области видимости описаний 

(function() {

    var a=5;

    function f(b) {
        console.log( "a="+a + " b="+b );
    }

    f(7);

})( );

////////////////////////////////////////////////////////////////////////////////