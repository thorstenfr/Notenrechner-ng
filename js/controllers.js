angular.module('app.controllers', [])
  
.controller('notenrechnerCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;
	
	$scope.grundlage = 35;
	$scope.erreicht = 15;
	$scope.notenpunkte = 6;
	$scope.isErreicht = true;
	
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
	
	
	$scope.null_ = "0,0";
	$scope.eins = "9,9";
	$scope.zwei = "19,0";
	$scope.drei = "28,0";
	$scope.vier = "36,0";
	$scope.fuenf = "44,0";
	$scope.sechs = "50,0";
	$scope.sieben = "54,0";
	$scope.acht = "60,0";
	$scope.neun = "64,0";
	$scope.zehn = "70,0";
	$scope.elf = "74,4";
	$scope.zwoelf = "80,0";
	$scope.dreizehn = "84,4";
	$scope.vierzehn = "90,0";
	$scope.fuenfzehn = "94,4";
	
	Data.FirstName = "Klaus die Maus";
		
		
	


}])
   
.controller('notenrechner2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 