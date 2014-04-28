function AtndbetaSearchCtrl($scope, $http, $log) {
    $scope.query = '東京';
    $scope.sizes = [
        {name:'10'},
        {name:'20'},
        {name:'30'},
        {name:'50'},
        {name:'100'}
    ];
    $scope.size = $scope.sizes[3];
    $scope.pages = [
        {name:'1'},
        {name:'2'},
        {name:'3'},
        {name:'4'},
        {name:'5'},
        {name:'6'},
        {name:'7'},
        {name:'8'},
        {name:'9'},
        {name:'10'},
        {name:'11'},
        {name:'12'},
        {name:'13'},
        {name:'14'},
        {name:'15'},
    ];
    $scope.page = $scope.pages[0];

    /*
     */
    $scope.doSearch = function() {
        var date = new Date();
        var y = date.getFullYear();
        var m  = date.getMonth() + 1;
        var m2 = date.getMonth() + 2;
        m  = ('0' + m).slice(-2);
        m2 = ('0' + m2).slice(-2);

        var keyword = encodeURIComponent($scope.query);
        var size = $scope.size.name;
        if(size<=0){
            size = 30;
        }

        var uri = 'http://api.atnd.org/events/?format=jsonp'
        + '&count=' + size
        + '&keyword=' + encodeURIComponent($scope.query)
        + '&ym=' + (y+m) + ',' + (y+m2)
        + '&start=' + (($scope.page.name - 1) * size)
        + '&callback=JSON_CALLBACK';

        //console.log(uri);
        $scope.loading = true;
        $http.jsonp(uri).success(function(response) {
            $scope.loading = false;
            $scope.num     = response.results_returned;
            $scope.start   = response.results_start;
            $scope.results = response.events;
        });
    };
}
