(function (ng) {
    'use strict';
    ng.module('mApp').controller('JournalCtrl', JournalCtrl);

    JournalCtrl.$inject = ['$scope']; //

    function JournalCtrl ($scope) {
        //create anchor for base this
        var vm = this;
        vm.currentPage = 1;
        vm.totalPages  = 15;
        vm.el_couns    = 5;

    };
})(angular)
