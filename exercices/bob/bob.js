//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let Alphabet = /[A-Z]/;
  let newMessage = message.trim();

  if (newMessage.endsWith("?")) {
    if (newMessage == newMessage.toUpperCase() && Alphabet.test(newMessage)) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Sure.";
    }
  } else if (
    newMessage == newMessage.toUpperCase() &&
    Alphabet.test(newMessage)
  ) {
    return "Whoa, chill out!";
  }
  if (newMessage === undefined || newMessage === null || newMessage === "") {
    return "Fine. Be that way!";
  } else return "Whatever.";
};
