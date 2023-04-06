import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-qrcode';
  file: any;
  imagePreview: any =
    'https://angular.io/assets/images/logos/angular/angular.png';
  qrData = 'https://github.com/mPrograms-mg';
  // imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  chooseFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
