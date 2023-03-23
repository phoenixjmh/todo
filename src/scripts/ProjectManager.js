export default class ProjectManager {
  projects = [];
  addProj(project) {
    this.projects.push(project);
  }
  getAll() {
    return this.projects;
  }
}
