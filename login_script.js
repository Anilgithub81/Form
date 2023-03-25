let form = document.getElementById("form");
let displayButton = document.getElementById("display");
let displayDetails = document.getElementById("displayDetails");
// let resetButton = document.getElementById("reset");

// document.getElementById("reset").addEventListener("click",function(){
//    localStorage.clear();
 
//  });

form.addEventListener("submit", (e) => {
  console.log("data");
  e.preventDefault();

  function getData() {
    let user = JSON.parse(localStorage.getItem("result"));
    return user;
  }

  let First_Name = document.getElementById("fname").value;
  let Last_Name = document.getElementById("lname").value;
  let E_mail = document.getElementById("email").value;
  let Contact_Number = document.getElementById("contactnumber").value;
  let Date_Of_Birth = document.getElementById("d_o_b").value;
  var Gender = document.querySelector('input[type="radio"]:checked').value;
  let Languages = getCheckedBoxes();
  let Qualification = document.getElementById("degree").value;

  function getCheckedBoxes() {
    var checkboxes = document.getElementsByName("language");
    var checkboxesChecked = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
      }
    }
    return checkboxesChecked;
  }

  let obj = {
    First_Name,
    Last_Name,
    E_mail,
    Contact_Number,
    Date_Of_Birth,
    Gender,
    Languages,
    Qualification,
  };

  console.log("danish", obj);

  const data = getData() ?? [];
  let newDataArray = [...data];
  newDataArray.push(obj);
  console.log(newDataArray);
  localStorage.setItem("result", JSON.stringify(newDataArray));
  console.log("end file");
});

function addData() {
  const data = getData();
  let newDataArray = [...data];
  newDataArray.push(obj);
  localStorage.setItem("result", JSON.stringify(newDataArray));
}

displayButton.addEventListener("click", display);

function display() {
  var data = JSON.parse(localStorage.getItem("result"));
  

    data.map((element, idx) => {
      // displayDetails.innerHTML += (idx + 1 ) + "  --  User <br />";
      displayDetails.innerHTML +=
        "<b><h1>******************** <u>User -- " +
        (idx + 1) +
        "</u> *********************</h1></b>";

    for (let val in element) {
      displayDetails.innerHTML +=
        "<h2>" + val + "  :- &nbsp;   " + element[val] + "</h2>";
    }
  });
}
