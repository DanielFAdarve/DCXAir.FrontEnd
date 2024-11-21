import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-journey-form',
  templateUrl: './journey-form.component.html',
  styleUrls: ['./journey-form.component.scss']
})
export class JourneyFormComponent {
  destinationForm: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.submitted = false;

    this.destinationForm = this.formBuilder.group({
      origin: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(3)])],
      destination: ['', Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(3)])],
      journeyType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params) => {
        this.destinationForm.controls['origin'].setValue(String(params.get('origin') || ''));
        this.destinationForm.controls['destination'].setValue(String(params.get('destination') || ''));
        this.destinationForm.controls['journeyType'].setValue(String(params.get('journeyType') || 'one-way'));
      });
  }

  validateFormField(field: string) {
    let control = this.destinationForm.controls[field];
    return this.submitted && (control.invalid);
  }

  isNotSameOrigin() {
     return (
      this.destinationForm.value['destination'] === '' || this.destinationForm.value['destination'] !== this.destinationForm.value['origin']
    );
  }

  errorsFromFormField(field: string) {
    let control = this.destinationForm.controls[field];
    return control.errors;
  }

  searchFlights() {
    this.submitted = true;

    if (this.destinationForm.valid && this.isNotSameOrigin()) {
      const formValue = this.destinationForm.value;
      console.log('Form Values:', formValue); 
      this.router.navigate(['/flights'],
        { queryParams: this.destinationForm.value });
    }
  }
}
