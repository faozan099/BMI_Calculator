let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const hasil = document.getElementById("output");
  let height_status = false;
  let weight_status = false;

  if (isNaN(height) || height <= 0) {
    document.getElementById("h-error").innerHTML =
      "Please provide a valid height";
  } else {
    document.getElementById("h-error").innerHTML = "";
    height_status = true;
  }

  if (isNaN(weight) || weight <= 0) {
    document.getElementById("w-error").innerHTML =
      "Please provide a valid weight";
  } else {
    document.getElementById("w-error").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    let heightCm = Math.pow(height / 100, 2);
    let bmi = (weight / heightCm).toFixed(1);

    if (bmi < 18.6) {
      hasil.innerHTML = `Your BMI is <b>${bmi}</b>, which indicates <b>UNDER WEIGHT</b>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      hasil.innerHTML = `Your BMI is <b>${bmi}</b>, which indicates <b>NORMAL</b>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      hasil.innerHTML = `Your BMI is <b>${bmi}</b>, which indicates <b>OVERWEIGHT</b>`;
    } else {
      hasil.innerHTML = `Your BMI is <b>${bmi}</b>, which indicates <b>OBESITY</b>`;
    }
  } else {
    hasil.innerHTML = "";
  }
});

document.getElementById("w-error").style.color = "red";
document.getElementById("h-error").style.color = "red";
