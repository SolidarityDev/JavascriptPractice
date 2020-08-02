const func  = function(my_string) {

    my_string ="shalomalekoum";
    var my_othstring ="shalomalekoum";
    var result = "";
    var start = "";
    var i = 0;
  
        if (my_string == my_othstring)
        {
            start = my_string[i].charAt(0).toUpperCase();
            result = start + my_string;
            console.log(result.slice(0,1) + result.slice(2, result.length));
        }
        else
          console.log("Aucune occurence mon rabin");
  }
          
  func();
     