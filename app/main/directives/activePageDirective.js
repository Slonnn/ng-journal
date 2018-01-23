(function (ng) {
    'use strict';
    ng.module('mApp').directive('activePageDirective', activePageDirective);

    activePageDirective.$inject = ['$location']; //

    function activePageDirective ($location) {

        // Inject line for link method
        _baseLink.$inject = ['$scope','$element', 'attrs', 'ctrl'];

        // Inject line for ctrl method
        _baseCtrl.$inject = [];

        // Return directive settings
        return {
            restrict     : 'E',
            controllerAs : 'vm',    //дельнейшая работа через vm
            templateUrl  : '/template/baseDirective.html',
            link         : _baseLink,
            controller   : _baseCtrl

        }


        /**прописываем логику
         * Controller for base directive with additional methods
         *
         * @private
         */
        function _baseCtrl() {


        }

        /**Прописываем все манипуляции scope, element
         * Link method for base BaseDirective
         * @private
         */
        function _baseLink(scope, element, attrs, ctrl) { //добавляем Ctrl в Link



        }

    }
})(angular);

