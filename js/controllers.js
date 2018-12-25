angular.module('app.controllers', [])
  
.controller('notenrechnerCtrl', ['$scope', '$rootScope', '$stateParams', 'Data', '$ionicNavBarDelegate', '$ionicModal', '$timeout', '$ionicPopup','$ionicActionSheet', '$location',   // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, Data, Config, $ionicModal, $timeout, $ionicPopup,$ionicActionSheet, $ionicNavBarDelegate, $location) {
	// Data = DataStorage.all();
	
	$scope.Data = Data;
	$scope.Tutorial = Data.tutorial();
	const heute = new Date();
	var firstRun = Data.getFirstRun();

	if (firstRun==0) {
		// Beim nächsten NR-Start ist nrFirstRun gesetzt. 
		Data.setFirstRun(heute);
	}


	// $scope.grundlage = 35;
	Data.grundlage=35;
	Data.erreicht=20;
	$scope.grundlage = 35;
	$scope.erreicht = 20;
	$scope.notenpunkte = 6;
	$scope.isErreicht = true;

	var firstVisit = localStorage.getItem('firstVisit');
	
		
	$scope.showActionsheet = function() {
    
	    $ionicActionSheet.show({
	      titleText: 'ActionSheet Example',
	      buttons: [
	        { text: '<i class="icon ion-share" ui-sref="notenrechner2()"></i> Share' },
	        { text: '<i class="icon ion-arrow-move"></i> Move' },
	      ],
	      destructiveText: 'Delete',
	      cancelText: 'Cancel',
	      cancel: function() {
	        console.log('CANCELLED');
	      },
	      buttonClicked: function(index) {
	        console.log('BUTTON CLICKED', index);
			if (index==0) {
				// ui-sref="notenrechner2()"
			}
	        return true;
	      },
	      destructiveButtonClicked: function() {
	        console.log('DESTRUCT');
	        return true;
	      }
	    });
	};
	
	
	$scope.showHowto = function() {
	   var alertPopup = $ionicPopup.alert({
	     title: 'Notenberechnung verstehen',
	     template: 'Öffnen Sie das Sidemenü und lesen Sie die <span style="font-weight : bold;">Brechnungshinweise</span>, um zu verstehen, wie der Notenrechner die Noten berechnet'
	   });
	
	   alertPopup.then(function(res) {
	     console.log('Thank you for not eating my delicious ice cream cone');
	   });
   };
	
	$scope.showWelcome = function() {
	   var alertPopup = $ionicPopup.alert({
	     title: 'Willkommen beim Notenrechner!',
	     template: 'Tappen Sie auf <span style="font-weight : bold"> "Beste Note bei" </span>um die Berechnungsgrundlage einzugeben und auf <span style="font-weight : bold"> "Erreichte Punkte"  </span> um die erreichten Punkte einzugeben.'
	   });
	
	   alertPopup.then(function(res) {	     
		if(firstRun==0) {
			$scope.showHowto();		
		}		 
	   });
   	};
	
	if(firstRun==0) {
		$scope.showWelcome();		
	}
	
	
		
		
		
	
	 // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
	  }).then(function(modal) { $scope.modal = modal; });

	$scope.loadNewFilter = function (){
	    $scope.filter = [1,2,3];
	    $scope.$apply();
	}

	$scope.$on('$ionicView.enter', function(){
  	// Anything you can think of
		$rootScope.istNotenrechner = true;
		//location.reload();
	});

  if (!firstVisit) {
		// Lade default-Wert
		console.log("Erster Start, lade Default-Werte!");
		Data.loadDefault();
		Data.setFirstRun(heute);
		Data.setFirstVisit(heute);
	}
	
	// Daten laden
	$scope.Data.records = Data.all();
		
}])

   
.controller('berechnungshinweiseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tourCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	
	$scope.Data = Data;
	$scope.Tutorial = Data.tutorial();
	
	$scope.options = {
  		loop: true,
  		effect: 'fade',
  		speed: 500,
	}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
});




}])

   
.controller('notenpunkteSchlSselCtrl', ['$scope', '$rootScope', '$stateParams',  '$ionicPopup', 'Data',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $ionicPopup, Data ) {
	$scope.Data = Data;
	$rootScope.istNotenrechner = false;
	// Falls der erste Start, schreibe neuen Wert
	var firstVisit = localStorage.getItem('firstVisit');
	if (!firstVisit) {
    // $location.url('/tour');
		var now = new Date();
		window.localStorage.setItem('firstVisit','Um: ' + now);
  	}
	var isPro = localStorage.getItem('isPro');
	
	
	
	
	$scope.setDefault = function(kurs) {
		window.localStorage.setItem('firstVisit','');
		$scope.Data.records =[
					 {
      						 "Note" : "ungenügend",
      						 "Prozent" : "10",
      						 "Punkte" : "0",
							 "Tendenz" : "6"
      						},{
      							"Note" : "mangelhaft",
      							"Prozent" : "11",
      							"Punkte" : "1",
								"Tendenz" : "5-"
      						},{
      							"Note" : "mangelhaft",
      							"Prozent" : "19",
      							"Punkte" : "2",
								"Tendenz" : "5"
      						},{
      							"Note" : "mangelhaft",
      							"Prozent" : "28",
      							"Punkte" : "3",
								"Tendenz" : "5+"
      						},{
      							"Note" : "ausreichend",
      							"Prozent" : "36",
      							"Punkte" : "4",
								"Tendenz" : "4-"
      						},{
      							"Note" : "ausreichend",
      							"Prozent" : "44",
      							"Punkte" : "5",
								"Tendenz" : "4"
      						},{
      							"Note" : "ausreichend",
      							"Prozent" : "50",
      							"Punkte" : "6",
								"Tendenz" : "4+"
      						},{
      							"Note" : "befriedigend",
      							"Prozent" : "54",
      							"Punkte" : "7",
								"Tendenz" : "3-"
      						},{
      							"Note" : "befriedigend",
      							"Prozent" : "60",
      							"Punkte" : "8",
								"Tendenz" : "3"
      						},{
      							"Note" : "befriedigend",
      							"Prozent" : "64",
      							"Punkte" : "9",
								"Tendenz" : "3+"
      						},{
      							"Note" : "gut",
      							"Prozent" : "70",
      							"Punkte" : "10",
								"Tendenz" : "2-"
      						},{
      							"Note" : "gut",
      							"Prozent" : "74",
      							"Punkte" : "11",
								"Tendenz" : "2"
      						},{
      							"Note" : "gut",
      							"Prozent" : "80",
      							"Punkte" : "12",
								"Tendenz" : "2+"
      						},{
      							"Note" : "sehr gut",
      							"Prozent" : "84",
      							"Punkte" : "13",
								"Tendenz" : "1-"
      						},{
      							"Note" : "sehr gut",
      							"Prozent" : "90",
      							"Punkte" : "14",
								"Tendenz" : "1"
      						},{
      							"Note" : "sehr gut",
      							"Prozent" : "94",
      							"Punkte" : "15",
								"Tendenz" : "1+"
      						}
				];
				Data.save($scope.Data.records);


	}
	

	$scope.$on('$ionicView.leave', function(){

				console.log("Saving Data in notenpunkteSchlSselCtrl ... ");
				Data.save($scope.Data.records);

	});
	
	$scope.buyPro = function() {
	   var alertPopup = $ionicPopup.alert({
	     title: 'Update to Pro-Version!',
	     template: 'Erwerben Sie die Pro-Version (0,99€), um diese Meldung nicht mehr zu sehen und um den Punkte-Notenschlüssel individuell ändern zu können!'
	   });
	
	   alertPopup.then(function(res) {
	     console.log('Thank you for not buying my bienchen app');
		 newStart=false;
	      
	   });
   };
   
   if (isPro=="true") {		
		$scope.notPro = false;
	}
	else {
		$scope.notPro = true;
		$scope.buyPro();
	}
	

	
}])

   
.controller('menuCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;

}])
 