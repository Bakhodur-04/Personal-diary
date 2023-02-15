import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Entry } from 'src/app/interface/entry.data';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})

/**
 * Class for create page component.
 */
export class CreatePageComponent implements OnInit {
  htmlContent = '';
  editor!: any;
  isSave: boolean = false;
  entry!: Entry;
  date = new Date();
  photo = ''
  file: any = null;
  base64: any = '';
  code: string = '';

  /**
   * Constructor for CreatePageComponent.
   * @param dataService - Service for connection of firestore.
   * @param router - Object for navigation.
   * @param auth - Service for authenthification.
   * @param http - Object for http client
   */
  constructor(
    public dataService: DataService, 
    private router: Router, 
    private auth: AuthService, 
    private http: HttpClient
    ) {}

  ngOnInit(): void {}

  /**
   * Method for converting image to base64.
   * @param file - Image.
   * @returns - Promise base64.
   */
  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };

  /**
   * Method for selected image.
   * @param event - Event for image.
   */
  onFileSelected(event): void {
    this.file = event.target.files[0]

    this.base64 = this.convertBase64(this.file);
    this.base64.then(item => this.code = item);
  }

  /**
   * Method for submit entry.
   */
  onSubmit(): void {
    this.isSave = true

    this.entry = {
      id: uuidv4(), 
      time: new Date().getTime(), 
      paragraph: this.htmlContent,
      login: this.auth.loginName,
      picture: this.code
    };

    this.dataService.addEntry(this.entry)
    
    this.router.navigate(['/diary']);
  }

  /**
   * Method for cancel create entry.
   */
  onCancel(): void {
    this.router.navigate(['/diary'])
  }


}
