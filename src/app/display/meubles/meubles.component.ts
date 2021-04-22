import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-meubles',
  templateUrl: './meubles.component.html',
  styleUrls: ['./meubles.component.css']
})
export class MeublesComponent implements OnInit {

  faHeart = faHeart;
  faCartPlus = faCartPlus;
  faPlusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
