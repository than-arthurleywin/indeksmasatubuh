const kg = document.querySelector(".container .kg");
const cm = document.querySelector(".container .cm");
const kirim = document.querySelector(".container .kirim");
const result = document.querySelector(".container .result");

function hasil(bb, tb) {
  let tinggi = tb / 100;
  let m = tinggi ** 2;
  let p = bb / m;
  let k = p.toFixed(1);

  if (k > 27.0) {
    result.style.color = "red";
    result.innerHTML = "Obesitas";
    return;
  } else if (k > 25.0) {
    result.style.color = "yellow";
    result.innerHTML = "Gemuk";
    return;
  } else if (k > 18.4) {
    result.style.color = "green";
    result.innerHTML = "Normal";
    return;
  } else if (k > 17.0) {
    result.style.color = "yellow";
    result.innerHTML = "kurus";
    return;
  } else {
    result.style.color = "red";
    result.innerHTML = "Kurang gizi";
    return;
  }
}
kirim.addEventListener("click", function () {
  hasil(kg.value, cm.value);
});
