(function (ng) {
    'use strict';
    ng.module('mApp').directive('paginationDirective', paginationDirective);

    paginationDirective.$inject = ['$rootScope']; //

    function paginationDirective ($rootScope) {

        // Inject line for link method
        _baseLink.$inject = ['$scope','$element', 'attrs', 'ctrl'];

        // Inject line for ctrl method
        _baseCtrl.$inject = [];

        // Return directive settings
        return {
            restrict     : 'A',
            controllerAs : 'vm',    //дельнейшая работа через vm
            scope        : {},
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
            vm.eventName ='';
            vm.total = 0;
            vm.page = 0;
            vm.limit = 0;
            vm.pager = 0;
            vm.pages = [];

            vm.generate = function(total,page,limit, eventName) {
                vm.eventName = eventName;
                vm.total = total;
                vm.page = page;
                vm.limit = limit;
                vm.pager = (+vm.total/+vm.limit+2)
                for(var i=1; i<vm.pager; i++){
                    vm.pages.push(i);
                };
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
                sentEvent()
            };
            /**
             * click prev number-page
             */
            vm.prevPage = function(){
                vm.page = +vm.page - 1;
                sentEvent();
            };
            /**
             * click  number page
             * @param page
             */
            vm.setPage = function (page){
                return vm.page = page;
            };

            function sentEvent(){
                $rootScope.$broadcast(vm.eventName, vm.page)
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
            ctrl.generate(attrs['total'],attrs['page'],attrs['limit'],attrs['eventname']);

        }

    }
})(angular);
