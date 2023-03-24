

const storeObject=(object)=>{
    localStorage.setItem(`${object}`,JSON.stringify(object));
    console.log(`${object}`);
}
export default storeObject;