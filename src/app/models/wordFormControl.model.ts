import { FormControl, Validators } from "@angular/forms";

export function wordFormControl() {
  return new FormControl<string>('', {
    validators: [
      Validators.minLength(5),
      Validators.maxLength(5)
    ]
  });
}