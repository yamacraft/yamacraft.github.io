/*
 * http://www.jdev.it/a-very-simple-rss-reader-with-angularjs-and-google-feed-api/
 */
var feeds = [];
var feeds2= [];
angular.module('feedModule', ['ngResource'])
    .factory('FeedLoader', function ($resource) {
        return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
            fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
        });
    })
    .service('FeedList', function ($rootScope, FeedLoader) {
        this.get = function() {
            var feedSources = [
                {title: 'Qiita',  url: 'http://qiita.com/yamacraft/feed'},
                {title: 'exblog', url: 'http://yamacraft2.exblog.jp/index.xml'},
                ];
            if (feeds.length === 0) {
                console.log(feedSources);
                for (var i=0; i<feedSources.length; i++) {
                    FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
                        console.log(data);
                        var feed = data.responseData.feed;
                        feeds.push(feed);
                    });
                }
            }
            return feeds;
        };
    })
    .controller('FeedCtrl', function ($scope, FeedList) {
        $scope.feeds = FeedList.get();
        $scope.$on('FeedList', function (event, data) {
            $scope.feeds = data;
        });
    });
