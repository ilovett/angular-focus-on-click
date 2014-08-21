(function(window, angular, undefined) {

  'use strict';

  /**
   * @ngdoc directive
   * @name ngFocusOnClick.directive:focusOnClick
   * @description
   * # focusOnClick
   */
  angular.module('ngFocusOnClick', [])
    .directive('focusOnClick', function() {
      return {
        link: function postLink(scope, element, attrs) {
          var types = ['a', 'button', 'input[type=button]', 'input[type=submit]'];
          element.on('click', function(evt) {
            var $target = angular.element(evt.target);
            if ($target.is(types.join(',')) && $target.is(':not([disabled])')) {
              $target.focus();
            }
          });
        }
      };
    });

})(window, window.angular);
