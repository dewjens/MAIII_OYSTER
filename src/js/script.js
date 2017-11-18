(() => {
  const $form = document.getElementsByClassName(`newyearform`)[0];
  const $name = document.getElementsByName(`voornaam`)[0];
  const $surname = document.getElementsByName(`achternaam`)[0];
  const $city = document.getElementsByName(`email`)[0];
  const $phone = document.getElementsByName(`gsm`)[0];
  const $street = document.getElementsByName(`straat`)[0];
  const $number = document.getElementsByName(`huisnummer`)[0];
  const $email = document.getElementsByName(`stad`)[0];
  const $postal = document.getElementsByName(`postcode`)[0];
  const $total = document.getElementsByName(`aantal`)[0];


  const submitHandler = e => {
    if ($form.checkValidity()) {
      e.preventDefault();
      validateField($name);
      validateField($surname);
      validateField($city);
      validateField($postal);
      validateField($street);
      validateField($number);
      validateField($email);
      validateField($phone);
      validateField($total);
    }
    if ($form.checkValidity()) {
      return false;
    }
  };
  const onBlur = e => {
    validateField(e.currentTarget);
    if (!e.currentTarget.dataset.HasKeyupListener) {
      e.currentTarget.addEventListener(`blur`, onBlur);
    }
  };
  const validateField = $input => {
    const $error = $input.parentNode.querySelector(`.error`);
    const name = $input.getAttribute(`name`);
    if ($input.value === ``) {
      $input.classList.add(`invalid`);
      $error.innerHTML = `${name} ontbreekt`;
    } else if ($input.validity.typeMismatch) {
      $input.classList.add(`invalid`);
      $error.innerHTML = `${name} is niet geldig`;
    } else {
      $input.classList.remove(`invalid`);
      $error.innerHTML = ``;
    }
    if (name === `number`) {
      const regex = /^[0-9]+$/;
      if ($input.validity.valueMissing) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} ontbreekt`;
      } else if (!$input.value.match(regex)) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} moet een nummer zijn`;
      } else {
        $input.classList.remove(`invalid`);
        $error.innerHTML = ``;
      }
    }
    if (name === `postal`) {
      const regex = /^[0-9]+$/;
      if ($input.validity.valueMissing) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} ontbreekt`;
      } else if (!$input.value.match(regex)) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} moet een nummer zijn`;
      } else {
        $input.classList.remove(`invalid`);
        $error.innerHTML = ``;
      }
    }
    if (name === `gsm`) {
      const regex = /^[0-9]+$/;
      if ($input.validity.valueMissing) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} ontbreekt`;
      } else if (!$input.value.match(regex)) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} moet een nummer zijn`;
      } else {
        $input.classList.remove(`invalid`);
        $error.innerHTML = ``;
      }
    }
    if (name === `aantal`) {
      const regex = /^[0-9]+$/;
      if ($input.validity.valueMissing) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} ontbreekt`;
      } else if (!$input.value.match(regex)) {
        $input.classList.add(`invalid`);
        $error.innerHTML = `${name} moet een nummer zijn`;
      } else {
        $input.classList.remove(`invalid`);
        $error.innerHTML = ``;
      }
    }
  };
  const onType = e => {
    validateField(e.currentTarget);
  };

  const init = () => {
    if (document.getElementsByClassName(`newyearform`)[0]) {
      $form.noValidate = true;
      $form.addEventListener(`submit`, submitHandler);
      $name.addEventListener(`blur`, onBlur);
      $surname.addEventListener(`blur`, onBlur);
      $city.addEventListener(`blur`, onBlur);
      $postal.addEventListener(`blur`, onBlur);
      $street.addEventListener(`blur`, onBlur);
      $number.addEventListener(`blur`, onBlur);
      $email.addEventListener(`blur`, onBlur);
      $phone.addEventListener(`blur`, onBlur);
      $total.addEventListener(`blur`, onBlur);

      $name.addEventListener(`keyup`, onType);
      $surname.addEventListener(`keyup`, onType);
      $city.addEventListener(`keyup`, onType);
      $postal.addEventListener(`keyup`, onType);
      $street.addEventListener(`keyup`, onType);
      $number.addEventListener(`keyup`, onType);
      $email.addEventListener(`keyup`, onType);
      $phone.addEventListener(`keyup`, onType);
      $total.addEventListener(`keyup`, onType);
    }
  };

  init();
})();
