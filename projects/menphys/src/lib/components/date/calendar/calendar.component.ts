import { Component, Inject, type OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ModuleConfig } from '@menphys/menphys.module';
import { noop } from 'rxjs';

interface Day { day: number, disabled: boolean }

@Component({
  selector: 'menphys-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.scss' ],
})
export class CalendarComponent implements OnInit {

  public weeks: string[] = [];
  public value = new Date();

  public get ghosts(): number[] {
    const weekdayStart = new Date(this.value.getFullYear(), this.value.getMonth() + 1, 1).getDay();
    return Array(weekdayStart).fill(0);
  }

  constructor (@Inject('config') private readonly config: ModuleConfig) { }

  public ngOnInit(): void {
    this.weeks = this.getWeekDays();
  }

  public getDaysQuantity(year: number, month: number): number[] {
    return Array(new Date(year, month, 0).getDate() + 1).fill(null).map((_value, index) => index++).slice(1)
  }

  public getWeekdays(weekIndex: number): Day[] {
    const previous: Day[] = [];
    const later: Day[] = [];
    if (this.ghosts.length) {
      previous.push(...this.getLastDaysPrevieousMonth())
    }
    const weeks = this.weeks.length;
    const ghostQuantity = previous.length
    const start = weekIndex ? (weekIndex * weeks) - ghostQuantity : (weekIndex * weeks);
    const end = (weekIndex ? ((weekIndex) * weeks) + ghostQuantity : ((weekIndex) * weeks) + ghostQuantity);
    const days = this.getDaysQuantity(this.value.getFullYear(), this.value.getMonth() + 1).map(value => {
      return {
        day: value,
        disabled: false
      }
    })
      .slice(start, ghostQuantity ? end - 1 : end);
    if (days.at(days.length - 1)?.day > 27 && days.length < weeks) {
      const diff = weeks - days.length;
      later.push(...this.getFirstDaysLaterMonth().splice(0, diff))
    }
    return !weekIndex ? [ ...previous, ...days ] : [ ...days, ...later ];
  }

  public getLastDaysPrevieousMonth(): Day[] {
    const days = this.getDaysQuantity(this.value.getFullYear(), this.value.getMonth());
    return days.slice(days.length - (this.ghosts.length - 2)).map(value => {
      return {
        day: value,
        disabled: true
      }
    });
  }
  public getFirstDaysLaterMonth(): Day[] {
    const days = this.getDaysQuantity(this.value.getFullYear(), this.value.getMonth() + 2);
    return days.slice(0, this.weeks.length).map(value => {
      return {
        day: value,
        disabled: true
      }
    });
  }

  public getWeekDays(): string[] {
    const baseDate = new Date(Date.UTC(2017, 0, 2));
    const dayQuantity: number = new Intl.Locale(this.config.locale)[ 'weekInfo' ][ 'firstDay' ];
    const weekDays: string[] = [];
    Array(dayQuantity).fill(null).forEach(() => {
      weekDays.push(baseDate.toLocaleDateString(this.config.locale, { weekday: 'narrow' }));
      baseDate.setDate(baseDate.getDate() + 1);
    })
    return weekDays;
  }

  public trackByFn(i: number): number {
    return i
  }

  public handleSelect(day: number): void {
    console.log(new Date(this.value.getFullYear(), this.value.getMonth(), day))
  }

}
