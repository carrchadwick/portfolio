$.ajax({
    "url":"https://www.kimonolabs.com/api/5x3lmvk0?apikey=xkaBYYcNOQSMmsT5PvV4c4rhJz7wLqb1",
    "crossDomain":true,
    "dataType":"jsonp",
    //Make a call to the Kimono API following the "url" 
    
    
    'success': function(response){ 
    // If the call request was successful and the data was retrieved, this function will create a list displaying the data
         
        
    var collection = response.results.collection1;
    for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 
        
        $(".cnn").append(collection[1].cnn.text );
        $(".cnn1").append(collection[3].cnn.text );
        $(".cnn2").append(collection[4].cnn.text );
        $(".cnn3").append(collection[5].cnn.text );
        $(".cnn4").append(collection[6].cnn.text );
        $(".cnn5").append(collection[7].cnn.text );
        $(".cnn6").append(collection[8].cnn.text );
        $(".cnn7").append(collection[9].cnn.text );
        $(".cnn8").append(collection[10].cnn.text );
      

        // adds the text and the links from the first property into the list
      }
  }
 
  })
