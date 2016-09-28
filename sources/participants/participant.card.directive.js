angular
    .module('craining.participants')
    .directive('userCard', UserCardDirective);

UserCardDirective.$inject = ['ParticipantsService', '$compile'];

function UserCardDirective(ParticipantsService, $compile) {

    return {
        templateUrl: 'sources/participants/participants.card.template.html',
        transclude: true,
        scope: {
            card: '='
        },
        compile: function (elem, attr) {

            var canEdit = attr.canEdit !== 'false';
            var editHtml, buttonsHtml;

            if (!canEdit) {
                var editElem = $(elem).find('#edit');
                editHtml = '<span ng-if="edit">' + editElem.html() + '</span>';
                editElem.remove();

                var buttonsElem = $(elem).find('#buttons');
                buttonsHtml = '<span ng-if="edit">' + buttonsElem.html() + '</span>';
                buttonsElem.remove();
            }

            return function ($scope, elem, attr) {
                var previous;


                $scope.$on('bulk', function (event, data) {
                    $scope.switchEditMode();
                    var linkFn = $compile(editHtml);
                    elem.find('.well').append(linkFn($scope));

                    elem.find('.well').append($compile(buttonsHtml)($scope));
                });

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