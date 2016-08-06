tableFilter.directive('ngAutooptions', function () {
    return {
        restrict: 'AE',
        templateUrl: '/Template/_options.html'
    };
});

tableFilter.directive('ngMultiselect', function () {
    return {
        restrict: 'EA',
        controller:'filterController',
        scope: { arrayList: '=arrayList' },
        templateUrl: '/Template/_multi.html'
    };
});