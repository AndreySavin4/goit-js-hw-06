const formRel = document.querySelector(".login-form");
const emailImpRel = formRel.querySelector('input[type="email"]');
const passwordImpRel = formRel.querySelector('input[type="password"]');

formRel.addEventListener("submit", (e) => {
  const EMAIL_VALUE = e.currentTarget.elements.email.value;
  const PASSWORD_VALUE = e.currentTarget.elements.password.value;
  const { email, password } = e.currentTarget.elements;
  e.preventDefault();

  if (EMAIL_VALUE.length <= 0 && PASSWORD_VALUE <= 0) {
    alert("Все поля должны быть заполнены!");
  }
  formRel.reset();
  console.log(`{email: ${EMAIL_VALUE}, password: ${PASSWORD_VALUE}}`);

  //   const formData = new FormData(e.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log(`${name}: ${value}`);
  //   });
});
