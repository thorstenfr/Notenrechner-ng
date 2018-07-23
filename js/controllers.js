angular.module('app.controllers', [])

.controller('notenrechnerCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;
 	$scope.count = 0;
	$scope.myFunc = function() {
		console.log("changed");
        $scope.count++;
    };

  Data.records = [
         {
           "Note" : "ungenügend",
           "Prozent" : "0,0",
           "Punkte" : "0"
          },{
            "Note" : "mangelhaft",
            "Prozent" : "11,0",
            "Punkte" : "1"
          },{
            "Note" : "mangelhaft",
            "Prozent" : "19,0",
            "Punkte" : "2"
          },{
            "Note" : "mangelhaft",
            "Prozent" : "28,0",
            "Punkte" : "3"
          },{
            "Note" : "ausreichend",
            "Prozent" : "36,0",
            "Punkte" : "4"
          },{
            "Note" : "ausreichend",
            "Prozent" : "44,0",
            "Punkte" : "5"
          },{
            "Note" : "ausreichend",
            "Prozent" : "50,0",
            "Punkte" : "6"
          },{
            "Note" : "befriedigend",
            "Prozent" : "54,0",
            "Punkte" : "7"
          },{
            "Note" : "befriedigend",
            "Prozent" : "60,0",
            "Punkte" : "8"
          },{
            "Note" : "befriedigend",
            "Prozent" : "64,0",
            "Punkte" : "9"
          },{
            "Note" : "gut",
            "Prozent" : "70,0",
            "Punkte" : "10"
          },{
            "Note" : "gut",
            "Prozent" : "74,4",
            "Punkte" : "11"
          },{
            "Note" : "gut",
            "Prozent" : "80,0",
            "Punkte" : "12"
          },{
            "Note" : "sehr gut",
            "Prozent" : "84,4",
            "Punkte" : "13"
          },{
            "Note" : "sehr gut",
            "Prozent" : "90,0",
            "Punkte" : "14"
          },{
            "Note" : "sehr gut",
            "Prozent" : "94,4",
            "Punkte" : "15"
          }
      ]


	$scope.grundlage = 35;
	$scope.erreicht = 20;
	$scope.notenpunkte = 6;
	$scope.isErreicht = true;
	var erg_prozent = $scope.erreicht/$scope.grundlage*100;
	var erreicht=$scope.erreicht;
	var grundlage=$scope.grundlage;

	$scope.TasteClick = function(taste) {
		console.log("Taste: " + $scope.erreicht);
		$scope.erreicht=$scope.erreicht + taste.toString();
		$scope.erreicht = 23;
	}





}])

.controller('notenpunkteSchlSselCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;



}])

.controller('notenrechner2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
