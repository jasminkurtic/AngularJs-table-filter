autoDrops.filter('elementId', function () {
    return function (datas, Id) {
        var options = [];
        angular.forEach(datas, function (data) {
                if (data.data_id == Id) {
                    options.push(data);
                    }
            });
        return options;
    }
})