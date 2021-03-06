angular.module('app.controllers', [])
  
.controller('notenrechnerCtrl', ['$scope', '$rootScope', '$stateParams', 'Data', '$ionicNavBarDelegate', '$ionicModal', '$timeout', '$ionicPopup','$ionicActionSheet', '$location',   // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, Data, Config, $ionicModal, $timeout, $ionicPopup,$ionicActionSheet, $ionicNavBarDelegate, $location) {
	// Data = DataStorage.all();
	var d = new Date();
    var now = d.getTime();
    var letzterKlick;
		
	
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
	Data.isErreicht = true;
	$scope.eingabe = false;

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
	$scope.nummerKlick = function(nummer) {
	var zeitspanne=2000;
	var jetzt=Date.now();
//	alert(Data.isErreicht);
	
	if (isNaN(letzterKlick)){
	//	alert(jetzt);
		letzterKlick=jetzt;
	}
	var diff=jetzt-letzterKlick;
	// alert(diff);
	if ((Data.intEingabe) && (diff>zeitspanne || diff==0)){
		if (Data.isErreicht) {
			Data.erreicht='';
			Data.erreicht=nummer;
		}
		else {
			Data.grundlage='';
			Data.grundlage=nummer;
		}
	}
	else {
		if (Data.isErreicht) {
		Data.erreicht=Data.erreicht+nummer;
			
		}
		else {
			Data.grundlage=Data.grundlage+nummer;
		}
		
		}
		letzterKlick=jetzt;
	}

	$scope.$on('$ionicView.enter', function(){
  	// Anything you can think of
		$rootScope.istNotenrechner = true;
		//location.reload();
	});

  if (!firstVisit) {
		// Lade default-Wert
		console.log("Erster Start, lade Default-Werte!");
		Data.setDefault();
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
		 Data.setDefault();
		 Data.save($scope.Data.records);
		 
		 // Daten laden
		 $scope.Data.records = Data.all();

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
.controller('punktelisteCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;
	$scope.Math = window.Math;

}])
.controller('menuCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;
	

}])
.controller('zeugnisrechnerCtrl', ['$scope', '$stateParams', 'Data', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
	$scope.Data = Data;
	Data.muendlich = 1;
	Data.schriftlich = 2;
	$scope.value = 3;
      $scope.min = 0;
      $scope.max = 5;
 
 // Hilfsfunktion für zufällige Ganzzahl     
      function getRandomInt(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min)) + min;
	}
      
    // A utility function for creating a new entry
    // 
    var erstelleNoteneintragSchriftlich = function(neueNote,neueGewichtung) {
		console.log("Neue Note: " + neueNote + " Gewicht: " + neueGewichtung);
        if (!neueNote || !neueGewichtung) {
            return;
        }

		if ($scope.schriftlich) {
	        $scope.schriftlich.push({
	            leistung : neueNote,
	            gewichtung : neueGewichtung
	        });
	    } 
	    else {
	    	
	    	$scope.schriftlich=[{leistung:neueNote,gewichtung:neueGewichtung}];
	    }
       };

	// Neuer schriftlicher Noteneintrag soll erstellt werden
	// Dazu ein Popup
	$scope.neuerNoteneintragSchriftlich = function() {
		erstelleNoteneintragSchriftlich(getRandomInt(1,7),getRandomInt(1,4));
			
	}
	  
	  
	  
	  var schriftl =[
      					 {
      						 Note : "3,5",
      						 Gewicht : "4"
      						},
						{
      							Note : "1,5",
								Gewicht : "1"
      						}
						]
	  
	  
	$scope.getTotal = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.schriftlich.length; i++){
		        var product = $scope.schriftlich[i];
		        total += (product.leistung * product.gewichtung);
		    }
		    return total;
	}
	

}])
 