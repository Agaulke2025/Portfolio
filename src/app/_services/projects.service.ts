import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Website Portfolio", pictures: ["../../assets/Portfolio1.png","../../assets/Portfolio2.png"], projectLink: "//github.com/Agaulke2025/Portfolio.git", summary: "Project that includes information like projects, my resume, and contact information", description: "I tackled this project in order to prove my understanding of frontend development specifically with Angular. This project greatly improved my skills with typescript and overarching concepts within the Angular and Bootstrap frameworks", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.HTML, Tag.CSS]},
    {id: 1, name: "Database System Project", pictures: [], projectLink: "", summary: "MySQL database project for a logistics company", description: "This project was part of an Intro to Databases course in which we developed a functioning MySQL database with a Java interface", tags: [Tag.MYSQL, Tag.JAVA]},
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }
  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;
      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) === false){
          foundAll = false;
        }
      });
      if (foundAll){
        filteredProjects.push(project);

      }
    });
    return filteredProjects;
  }
  
  getProject(id: number) : Project {
    let project = this.projects.find(p => p.id === id);

    if (project === undefined){
      throw new Error("Project not found");
    }

    return project;
  }
}
