import { Component } from '@angular/core';
import { faFacebook,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  myFacebook = faFacebook;
  myInstagram = faInstagram;
  myTwitter = faTwitter;
  carShopping = faCartShopping;
  faMagnifyingGlass = faMagnifyingGlass;
}
