import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons' ;
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons' ;
import { faHeart } from '@fortawesome/free-regular-svg-icons' ;
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons' ;
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  faShoppingBasket = faShoppingBasket;
  faHeart = faHeart;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
}
