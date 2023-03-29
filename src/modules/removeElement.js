/* eslint-disable no-restricted-syntax */
const removeElement = (object, id) => {
  const array = object.getAll();
  for (const i in array) {
    if (array[i].id === id) {
      array.splice(i, 1);
    }
  }
};
export default removeElement;
