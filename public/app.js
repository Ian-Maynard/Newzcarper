/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

// To do - add css classes for all the sources 

$.getJSON("/articles", function(data) {
  // Grab the articles as a json
    // For each one
  
    for (var i = 0; i < data.length; i++) {
              //Format
              switch(data[i].title.substring(0,3))
                    {       
                        case "REU":
                              arformat="<div class='reu'>";
                              break;
  
                        case "UPI":
                              arformat="<div class='upi'>";
                              break;

                        case "BLM":
                              arformat="<div class='blm'>";
                              break;
  
                        case "TME":
                                arformat="<div class='tme'>";
                                break;

                        case "DWE":
                                  arformat="<div class='dwe'>";
                                  break;

                        default:
                              arformat="<div class='cards'>";
                    }
  
      // Format the Link
  
      $("#cardHolder").
      append(arformat+"<p data-id='" + data[i]._id+"'>" 
      + data[i].title + "<br>" 
      + data[i].link + "</p> </div>");
    }
  });
              
  // Whenever someone clicks a p tag
      $(document).on("click", "p", function() 
          {      
              $("#notes").empty();
              var thisId = $(this).attr("data-id");
  
              $.ajax({ method: "GET", url: "/articles/" + thisId }).done(function(data) {
                        $("#notes").append("<h2>" + data.title + "</h2>");
                        $("#notes").append("<input id='titleinput' name='title' >");
                        $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
                        $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
        // If there's a note in the article
        if (data.note) { 
                $("#titleinput").val(data.note.title);
                $("#bodyinput").val(data.note.body);
              }   
            });
        });
  

        // If someone cicks on a link 

          $(document).on("click", "#savenote", function() {
            var thisId = $(this).attr("data-id");
  
          $.ajax({
            method: "POST",
            url: "/articles/" + thisId,
            data: {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
      }
    })
      // With that done
      .done(function(data,title) {
        console.log(data);
        $("#notes").empty();
      });
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });
