const removeElement=(object, id)=> {
    let array = object.getAll();
    for (let i in array) {
      if (array[i].id == id) {
        array.splice(i,1);
      }
    }
  }
  export default removeElement;