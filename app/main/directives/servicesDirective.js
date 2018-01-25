(function (ng) {
    'use strict';
    ng.module('mApp').directive('servicesDirective', servicesDirective);

    servicesDirective.$inject = []; //

    function servicesDirective () {

        // Inject line for link method
        _baseLink.$inject = ['$scope','$element', 'attrs', 'ctrl'];

        // Inject line for ctrl method
        _baseCtrl.$inject = [];

        // Return directive settings
        return {
            restrict     : 'A',
            controllerAs : 'vm',    //дельнейшая работа через vm
            template     : "<div class=\"row text-center services-1\">\n" +
            "                   <div class=\"col-sm-3\"  ng-repeat=\"services in Services\">\n" +
            "                       <div class=\"col-wrapper\">\n" +
            "                           <div class=\"icon-wrapper\">\n" +
            "                               <div class=\"icon\"><img ng-src=\"{{services.img}}\" data-ng-src=\"{{services.img}}\" data-ret=\"app/assets/images/icons/icon-web@2x.png\" class=\"retina\" alt=\"\" /></div>\n" +
            "                           </div>\n" +
            "                           <div class=\"text-wrapper\">\n" +
            "                               <h4>{{services.title}}</h4>\n" +
            "                               <p>{{services.text}}</p>\n" +
            "                           </div>\n" +
            "                       </div>\n" +
            "                   </div>\n" +
            "               </div>",
            // tempLateUrl  : '/template/introDirective.html',
            link         : _baseLink,
            controller   : _baseCtrl

        }


        /**прописываем логику
         * Controller for base directive with additional methods
         *
         * @private
         */
        function _baseCtrl() {
            var vm = this;

            vm.Services = [
                {
                    id: 1,
                    img: 'app/assets/images/icons/icon-web.png',
                    title: 'Web Design',
                    text: 'Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.'
                },
                {
                    id: 2,
                    img: 'app/assets/images/icons/icon-tv.png',
                    title: 'Motion Video',
                    text: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit leo quam sem lacinia quam venenatis..'
                },
                {
                    id: 3,
                    img: 'app/assets/images/icons/icon-print.png',
                    title: 'Print Design',
                    text: 'Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam vel scelerisque.'

                },
                {
                    id: 4,
                    img: 'app/assets/images/icons/icon-heart.png',
                    title: 'Illustration',
                    text: 'Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, ac cursus commodo, tortor mauris condimentum justo sit amet.'

                }
            ];


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
            scope.Services = ctrl.Services;
        }

    }
})(angular);
