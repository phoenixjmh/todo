const saveWork = (pm) => {
  localStorage.setItem("packageManager", JSON.stringify(pm));
};
export default saveWork;
