import { Component, OnInit } from '@angular/core';
import {HeroMessageService} from '../services/hero-message/hero-message.service';

@Component({
  selector: 'kjf-class-inject',
  templateUrl: './class-inject.component.html',
  styleUrls: ['./class-inject.component.scss']
})
export class ClassInjectComponent implements OnInit {

  constructor(public messageService: HeroMessageService) {}

  ngOnInit(): void {}

}
