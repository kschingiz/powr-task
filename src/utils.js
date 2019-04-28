export function generateId(length = 10) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const colors = ["orange", "black", "white", "yellow", "red", "blue", "green"];
export function getRandomColor() {
  const randomColor = colors[parseInt(Math.random() * colors.length)];

  return randomColor;
}
