var config = {
    apiKey: "AIzaSyC9JPVt0aiHlf_cyk5wqkmlJfw77H5L6sI",
    authDomain: "jm-coding.firebaseapp.com",
    databaseURL: "https://jm-coding.firebaseio.com",
    projectId: "jm-coding",
    storageBucket: "jm-coding.appspot.com",
    messagingSenderId: "356825613576"
  };
  firebase.initializeApp(config);
var database = firebase.database();

    
        $("#search-btn").on("click", function (event) {
        event.preventDefault();
      
     
      var employeeData =($("#name").val());
    
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