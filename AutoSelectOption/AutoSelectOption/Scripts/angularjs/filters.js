tableFilter.filter('columnFilter', function () {
    return function (arrayList, filters) {
        var options = [];
        var ids = [];
        angular.forEach(filters.rows, function (row) {
            angular.forEach(row.datas, function (data) {
                angular.forEach(data.ids, function (id) {
                    if (id.show == true) {
                        ids.push(id.id);
                    }
                    })
                
            })
        })
        for (var i = 0; i <= arrayList.length; i++) {
            if (ids.indexOf(i) > -1) {
                options.push(arrayList[i]);
            }
        }

        return options;
    }
})

tableFilter.filter('filtetFilters', function () {
    return function (filters, listId, headFilter) {
        var output = [];
        var idForShow = [];
        var i = 0;
        var filterArray = [];
        if (headFilter != "") {
            for (var i = 0; i < filters.length; i++) {
                if (filters[i].columnName == headFilter.columnName) {
                    angular.forEach(filters[i].ids, function (filterId) {
                        if (listId.indexOf(filterId.id) > -1) {
                            filters[i].check = false;
                            filterId.show = false;
                        }
                        else {
                            filters[i].check = true;
                            filterId.show = true;
                            idForShow.push(filterId.id);
                        }
                    });
                }
                else {
                    var k = 0;
                    console.log(filters[i])
                    angular.forEach(filters[i].ids, function (filterId) {
                        if (listId.indexOf(filterId.id) > -1) {
                            filterId.show = false;
                        }
                        else {
                            filterId.show = true;
                            k++;
                        }
                    });
                    if (k > 0) {
                        filters[i].check = true;
                    }
                    else {
                        filters[i].check = false;
                    }
                }
            };
            return filters;
        }
        else
        {
            return filters;
        }            
    }
})