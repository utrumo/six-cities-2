export const transformEmailError = (error) => {
  const message = error.match(/.*\[".*"\s(.*)\]/)[1];
  return message[0].toUpperCase() + message.slice(1);
};
