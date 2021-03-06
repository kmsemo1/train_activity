var config = {
    apiKey: "AIzaSyAF86Bjo94e45Kyuyeyve-VesbVzMHe_3E",
    authDomain: "trainhw-af312.firebaseapp.com",
    databaseURL: "https://trainhw-af312.firebaseio.com",
    projectId: "trainhw-af312",
    storageBucket: "",
    messagingSenderId: "740282333523"
  };
firebase.initializeApp(config);
var database = firebase.database();


$("#search-btn").on("click", function (event) {
    event.preventDefault();


    var trainName = ($("#name").val());

    var trainTime = ($("#time").val());

    var frequency = ($("#freq").val());




    database.ref().push({
        name: trainName,
        time: trainTime,
        freq: frequency,
        timeAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

database.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().freq);
    console.log(childSnapshot.val().timeAdded);

        // tfrequency from input user
        var tFrequency = $("#frequency").val();
        
            // from timeAdded
            var firstTime = $("#number").val();
            
        
            // First Time (pushed back 1 year to make sure it comes before current time)
            var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
            console.log(firstTimeConverted);
        
            // Current Time
            var currentTime = moment();
            console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        
            // Difference between the times
            var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
            console.log("DIFFERENCE IN TIME: " + diffTime);
        
            // Time apart (remainder)
            var tRemainder = diffTime % tFrequency;
            console.log(tRemainder);
        
            // Minute Until Train
            var tMinutesTillTrain = tFrequency - tRemainder;
            console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
        
            // Next Train
            var nextTrain = moment().add(tMinutesTillTrain, "minutes");
            console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var row = $("<tr>");
    row.append("<td id='employee_'> " + childSnapshot.val().name +
        " </td><td id = 'role_'> " + childSnapshot.val().time +
        " </td><td id = 'startYear_'> " + childSnapshot.val().freq +
        " </td><td id = 'dateAdded_'> " + childSnapshot.val().timeAdded + " </td>");
    $("#tableBody").append(row);
});