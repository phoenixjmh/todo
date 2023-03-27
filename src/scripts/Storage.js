

const storeObject=(object)=>{
    localStorage.setItem(`${object}`,JSON.stringify(object));
}
export default storeObject;