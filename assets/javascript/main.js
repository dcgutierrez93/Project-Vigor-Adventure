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

  // Initial Values
  var name = "";

  // Capture Button Click.
  $(".button").on("click", function () {
    event.preventDefault();

    name = $("#add-user").val().trim();

    dataRef.ref().push({
      name: name,
      dataAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
  dataRef.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val().name);
  ), function(errorObject) {
    console.log("Error handled: " + errorObject.code);
  });
