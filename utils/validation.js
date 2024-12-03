export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length > 255) {
    console.log("Почта содержит не более 255 символов");
    return "Почта содержит не более 255 символов";
  } else if (!emailRegex.test(email)) {
    console.log("Введенная почта имеет неверный формат");
    return "Введенная почта имеет неверный формат";
  } else if (email !== email.toLowerCase()) {
    console.log("Почта должна содержать только строчные буквы");
    return "Почта должна содержать только строчные буквы";
  }
  return "";
};

export const validateUsername = (username) => {
  if (username.length > 32) {
    console.log("Логин содержит не более 32 символов");
    return "Логин содержит не более 32 символов";
  } else if (username.length < 5) {
    console.log("Логин содержит не менее 5 символов");
    return "Логин содержит не менее 5 символов";
  } else if (username !== username.toLowerCase()) {
    console.log("Логин должен содержать только строчные буквы");
    return "Логин должен содержать только строчные буквы";
  }
  return "";
};

const parseDate = (dateTimeString) => {
  const [datePart, timePart] = dateTimeString.split(" ");
  if (!datePart || !timePart) return NaN;

  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  if (
    !day ||
    !month ||
    !year ||
    hours === undefined ||
    minutes === undefined ||
    day > 31 ||
    month > 12 ||
    hours > 23 ||
    minutes > 59
  ) {
    return NaN;
  }

  return new Date(year, month - 1, day, hours, minutes);
};

export const validateDates = (startDateTime, endDateTime) => {
  const currentDate = new Date();
  const startDate = parseDate(startDateTime);
  const endDate = parseDate(endDateTime);

  const errors = { startDateError: "", endDateError: "" };

  if (isNaN(startDate)) {
    errors.startDateError = "Неверный формат даты начала";
  } else if (startDate <= currentDate) {
    errors.startDateError = "Дата начала должна быть позже текущей";
  }

  if (isNaN(endDate)) {
    errors.endDateError = "Неверный формат даты окончания";
  } else if (endDate <= startDate) {
    errors.endDateError = "Дата окончания должна быть позже даты начала";
  }

  return errors;
};

export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (password.length > 32) {
    console.log("Пароль содержит не более 32 символов");
    return "Пароль содержит не более 32 символов";
  } else if (password.length < 6) {
    console.log("Пароль содержит не менее 6 символов");
    return "Пароль содержит не менее 6 символов";
  } else if (!passwordRegex.test(password)) {
    console.log("Пароль должен содержать минимум одну букву и одну цифру");
    return "Пароль должен содержать минимум одну букву и одну цифру";
  }
  return "";
};
