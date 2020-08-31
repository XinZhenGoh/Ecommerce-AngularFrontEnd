import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  form: FormGroup;

  constructor(private httpClient: HttpClient, public fb: FormBuilder) {

    this.form = this.fb.group({
      firstName : [''],
      lastName : [''],
      username : [''],
      email : [''],
      city : [''],
      state : [''],
      zipcode : [''],
      phoneNumber : ['']
    });
  }

  selectedFile: File;
  message: string;

  // Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  // Gets called when the user clicks on submit to upload the image
  onSignUp() {
    console.log(this.selectedFile);

    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const userSignUpData = new FormData();

    userSignUpData.append('imageFile', this.selectedFile, this.selectedFile.name);
    userSignUpData.append('username', this.form.get('username').value);

    // Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:5050/upload', userSignUpData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );

    this.form.reset();
  }

  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    // Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:5050/users/upload', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'User successfully registered';

          } else {
            this.message = 'User registration failed';
          }
        }
      );
  }
}
