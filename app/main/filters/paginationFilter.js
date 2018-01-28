(function (ng) {
    'use strict';
    ng.module('mApp').filter('paginationFilter', paginationFilter);

    paginationFilter.$inject = [];

    function paginationFilter () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        }
    }
})(angular);



