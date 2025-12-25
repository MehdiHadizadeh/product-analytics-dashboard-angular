import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select-component',
  standalone: false,
  templateUrl: './select-component.html',
  styleUrl: './select-component.scss',
})
export class SelectComponent implements ControlValueAccessor {
  public ngControl = inject(NgControl, { optional: true, self: true });

  @Input() label = '';
  @Input() placeholder = 'Select an option';
  @Input() options: SelectOption[] = [];
  @Input() required = false;
  @Input() selectId = `select-${Math.random().toString(36).substr(2, 9)}`;

  value = '';
  disabled = false;

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

  onSelectChange(): void {
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}