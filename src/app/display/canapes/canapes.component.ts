import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-canapes',
  templateUrl: './canapes.component.html',
  styleUrls: ['./canapes.component.css']
})
export class CanapesComponent implements OnInit {

  faHeart = faHeart;
  faCartPlus = faCartPlus;
  faPlusSquare = faPlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
