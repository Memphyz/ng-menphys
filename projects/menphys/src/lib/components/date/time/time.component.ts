import type { AfterViewInit, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ChangeDetectorRef, Component, Inject, Optional, Self } from '@angular/core';
import { NgControl, type ControlValueAccessor } from '@angular/forms';
import { AbstractControlValueAccessor } from '@menphys/abstracts/control-accessor.abstract';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, debounceTime, filter, map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'menphys-time',
  templateUrl: './time.component.html',
  styleUrls: [ './time.component.scss' ]
})
export class TimeComponent extends AbstractControlValueAccessor<Date> implements OnInit, AfterViewInit, ControlValueAccessor {

  public maxDate = new Date(
    (this.value || new Date()).getFullYear() + 500,
    (this.value || new Date()).getMonth(),
    (this.value || new Date()).getDate(),
    23,
    59,
    59
  );
  public hours = String(this.value?.getHours() || 0);
  public minutes = String(this.value?.getMinutes() || 0);
  public seconds = String(this.value?.getSeconds() || 0);
  public invalid = false;

  private readonly change = new Subject<{ value: number, type: 'hour' | 'minute' | 'second' }>();

  constructor (private readonly cd: ChangeDetectorRef, @Optional() @Self() @Inject(NgControl) protected override readonly ngControl: NgControl) {
    super(null, ngControl);
    this.cd.detach()
  }

  public ngAfterViewInit(): void {
    this.invalid = !this.isValidDate();
    this.cd.detectChanges()
  }

  public ngOnInit(): void {
    this.change
      .pipe(
        untilDestroyed(this),
        debounceTime(600),
        map(data => this.createNewValue(data)),
        filter((value) => {
          this.invalid = !this.isValidDate(value);
          this.setError();
          this.cd.detectChanges();
          return !this.invalid;
        })
      )
      .subscribe((data) => {
        this.value = data;
        this.handleFormatData();
        this.cd.detectChanges();
      });
    this.handleUpdateValueByNgModel();
    if (this.value) {
      this.hours = String(this.value.getHours());
      this.minutes = String(this.value.getMinutes());
      this.seconds = String(this.value.getSeconds());
    }
    this.handleFormatData();
  }

  public handleUpdateValue(event: Event, type: 'hour' | 'minute' | 'second'): void {
    if ((event as InputEvent).inputType === 'deleteContentBackward') {
      return undefined;
    }
    this.change.next({ value: Number(event.target[ 'value' ]), type })
  }

  public handleFormatData(): void {
    this.hours = this.formatTwoDigit(this.hours, '23');
    this.minutes = this.formatTwoDigit(this.minutes);
    this.seconds = this.formatTwoDigit(this.seconds);
    this.cd.detectChanges();
  }

  public handleArrow(data: 'hours' | 'minutes' | 'seconds', behaviour: '+' | '-'): void {
    const number = Number(this[ data ]);
    if (isNaN(number)) {
      return undefined;
    }
    const newValue = behaviour === '+' ? number + 1 : number - 1;
    if ((data === 'hours' && newValue > 23)
      || (data !== 'hours' && newValue > 59)
      || newValue < 0) {
      return undefined;
    }
    this[ data ] = String(newValue);
    this[ data ] = this.formatTwoDigit(this[ data ]);
    this.change.next({ value: newValue, type: data.substring(0, data.length - 1) as 'hour' })
    this.cd.detectChanges();
  }

  public handleWheel(event: WheelEvent, data: 'hours' | 'minutes' | 'seconds') {
    const behaviour = event[ 'wheelDelta' ] > 0 ? '+' : '-';
    this.handleArrow(data, behaviour);
  }

  private formatTwoDigit(value: string, max = '59'): string {
    const number = Number(value);
    if (isNaN(number) || isNaN(Number(max))) {
      return undefined;
    }
    if (number > Number(max)) {
      return max;
    }
    if (value.length < 2) {
      return `0${ value }`;
    }
    return value;
  }

  private isValidDate(value = this.value): boolean {
    if (value > this.maxDate) {
      return false;
    }
    return true
  }

  private setError(invalid = this.invalid): void {
    if (invalid) {
      this.control?.setErrors({ ...this.control.errors, time: 'Invalid time' })
      return undefined;
    }
    const { errors } = this.control;
    delete (errors || {})[ 'time' ]
    this.control?.setErrors(errors)
  }

  private createNewValue(data: { value: number; type: 'hour' | 'minute' | 'second'; }): Date {
    const now = new Date();
    const time = data.value;
    const type = data.type;
    const currHour = Number(type === 'hour' ? time : (this.value || now).getHours() || 0);
    const currMinute = Number(type === 'minute' ? time : (this.value || now).getMinutes() || 0);
    const currSeconds = Number(type === 'second' ? time : (this.value || now).getSeconds() || 0);
    const year = (this.value || now).getFullYear();
    const month = (this.value || now).getMonth();
    const date = (this.value || now).getDate();
    return new Date(year, month, date, currHour, currMinute, currSeconds);
  }

}
