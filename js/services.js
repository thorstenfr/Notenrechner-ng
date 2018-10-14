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
						Note : '',
						Prozent : '',
						Punkte : ''
					}
				},
				tutorial: function() {
					return {
						grundlage : 'Beste Note bei',
						erreicht : 'Erreicht'
					}
				},
        loadDefault: function() {
          var data =[
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
      				window.localStorage['data'] = angular.toJson(data);

        }
    }
}])


.service('BlankService', [function(){

}]);