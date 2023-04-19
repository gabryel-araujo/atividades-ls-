function calculadoraDeIMC() {
  const altura = Number(document.getElementById("altura").value);
  const peso = Number(document.getElementById("peso").value);
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const resultado = document.getElementById("imc");
  let mensagem;

  console.log(sexo);
  console.log(peso);
  console.log(altura);
  var BMI = peso / (altura * altura);
  console.log(BMI);

  if (sexo == "masculino") {
    if (BMI < 20.7) {
      mensagem = "Abaixo do Peso";
      resultado.className =
        "form-control form-control-lg border border-warning bg-warning text-white";
    } else if (BMI > 20.7 && BMI < 26.4) {
      mensagem = "Peso Normal";
      resultado.className =
        "form-control form-control-lg border border-sucess bg-success text-white";
    } else if (BMI > 26.4 && BMI < 27.8) {
      mensagem = "Marginalmente Acima do Peso";
      resultado.className =
        "form-control form-control-lg border border-warning bg-warning text-white";
    } else if (BMI > 27.8 && BMI < 31.1) {
      mensagem = "Acima do Peso Ideal";
      resultado.className =
        "form-control form-control-lg border border-warning bg-warning text-white";
    } else {
      mensagem = "Obeso";
      resultado.className =
        "form-control form-control-lg border border-danger bg-danger text-white";
    }
  }

  if (sexo == "feminino") {
    if (BMI <= 19.1) {
      mensagem = "Abaixo do Peso";
      resultado.className =
        "form-control form-control-lg border border-warning bg-warning text-white";
    } else if (BMI > 19.1 && BMI < 25.8) {
      mensagem = "Peso Normal";
      resultado.className =
        "form-control form-control-lg border border-sucess bg-success text-white";
    } else if (BMI > 25.8 && BMI < 27.3) {
      mensagem = "Marginalmente Acima do Peso";
      resultado.className =
        "form-control form-control-lg border border-warning bg-warning text-white";
    } else if (BMI > 27.3 && BMI < 32.3) {
      mensagem = "Marginalmente Acima do Peso";
      resultado.className =
        "form-control form-control-lg border border-warning bg-warning text-white";
    } else {
      mensagem = "Obeso";
      resultado.className =
        "form-control form-control-lg border border-danger bg-danger text-white";
    }
  }

  resultado.value = mensagem;
}

document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    calculadoraDeIMC();
  }
});

document.addEventListener("keydown", function (e) {
  const resultado = document.getElementById("imc");
  if (e.key == "Escape") {
    altura.value = "";
    peso.value = "";
    resultado.className = "form-control form-control-lg";
    resultado.value = "";
  }
});
