import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  projects = {} as Project[];
  typescript = false;
  angular = false;
  java = false;
  mySql = false;
  bootstrap = false;
  html = false;
  css = false;
  

  isCollapsed = true;
  filtering = false;
  constructor(private titleService: Title, private projectService: ProjectsService) { 
    this.titleService.setTitle("Alexey Gaulke - Portfolio");
}
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();

  }

  Filter(){
    let filterTags = [] as Tag[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.mySql){
      filterTags.push(Tag.MYSQL);
    }
    if(this.bootstrap){
      filterTags.push(Tag.BOOTSTRAP);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if (this.typescript || this.angular){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }
    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }
  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.java = false;
    this.mySql = false;
    this.bootstrap = false;
    this.html = false;
    this.css = false;
    this.projects = this.projectService.getProjects();
    this.filtering = false;
  }
}
