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

    name = $("#name-input").val().trim();

    dataRef.ref().push({
      name: name,
      dataAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
