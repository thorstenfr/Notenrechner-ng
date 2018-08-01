angular.module('app.controllers', [])

.controller('notenrechnerCtrl', ['$scope', '$stateParams', 'Data', '$ionicNavBarDelegate', '$location',   // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data, $ionicNavBarDelegate, $location) {
	// Data = DataStorage.all();
	$scope.Data = Data;

	$scope.grundlage = 35;
	$scope.erreicht = 20;
	$scope.notenpunkte = 6;
	$scope.isErreicht = true;

	var firstVisit = localStorage.getItem('firstVisit');
console.log("(1) firstVisit im Comntroller: " + firstVisit);
  if (!firstVisit) {
		console.log("(2) firstVisit im Comntroller: " + firstVisit);
	$scope.Data.records =[
				 {
					 "Note" : "ungenügend",
					 "Prozent" : "10",
					 "Punkte" : "0"
					},{
						"Note" : "mangelhaft",
						"Prozent" : "11",
						"Punkte" : "1"
					},{
						"Note" : "mangelhaft",
						"Prozent" : "19",
						"Punkte" : "2"
					},{
						"Note" : "mangelhaft",
						"Prozent" : "28",
						"Punkte" : "3"
					},{
						"Note" : "ausreichend",
						"Prozent" : "36",
						"Punkte" : "4"
					},{
						"Note" : "ausreichend",
						"Prozent" : "44",
						"Punkte" : "5"
					},{
						"Note" : "ausreichend",
						"Prozent" : "50",
						"Punkte" : "6"
					},{
						"Note" : "befriedigend",
						"Prozent" : "54",
						"Punkte" : "7"
					},{
						"Note" : "befriedigend",
						"Prozent" : "60",
						"Punkte" : "8"
					},{
						"Note" : "befriedigend",
						"Prozent" : "64",
						"Punkte" : "9"
					},{
						"Note" : "gut",
						"Prozent" : "70",
						"Punkte" : "10"
					},{
						"Note" : "gut",
						"Prozent" : "74",
						"Punkte" : "11"
					},{
						"Note" : "gut",
						"Prozent" : "80",
						"Punkte" : "12"
					},{
						"Note" : "sehr gut",
						"Prozent" : "84",
						"Punkte" : "13"
					},{
						"Note" : "sehr gut",
						"Prozent" : "90",
						"Punkte" : "14"
					},{
						"Note" : "sehr gut",
						"Prozent" : "94",
						"Punkte" : "15"
					}
			]
		}
		else {
			console.log("Lade Daten!!!");
			$scope.Data.records = Data.all();
		}

}])

.controller('notenpunkteSchlSselCtrl', ['$scope', '$stateParams', 'Data',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data ) {
	$scope.Data = Data;
	console.log("Data: [" + $scope.Data + "]");
	var firstVisit = localStorage.getItem('firstVisit');
  Data.firstVisit=firstVisit;
  if (!firstVisit) {
    // $location.url('/tour');
		var now = new Date();
		window.localStorage.setItem('firstVisit','Um: ' + now);






  }
	else {

	}


	$scope.$on('$ionicView.leave', function(){

	  // do all kind of stuff
	//	console.log("Saving data ...");
	console.log("Saving Data in notenpunkteSchlSselCtrl ... ");
	Data.save($scope.Data.records);


	});


}])

.controller('notenrechner2Ctrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;

}])
