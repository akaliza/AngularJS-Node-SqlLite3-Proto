angular
    .module('craining.participants')
    .directive('userCard', UserCardDirective);

UserCardDirective.$inject = [];

function UserCardDirective() {

    return {
        templateUrl: 'sources/participants/participants.card.template.html',
        scope: {
            card: '='
        }
    }

}