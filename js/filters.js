angular.module('app.filters', ['ionic'])


.filter('viertelNoteFilter', function() {
	return function(input) {
		console.log("Input: " + input);
		switch(input) {
			case "1.0":
				return "1";
			case "1.1":
				return "1";
			case "1.2":
				return "1-";
			case "1.3":
				return "1-";
			case "1.4":
				return "1-2";
			case "1.5":
				return "1-2";
			case "1.6":
				return "1-2";
			case "1.7":
				return "2+";
			case "1.8":
				return "2+";
			case "1.9":
				return "2";
			case "2.0":
				return "2";
			case "2.1":
				return "2";
			case "2.1":
				return "2";
			case "2.2":
				return "2-";
			case "2.3":
				return "2-";

			default:
				return "6";
		}

	}

})

.filter('prozentFilter', ['Data', function(Data){

  return function(input) {
    var x = {11.1:1,18.8:2,27.7:3,35.5:4,44.4:5,50.0:6,54.4:7,60.0:8,64.4:9,70.0:10,74.4:11,80.0:12,
					         84.4:13,90.0:14,94.4:15};
    var pkte = 0.0;
		console.log("prozentFilter: " + Data.records);
    for (i in Data.records) {
			console.log("Neuer Höchstwert: ");
					 if (input >= parseFloat(Data.records[i].Prozent))   {
						if (parseFloat(Data.records[i].Punkte)>pkte) {
							console.log("Neuer Höchstwert: " + Data.records[i].Punkte + " |pkte: " + pkte)
							pkte=parseFloat(Data.records[i].Punkte);
						}
					 }
					}
          return pkte;
 	}
}])
