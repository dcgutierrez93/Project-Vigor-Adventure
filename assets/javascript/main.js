// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPDq9zGMsYIYATgUKuilErUgrDFOCSPXw",
    authDomain: "vigoradventure.firebaseapp.com",
    databaseURL: "https://vigoradventure.firebaseio.com",
    projectId: "vigoradventure",
    storageBucket: "vigoradventure.appspot.com",
    messagingSenderId: "894124047169"
  };

  firebase.initializeApp(config);

  // Reference database
  var dataRef = firebase.database();

  // Initial Values:
  var name = "";

  $(".enjoy-css").on("click", function(event) {
    event.preventDefault();
  
    name = $("#add-user").val().trim();

    dataRef.ref().push({
      name: name,
      dataAdded: firebase.database.ServerValue.TIMESTAMP
    });
      location.href = "info.html";
    // Changes window to info.html
  });

  // on click button submit
  $(".info-css").on("click", function(event){
    // Switches the window to result.html
    location.href = "result.html";
  });
