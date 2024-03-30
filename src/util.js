export const shuffler = (obj = {}) => {
  const arr = [];
  for (const key in obj) {
    arr.push(key);
    arr.push(obj[key]);
  }

  for (let i = 0; i < arr.length; i++) {
    const j = Math.round(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
