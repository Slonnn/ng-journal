(function (ng) {
    'use strict';
    ng.module('mApp').directive('blogJournalsDirective', blogJournalsDirective);

    blogJournalsDirective.$inject = []; //

    function blogJournalsDirective () {

        // Inject line for link method
        _baseLink.$inject = ['$scope','$element', 'attrs', 'ctrl'];

        // Inject line for ctrl method
        _baseCtrl.$inject = [];

        // Return directive settings
        return {
            restrict     : 'EA',
            controllerAs : 'vm',    //дельнейшая работа через vm
            templateUrl  : 'app/main/template/blogJournal.html',
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

            vm.page = 0;
            vm.limit = 0;
            vm.generate = function(page,limit) {
                vm.page = page;
                vm.limit = limit;
            }

            vm.blogPosts = [
                {
                    id: 1,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b1.jpg',
                    date: '13 Nov, 2012',
                    title: 'Adipiscing Mollis Inceptos',
                    text: 'Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.'
                },
                {
                    id: 2,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b2.jpg',
                    date: '02 Jan, 2013',
                    title: 'Adipiscing Mollis Inceptos',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna..'
                },
                {
                    id: 3,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b3.jpg',
                    date: '14 Mar, 2013',
                    title: 'Tristique Purus Pharetra',
                    text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur, tortor mauris condimentum nibh. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },
                {
                    id: 4,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b4.jpg',
                    date: '23 Dec, 2013',
                    title: 'Inceptos Porta Nibh',
                    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo.'

                },
                {
                    id: 5,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '#1  27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 6,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '11 Nov 2018',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 7,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 8,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 9,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 10,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '#2 11 Dec 2016',
                    title: 'Inceptos Porta Nibh',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 11,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo.'
                },
                {
                    id: 12,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 13,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 14,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                },
                {
                    id: 15,
                    href:'blog-post.html',
                    img: 'app/assets/images/art/b5.jpg',
                    date: '#3 27 Dec 2013',
                    title: 'Ultricies Tortor Malesuada',
                    text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
                }
            ];


        };

        /**Прописываем все манипуляции scope, element
         * Link method for base BaseDirective
         * @private
         */
        function _baseLink(scope, element, attrs, ctrl) { //добавляем Ctrl в Link
            /**
             * transfer of objects through ng-repeat
             * @type {*|Array}
             */
            scope.blogPosts = ctrl.blogPosts;

            ctrl.generate(attrs['page'],attrs['limit']);


        }

    }
})(angular);
