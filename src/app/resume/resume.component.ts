import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {

  isWorkExperienceOpen = false;
  isEducationOpen = false;
  isCertificationsOpen = false;
  isPhilanthropyOpen = false;
  isLeadershipOpen = false;
  constructor(private titleService: Title, private renderer: Renderer2) { 
    this.titleService.setTitle("Alexey Gaulke - Resume");
  }

  DownloadResume(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', `Resume.pdf`);
    link.click();
    link.remove();
  }
}
