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
            restrict     : 'A',
            controllerAs : 'vm',    //дельнейшая работа через vm
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

            /**
             * проверяем на какой странице нацодимся и добавляем ему class="current"
             */
            function setActiveClass() {
                var path = $location.path();
                console.log('1');
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                        console.log('2');
                    });
                }
            }

            setActiveClass();

            scope.$on('$locationChangeSuccess', setActiveClass);

        }

    }
})(angular);
