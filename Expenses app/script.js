const textField = document.getElementById("nameBox");
const dateField = document.getElementById("dateBox");
const amountField = document.getElementById("amountBox");
const addButton = document.getElementById("addBtn");

const whereStore = document.getElementsByClassName("whereData");
const whenStore = document.getElementsByClassName("whenData");
const amountStore = document.getElementsByClassName("amountData");
const clearButton = document.getElementsByClassName("clearData");
const dataRow = document.getElementById("dataSection");
const theTable1 = document.getElementById("theTable");
// const xBtn = document.getElementsByClassName("delBtn");

addButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Where
  const whereColumn = document.createElement("td");
  whereColumn.innerText = textField.value;
  //   dataRow.appendChild(whereColumn);

  // When
  const whenColumn = document.createElement("td");
  whenColumn.innerText = dateField.value;
  //   dataRow.appendChild(whenColumn);
  //   console.log("wheninner", dateField.value);

  // Amount
  const amountColumn = document.createElement("td");
  amountColumn.innerText = `£${amountField.value}`;
  //   dataRow.appendChild(amountColumn);
  //   console.log(
  //     "amt column",
  //     amountColumn,
  //     "parsed",
  //     parseInt(amountField.value)
  //   );

  // Clear row
  const delColumn = document.createElement("button");
  delColumn.setAttribute("class", "delBtn");
  delColumn.innerText = "❌";

  // adds row
  if (
    dateField.value.length > 1 &&
    whereColumn.innerText.length >= 2 &&
    parseInt(amountField.value) > 0
  ) {
    const addsRow = document.createElement("tr");
    theTable1.appendChild(addsRow);
    theTable1.appendChild(whereColumn);
    theTable1.appendChild(whenColumn);
    theTable1.appendChild(amountColumn);
    theTable1.appendChild(delColumn);
  } else {
    alert("Please re-enter correct details!");
  }

  // deletes row
  delColumn.addEventListener("click", function () {
    theTable1.removeChild(whereColumn);
    theTable1.removeChild(whenColumn);
    theTable1.removeChild(amountColumn);
    theTable1.removeChild(delColumn);
  });
});

addButton.addEventListener("click", function () {
  textField.value = "";
  dateField.value = "";
  amountField.value = "";
});
