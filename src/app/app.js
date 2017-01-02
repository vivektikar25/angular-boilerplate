(function(){
  angular
      .module("app")
      .controller("appController", appController);

      function appController(){
        var vm = this;
        vm.isSuccessfulyInstalled = "Yuuup! Successfuly Installed";
      }
})();
