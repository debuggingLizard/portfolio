import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  icons = {
    location: {
      standard: "./assets/img/location.svg",
      hover: "./assets/img/location-hover.svg",
    },
    remote: {
      standard: "./assets/img/remote.svg",
      hover: "./assets/img/remote-hover.svg",
    }
  }

  iconLocation = this.icons.location.standard;
  iconRemote = this.icons.remote.standard;

  changeImage(isHovering:boolean, type:string) {
    if (type == 'location') {
      this.iconLocation = isHovering ? this.icons.location.hover : this.icons.location.standard;
    } else {
      this.iconRemote = isHovering ? this.icons.remote.hover : this.icons.remote.standard;
    }
  }

}
