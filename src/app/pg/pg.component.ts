import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pg',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pg.component.html',
  styleUrls: ['./pg.component.css']
})
export class PgComponent {
  passwordLength: number = 12;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  generatedPassword: string = '';
  passwordStrength: number = 0;
 
  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
 
    let charSet = '';
    if (this.includeUppercase) charSet += uppercaseChars;
    if (this.includeLowercase) charSet += lowercaseChars;
    if (this.includeNumbers) charSet += numberChars;
    if (this.includeSymbols) charSet += symbolChars;
 
    this.generatedPassword = Array.from({ length: this.passwordLength })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
 
      this.calculateStrength();
  }
  calculateStrength() {
    this.passwordStrength = 0;
    if (this.includeUppercase) this.passwordStrength++;
    if (this.includeLowercase) this.passwordStrength++;
    if (this.includeNumbers) this.passwordStrength++;
    if (this.includeSymbols) this.passwordStrength++;

    if (this.generatedPassword.length >= 12) {
      this.passwordStrength++;
    }
}

}