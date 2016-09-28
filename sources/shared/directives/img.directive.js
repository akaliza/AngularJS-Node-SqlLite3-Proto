angular.module('shared')
    .directive('img', ImageDirective)
    .directive('ngDisabled', NgDisabled)

ImageDirective.$inject = [];

function ImageDirective() {
    return {
        restrict: 'E',
        compile: function(elem) {
            elem.attr('style', 'max-width: 200px;')
        }
    }
}

function NgDisabled() {
    return {
        priority: 10,
        compile: function(elem, attr) {
            if (elem.prop("tagName") !== "BUTTON" && attr.ngClick !== undefined) {
                var actualValue = '!('+attr.ngDisabled+') && '+attr.ngClick;
                console.log(actualValue);
                attr.ngClick = actualValue;
                elem.attr('ng-click', actualValue);
                elem.attr('ng-disabled', '');
            }
        }
    }
}

