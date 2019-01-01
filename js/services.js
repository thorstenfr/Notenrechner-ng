angular.module('app.services', [])

.factory('Data', [function(){
    return {
    	all: function() {
            var dataString = window.localStorage['data'];
            if(dataString) {
                return angular.fromJson(dataString);

            }
          return [];
        },
        save: function(data) {

            window.localStorage['data'] = angular.toJson(data);
        },
				newRecord: function() {
					return {
						grundlage : '',
						erreicht : '',
						notenpunkte : '',
						datum : ''
					}
				},
				tutorial: function() {
					return {
						grundlage : 'Beste Note bei',
						erreicht : 'Erreicht'
					}
				},
		getFirstRun: function() {
            return window.localStorage['nrFirstRun'] || '0';
            
        },
		setFirstRun: function(wann) {
            window.localStorage['nrFirstRun'] = wann;
            
        },
		setFirstVisit: function(wann) {
            window.localStorage['firstVisit'] = wann;
            
        },
		getRuns: function() {
            return window.localStorage['nrRuns'] || '0';
            
        },
		setRuns: function(anzahl) {
            window.localStorage['nrRuns'] = anzahl;
            
        },
		
        setDefault: function() {
			console.log("services: setze Default");
          var data =[
      					 {
      						 "Note" : "ungenügend (6)",
      						 "Prozent" : "10",
      						 "Punkte" : "0",
							 "Tendenz" : "6"
      						},{
      							"Note" : "mangelhaft (5-)",
      							"Prozent" : "11",
      							"Punkte" : "1",
								"Tendenz" : "5-"
      						},{
      							"Note" : "mangelhaft (5)",
      							"Prozent" : "19",
      							"Punkte" : "2",
								"Tendenz" : "5"
      						},{
      							"Note" : "mangelhaft (5+)",
      							"Prozent" : "28",
      							"Punkte" : "3",
								"Tendenz" : "5+"
      						},{
      							"Note" : "ausreichend (4-)",
      							"Prozent" : "36",
      							"Punkte" : "4",
								"Tendenz" : "4-"
      						},{
      							"Note" : "ausreichend (4)",
      							"Prozent" : "44",
      							"Punkte" : "5",
								"Tendenz" : "4"
      						},{
      							"Note" : "ausreichend (4+)",
      							"Prozent" : "50",
      							"Punkte" : "6",
								"Tendenz" : "4+"
      						},{
      							"Note" : "befriedigend (3-)",
      							"Prozent" : "54",
      							"Punkte" : "7",
								"Tendenz" : "3-"
      						},{
      							"Note" : "befriedigend (3)",
      							"Prozent" : "60",
      							"Punkte" : "8",
								"Tendenz" : "3"
      						},{
      							"Note" : "befriedigend (3+)",
      							"Prozent" : "64",
      							"Punkte" : "9",
								"Tendenz" : "3+"
      						},{
      							"Note" : "gut (2-)",
      							"Prozent" : "70",
      							"Punkte" : "10",
								"Tendenz" : "2-"
      						},{
      							"Note" : "gut (2)",
      							"Prozent" : "74",
      							"Punkte" : "11",
								"Tendenz" : "2"
      						},{
      							"Note" : "gut (2+)",
      							"Prozent" : "80",
      							"Punkte" : "12",
								"Tendenz" : "2+"
      						},{
      							"Note" : "sehr gut (1-)",
      							"Prozent" : "84",
      							"Punkte" : "13",
								"Tendenz" : "1-"
      						},{
      							"Note" : "sehr gut (1)",
      							"Prozent" : "90",
      							"Punkte" : "14",
								"Tendenz" : "1"
      						},{
      							"Note" : "sehr gut (1+)",
      							"Prozent" : "94",
      							"Punkte" : "15",
								"Tendenz" : "1+"
      						}
      				]
      				window.localStorage['data'] = angular.toJson(data);

        }
    }
}])


.service('BlankService', [function(){

}]);