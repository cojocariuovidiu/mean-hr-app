// myApp.controller('MaterialController', function($mdDialog){
//     console.log('MaterialController loaded.')
//     const vm = this;
  
//     vm.showAdvanced = function(ev) {
//       // Appending dialog to document.body to cover sidenav in docs app
//       // Modal dialogs should fully cover application
//       // to prevent interaction outside of dialog
      
//       $mdDialog.show({
//         controller: DialogController,
//         templateUrl: 'dialog1.tmpl.html',
//         parent: angular.element(document.body),
//         targetEvent: ev,
//         clickOutsideToClose:true,
//         fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
//       })
//       .then(function(answer) {
//         $scope.status = 'You said the information was "' + answer + '".';
//       }, function() {
//         $scope.status = 'You cancelled the dialog.';
//       });
//     };

    
//   });
  