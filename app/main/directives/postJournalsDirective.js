(function (ng) {
    'use strict';
    ng.module('mApp').directive('postJournalsDirective', postJournalsDirective);

    postJournalsDirective.$inject = []; //

    function postJournalsDirective () {

        // Inject line for link method
        _baseLink.$inject = ['$scope','$element', 'attrs', 'ctrl'];

        // Inject line for ctrl method
        _baseCtrl.$inject = [];

        // Return directive settings
        return {
            restrict     : 'A',
            controllerAs : 'vm',    //дельнейшая работа через vm
            templateUrl  : '/app/main/template/postJournalsDirective.html',
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

            vm.postJournals = [
                {
                    id: 1,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b1.jpg',
                    date: '13 Nov, 2012',
                    title: 'Adipiscing Mollis Inceptos',
                    text: 'Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis curabitur blandit.'
                },
                {
                    id: 2,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b2.jpg',
                    date: '02 Jan, 2013',
                    title: 'Adipiscing Mollis Inceptos',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus.'
                },
                {
                    id: 3,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b3.jpg',
                    date: '14 Mar, 2013',
                    title: 'Tristique Purus Pharetra',
                    text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet.'
                },
                {
                    id: 4,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b4.jpg',
                    date: '23 Dec, 2013',
                    title: 'Inceptos Porta Nibh',
                    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in.'

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
            scope.postJournals = ctrl.postJournals;
        }

    }
})(angular);
