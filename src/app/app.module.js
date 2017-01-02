(function(){
  angular
      .module("app", ['ui.router', 'templates-app'])
      .config(config);

      function config($stateProvider, $urlRouterProvider){
        $stateProvider
          .state("app", {
            url: "/",
            views: {
              "layout": {
                controller: "appController",
                controllerAs: "vm",
                templateUrl: "partials/main.tpl.html"
              }
            }
          });

          $urlRouterProvider.otherwise('/');
      }
})();
