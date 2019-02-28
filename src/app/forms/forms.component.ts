import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb : FormBuilder) {
    this.myForm = fb.group({
      'favFilm' : "lion king"
    });
  }

  ngOnInit() {}

  onSubmit(form: any): void{
    console.log('value submitted on form: ', form);
  }

  submitReactive(value : string): void{
    console.log('value submitted from reactive form: ', value);
  }

}
