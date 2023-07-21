import type { AfterViewInit, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, debounceTime, filter, map } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'menphys-time',
  templateUrl: './time.component.html',
  styleUrls: [ './time.component.scss' ]
})
export class TimeComponent implements AfterViewInit, OnInit {

  public value = new Date();
  public maxDate = new Date(
    this.value.getFullYear() + 500,
    this.value.getMonth(),
    this.value.getDate(),
    23,
    59,
    59
  );
  public hours = String(this.value.getHours());
  public minutes = String(this.value.getMinutes());
  public seconds = String(this.value.getSeconds());
  public invalid = false;

  private readonly change = new Subject<{ value: number, type: 'hour' | 'minute' | 'second' }>();

  constructor (private readonly cd: ChangeDetectorRef) {
    this.cd.detach()
  }

  public ngAfterViewInit(): void {
    this.invalid = !this.isValidDate();
    this.cd.detectChanges();
  }

  public ngOnInit(): void {
    this.change
      .pipe(
        untilDestroyed(this),
        debounceTime(600),
        map(data => this.createNewValue(data)),
        filter((value) => {
          this.invalid = !this.isValidDate(value);
          this.cd.detectChanges();
          return !this.invalid;
        })
      )
      .subscribe((data) => {
        this.value = data;
        this.cd.detectChanges();
      });
    this.handleFormatData();
  }

  public handleUpdateValue(event: Event, type: 'hour' | 'minute' | 'second'): void {
    if ((event as InputEvent).inputType === 'deleteContentBackward') {
      return undefined;
    }
    this.change.next({ value: Number(event.target[ 'value' ]), type })
  }

  public handleFormatData(): void {
    this.hours = this.formatTwoDigit(this.hours);
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

  private formatTwoDigit(value: string): string {
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

  private createNewValue(data: { value: number; type: 'hour' | 'minute' | 'second'; }): Date {
    const time = data.value;
    const type = data.type;
    const currHour = Number(type === 'hour' ? time : this.value.getHours());
    const currMinute = Number(type === 'minute' ? time : this.value.getMinutes());
    const currSeconds = Number(type === 'second' ? time : this.value.getSeconds());
    const year = this.value.getFullYear();
    const month = this.value.getMonth();
    const date = this.value.getDate();
    return new Date(year, month, date, currHour, currMinute, currSeconds);
  }

}
