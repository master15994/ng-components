import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  former!: FormGroup;

  ngOnInit(): void {
    this.former = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([], Validators.required),
    });
  }

  sumbit() {
    if (this.former.valid) {
      console.log('ffffff', this.former);
      const formData = { ...this.former.value };
      console.log('form Data', formData);
    }
  }

  setCity() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };

    const cityKey: 'ru' | 'ua' | 'by' = this.former
      .get('address')
      ?.get('country')?.value;
    const city = cityMap[cityKey];

    this.former.patchValue({ address: { city } });
  }

  addSkills() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.former.get('skills')).push(control);
  }
}
