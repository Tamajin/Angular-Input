import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developers: Developer = {
    lastName: 'Grid',
    firstName: 'Judge',
    age: 39,
    gender: 'male',
    bio: 'Dev in incubation, learns very quickly, passionate about this job',
    skills: [
      {
        name: 'Reactjs',
        logo: 'https://ionicframework.com/docs/icons/logo-react-icon.png',
        site: 'https://reactjs.org/',
      },
      {
        name: 'Expressjs',
        logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
        site: 'https://expressjs.com/',
      },
      {
        name: 'Angular',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        site: 'https://angular.io/',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
