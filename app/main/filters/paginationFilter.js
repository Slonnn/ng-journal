(function (ng) {
    'use strict';
    ng.module('mApp').filter('paginationFilter', paginationFilter);

    paginationFilter.$inject = [];

    function paginationFilter () {

        return function (input, start) {
            start = +start;
            console.log('start', start);

            if(input == 1){
                return  input.slice(0,start);
            }
            else{
                return input.slice(start);
            };
            console.log('input', input);
        }
    }
})(angular);
