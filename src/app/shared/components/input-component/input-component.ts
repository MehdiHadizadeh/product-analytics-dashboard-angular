import { Component, inject, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  standalone: false,
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'number' | 'tel' | 'password' = 'text';
  @Input() required = false;
  @Input() inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  value = '';
  disabled = false;

  public ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get touched(): boolean {
    return this.ngControl?.control?.touched ?? false;
  }

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}