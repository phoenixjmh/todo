const removeElement=(object, id)=> {
    let array = object.getAll();
    for (let i in array) {
      // if array item matches the id we're trying to remove
      if (array[i].id == id) {
        array.splice(i,1);
        // console.log(
        //   "ID match, Time to add remove function",
        //   "Object matched was named",
        //   array[i].title
        // );
  
        //Removes item with specified id from the Object's array.
        //This does not effect the DOM, nor do i want it to. That will be handled in a seperate module, perhaps called from here, supplied with the id.
        // removeDomElement(id).   However, this method seems redundant, because the Element is already being referenced by the click.
  
        //just a quick note. the button will be clicked, which will contain an id that was assigned to that Todo DOM element. The  id will then be passed to this function, that will remove the correspondingArray element. Finally, that button will remove it's parent, the Todo DOM element.
      }
    }
  }
  export default removeElement;