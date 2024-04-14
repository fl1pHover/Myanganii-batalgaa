export const validateString = (value, name) => {
  if (value.length >= 5) {
    return {
      message: "",
      validated: true,
    };
  } else {
    return {
      message: name + " урт 5-с олон байна",
      validated: false,
    };
  }
};


