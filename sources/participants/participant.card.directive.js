angular
    .module('craining.participants')
    .directive('userCard', UserCardDirective);

UserCardDirective.$inject = ['ParticipantsService'];

function UserCardDirective(ParticipantsService) {


    return {
        templateUrl: 'sources/participants/participants.card.template.html',
        scope: {
            card: '='
        },
        link: function ($scope, elem, attr) {

            var previous;
            $scope.edit = false;

            $scope.switchEditMode = function () {
                if (!$scope.edit) {
                    previous = angular.copy($scope.card);
                } else {
                    $scope.card = previous;
                }

                $scope.edit = !$scope.edit;
            };

            $scope.save = function () {
                ParticipantsService.updateParticipant($scope.card).then(
                    function () {
                        $scope.edit = false;
                    }
                )
            }

        }
    }

}