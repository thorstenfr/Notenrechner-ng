angular.module('app.filters', ['ionic'])

.filter('valueFilter', ['Data',function(Data) {
	return function(input) {
		switch(input) {
		case "0":  
			Data.muendlich = 3;
			  Data.schriftlich = 1;
			  break;
			
			  
		case "1":
			  Data.muendlich = 2;
			  Data.schriftlich = 1;
			   break;
			  
		case "2":
			  Data.muendlich = 1;
			  Data.schriftlich = 1;
			   break;
		case "3":
			  Data.muendlich = 1;
			  Data.schriftlich = 2;
			   break;
		case "4":
			  Data.muendlich = 1;
			  Data.schriftlich = 3;
			  break;
		case "5":
			  Data.muendlich = 1;
			  Data.schriftlich = 4;
			   break;
		}
	}
}])

.filter('viertelNoteFilter', function() {
	return function(input) {
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
			case "2.2":
				return "2-";
			case "2.3":
				return "2-";
			case "2.4":
				return "2-3";
			case "2.5":
				return "2-3";
			case "2.6":
				return "2-3";
			case "2.7":
				return "3+";
			case "2.8":
				return "3+";
			case "2.9":
				return "3";
			case "3.0":
				return "3";
			case "3.1":
				return "3";
			case "3.2":
				return "3-";
			case "3.3":
				return "3-";
			case "3.4":
				return "3-4";
			case "3.5":
				return "3-4";
			case "3.6":
				return "3-4";
			case "3.7":
				return "4+";
			case "3.8":
				return "4+";
			case "3.9":
				return "4";
			case "4.0":
				return "4";
			case "4.1":
				return "4";
			case "4.2":
				return "4-";
			case "4.3":
				return "4-";
			case "4.4":
				return "4-5";
			case "4.5":
				return "4-5";
			case "4.6":
				return "4-5";
			case "4.7":
				return "5+";
			case "4.8":
				return "5+";
			case "4.9":
				return "5";	
			case "5.0":
				return "5";
			case "5.1":
				return "5";
			case "5.2":
				return "5-";
			case "5.3":
				return "5-";
			case "5.4":
				return "5-6";
			case "5.5":
				return "5-6";
			case "5.6":
				return "5-6";
			case "5.7":
				return "6+";
			case "5.8":
				return "6+";
			case "5.9":
				return "6";		
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
	  for (i in Data.records) {
				 if (input >= parseFloat(Data.records[i].Prozent))   {
						if (parseFloat(Data.records[i].Punkte)>pkte) {
							pkte=parseFloat(Data.records[i].Punkte);
						}
					 }
					}
          return pkte;
 	}
}])
.filter("prozentFilterStateful", ['Data', function(Data) {

  function prozentFilterStateful(input) {

    var pct = 0.0;
    var note;
    var rnr;
	var tendenz;
    Data.activeRecord=0;

		for (var i in Data.records) {
					 if (input >= parseFloat(Data.records[i].Prozent))   {
						if (parseFloat(Data.records[i].Punkte)>pct) {
							pct=parseFloat(Data.records[i].Punkte);
								note=Data.records[i].Note;
								tendenz=Data.records[i].Tendenz;
									Data.activeRecord=i;

						}
					 }
					}
        // return pct + " Punkte (" + note + ")";
        return;
        
 	}

  prozentFilterStateful.$stateful = true;

  return prozentFilterStateful;
}]);
