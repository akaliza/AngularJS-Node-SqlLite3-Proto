angular
    .module('craining.participants')
    .directive('userCard', UserCardDirective);

UserCardDirective.$inject = ['ParticipantsService', '$timeout'];

function UserCardDirective(ParticipantsService, $timeout) {

    return {
        templateUrl: 'sources/participants/participants.card.template.html',
        transclude: true,
        scope: {
            card: '='
        },
        compile: function (elem, attr) {

            var canEdit = attr.canEdit !== 'false';

            if (!canEdit) {
                $(elem).find('#edit').remove();
                $(elem).find('#buttons').remove();
            }

            return function ($scope, elem, attr) {
                var previous;

                $scope.canEdit = attr.canEdit !== 'false';
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

}