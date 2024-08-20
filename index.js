const llaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const desencriptar = (text, keys) => {
  for (const [clave, valor] of Object.entries(keys)) {
    if (text.includes(valor)) {
      text = text.split(valor).join(clave);
    }
  }
  return text;
};

const encriptar = (text, keys) => {
  const arr = text.split("");
  let encript = "";
  arr.forEach((element) => {
    if (keys.hasOwnProperty(element)) {
      encript = encript + keys[element];
    } else {
      encript = encript + element;
    }
  });
  return encript;
};

const showText = (input) => {
  if (input != "") {
    return "none";
  } else {
    return "flex";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const buttonEncriptar = document.getElementById("encriptar");
  const buttonDesencriptar = document.getElementById("desencriptar");

  const input = document.getElementById("text");
  const resultado = document.getElementById("result");
  const msg = document.getElementById("msg-none");

  buttonEncriptar.addEventListener("click", function () {
    resultado.innerHTML = "";
    msg.style.display = showText(input.value);
    let texto = encriptar(input.value, llaves);
    resultado.append(texto);
  });

  buttonDesencriptar.addEventListener("click", function () {
    resultado.innerHTML = "";
    msg.style.display = showText(input.value);
    let texto = desencriptar(input.value, llaves);
    resultado.append(texto);
  });
});
