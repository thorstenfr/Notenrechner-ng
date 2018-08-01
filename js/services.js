angular.module('app.services', [])

/*
.factory('Data', [function(){
	return { FirstName: true };
}])
*/
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
        loadDefault: function() {
          
        }
    }
}])


.service('BlankService', [function(){

}]);
