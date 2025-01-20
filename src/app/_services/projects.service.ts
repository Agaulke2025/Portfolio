import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Website Portfolio", pictures: ["../../assets/Portfolio/Portfolio1.png","../../assets/Portfolio/Portfolio2.png"], projectLink: "//github.com/Agaulke2025/Portfolio.git", summary: "Project that includes information like projects, my resume, and contact information.", description: "I tackled this project in order to prove my understanding of frontend development specifically with Angular. This project greatly improved my skills with typescript and overarching concepts within the Angular and Bootstrap frameworks. Additionally, I utilitzed AWS s3 to deploy and maintain this website.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.HTML, Tag.CSS]},
    {id: 1, name: "Database System Project", pictures: [], projectLink: "", summary: "MySQL database project for a logistics company.", description: "This project was part of an Intro to Databases course in which we developed a functioning MySQL database with a Java interface.", tags: [Tag.MYSQL, Tag.JAVA]},
    {id: 2, name: "BuckeyeSwap", pictures: ["../../assets/BuckeyeSwap/1.png","../../assets/BuckeyeSwap/2.png","../../assets/BuckeyeSwap/3.png"], projectLink: "", summary: "Site that allows OSU students to purchase sports tickets.", description: "This project was part of an Web Development course in which we developed a Ruby on Rails site with a MySQL database.", tags: [Tag.RUBY, Tag.MYSQL, Tag.HTML, Tag.CSS]},
    {id: 2, name: "Help Find A Doctor", pictures: [], projectLink: "", summary: "App that connects patients with providers based on a symptom search.", description: "This project was part of my capstone course in which we improved pretrained huggingface models through a systematic test suite. The experience improved my understanding of Natural Language Models and developing python scripts.", tags: [Tag.PYTHON, Tag.HUGGINGFACE]},
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
