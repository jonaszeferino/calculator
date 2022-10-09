function insertData(number) {
  let num = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = num + number;
}
function clean() {
  document.getElementById("result").innerHTML = "";
}
function eraser() {
  let results = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = results.substring(
    0,
    results.length - 1
  );
}
function calculate() {
  let result = document.getElementById("result").innerHTML;
  if (result != null) {
    document.getElementById("result").innerHTML = eval(result);
  }
}
