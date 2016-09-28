angular.module('shared')
    .component('cardComponent', {
        templateUrl: "sources/shared/components/card.template.html",
        controller: ['$state', CardController],
        bindings: {
            card: '='
        }
    });

function CardController($state) {

    console.log($state);
    var $ctrl = this;

    $ctrl.save = function () {
        console.log('save...');
    }

}