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


    var employeeData = ($("#name").val());

    var roleData = ($("#role").val());

    var startYearData = ($("#start-yr").val());




    database.ref().push({
        employee: employeeData,
        role: roleData,
        startYear: startYearData,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

database.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val().employee);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startYear);
    console.log(childSnapshot.val().dateAdded);

    var row = $("<tr>");
    row.append("<td id='employee_'> " + childSnapshot.val().employee +
        " </td><td id = 'role_'> " + childSnapshot.val().role +
        " </td><td id = 'startYear_'> " + childSnapshot.val().startYear +
        " </td><td id = 'dateAdded_'> " + childSnapshot.val().dateAdded + " </td>");
    $("#tableBody").append(row);
});