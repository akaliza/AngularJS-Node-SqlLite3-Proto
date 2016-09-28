angular.module('craining.participants')
    .directive(
        'dummyDirective',
        DummyDirective);

DummyDirective.$inject = [];

function DummyDirective() {
    return {

        template: `
            <div>
                <input ng-model="name">
                <span class="btn btn-info"
                       ng-click="saveFunction({a: true, param: name})">Save</span>
            </div>
        `,
        scope: {
            name: '@',
            saveFunction: '&'
        }

    }
}