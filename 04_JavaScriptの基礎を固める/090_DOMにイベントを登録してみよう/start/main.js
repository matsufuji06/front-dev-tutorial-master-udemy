const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

const hello = function() {
  // alert("hello");
  // this.style.color = "red";
  h1.style.color = "red";
}

btn.addEventListener("click", hello);
h1.addEventListener("click", hello);