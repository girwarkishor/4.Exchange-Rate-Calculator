import "./scss/main.scss";

function calculate() {
  fetch(
    "https://v6.exchangerate-api.com/v6/4f5f732b607c1c21803eac93/latest/USD"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

calculate();
