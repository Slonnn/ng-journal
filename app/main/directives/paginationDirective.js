(function (ng) {
    'use strict';
    ng.module('mApp').directive('paginationDirective', paginationDirective);

    paginationDirective.$inject = []; //

    function paginationDirective () {

        // Inject line for link method
        _baseLink.$inject = ['$scope','$element', 'attrs', 'ctrl'];

        // Inject line for ctrl method
        _baseCtrl.$inject = [];

        // Return directive settings
        return {
            restrict     : 'A',
            controllerAs : 'vm',    //дельнейшая работа через vm
            templateUrl  : '/app/main/template/pagination.html',
            link         : _baseLink,
            controller   : _baseCtrl

        };


        /**прописываем логику
         * Controller for base directive with additional methods
         *
         * @private
         */
        function _baseCtrl() {
            var vm = this;
            vm.total = 0;
            vm.page = 0;
            vm.limit = 0;
            vm.pages = [];
            vm.generate = function(total,page,limit) {
                vm.total = total;
                vm.page = page;
                vm.limit = limit;
                vm.pages = [1,2,3];



            };
            /**
             * lock button prev on firstPage
             * @returns {boolean}
             */
            vm.firstPage = function() {
                return vm.page == 1;
            };
            /**
             * lock button next on firstPage
             * @returns {boolean}
             */
            vm.lastPage = function(){
                return vm.pages.length == vm.page;
            };
            /**
             * click next number-page
             */
            vm.nextPage = function(){
                vm.page = +vm.page + 1;
            };
            /**
             * click prev number-page
             */
            vm.prevPage = function(){
                vm.page = +vm.page - 1;
            };
            /**
             * click  number page
             * @param page
             */
            vm.setPage = function (page){
                return vm.page = page;
            }



        }

        /**Прописываем все манипуляции scope, element
         * Link method for base BaseDirective
         * @private
         */
        function _baseLink(scope, element, attrs, ctrl) { //добавляем Ctrl в Link
            /**
             * transfer of objects through ng-repeat
             * @type {*|Array}
             */

            ctrl.generate(attrs['total'],attrs['page'],attrs['limit'])

        }

    }
})(angular);
