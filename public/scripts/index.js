const select = (element, second) => {
  const form1 = document.getElementsByClassName("form1");
  const form2 = document.getElementsByClassName("form2");
  element.classList.add("selected");
  document.getElementsByClassName(second)[0].classList.remove("selected");
  if (second == 2) {
    form2[0].classList.add("d-none");
    form1[0].classList.remove("d-none");
  } else {
    form1[0].classList.add("d-none");
    form2[0].classList.remove("d-none");
  }
};

const removeSpace = (event) => {
  event.target.value = event.target.value.replace(/\s/g, "");
};

const displayHTMLError = (element, error) => {
  element.style.borderColor = "red";
  const errorElement = document.createElement("label");
  errorElement.style.color = "red";
  errorElement.style.fontSize = "12px";
  errorElement.style.marginTop = "-21px";
  errorElement.innerText = error;
  element.parentNode.insertBefore(errorElement, element.nextSibling);
};

const submitForm = (event) => {
  event.preventDefault();
  const button = document.getElementsByTagName("button")[0];
  button.setAttribute("disabled", "true");
  button.style.color = "#777";
  button.style.backgroundColor = "#ddd";
  button.style.cursor = "not-allowed";
  const { target } = event;
  const { method, action } = target;
  const form = new FormData(target);

  fetch(action, {
    method,
    body: form,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      button.setAttribute("disabled", "false");
      button.style.color = "white";
      button.style.backgroundColor = "#2a5bd7";
      button.style.cursor = "pointer";
      if (data.status == "error") {
        displayHTMLError(target[data.field], data.message);
      } else {
        const link = document.getElementById("link");
        const date = document.getElementById("date");
        link.setAttribute("href", "/" + data.slug);
        link.innerText = window.location.hostname + "/" + data.slug;
        date.innerText = data.date;
        document.getElementById("content").style.display = "none";
        document.getElementById("success").style.display = "block";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
