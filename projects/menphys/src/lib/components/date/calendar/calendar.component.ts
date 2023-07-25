import type { AfterViewInit, } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Component, Inject, type OnInit, ChangeDetectorRef } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ModuleConfig } from '@menphys/menphys.module';

interface Day { day: number, disabled: boolean, current: boolean }

@Component({
  selector: 'menphys-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.scss' ],
})
export class CalendarComponent implements OnInit, AfterViewInit {

  public weeks: string[] = [];
  public value = new Date();
  private days: Day[];
  private previeus: Day[] = [];
  private ghosts: number[]

  constructor (@Inject('config') private readonly config: ModuleConfig, private readonly cd: ChangeDetectorRef) { cd.detach() }

  public ngAfterViewInit(): void {
    this.cd.detectChanges()
  }

  public ngOnInit(): void {
    this.updateInfos();
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
    console.log(new Date(this.value.getFullYear(), this.value.getMonth(), day));
    this.cd.detectChanges();
  }

  public getWeekdays(weekIndex: number): Day[] {
    const weeks = this.weeks.length;
    const ghosts = this.previeus.length
    const end = (weekIndex ? ((weekIndex) * weeks) + weeks - ghosts : (weeks) - ghosts);
    const start = (weekIndex ? (weekIndex * weeks) - ghosts : (weekIndex * weeks));
    const days = this.days.slice(start, end);
    const later = this.getLaterDays(days);
    return !weekIndex ? [ ...this.previeus, ...days ] : [ ...days, ...later ];
  }

  private updateInfos(): void {
    this.weeks = this.getWeekDays();
    const daysLastMonth = new Date(this.value.getFullYear(), this.value.getMonth(), 0).getDate();
    const weekdayStart = new Date(this.value.getFullYear(), this.value.getMonth() - 1, daysLastMonth).getDay();
    this.ghosts = Array(weekdayStart + 1).fill(0);
    this.days = this.getDaysQuantity(this.value.getFullYear(), this.value.getMonth()).map(value => {
      return {
        day: value,
        disabled: false,
        current: false
      }
    })
    if (this.ghosts.length) {
      this.previeus = this.getLastDaysPrevieousMonth();
    }
    this.cd.detectChanges();
  }

  private getDaysQuantity(year: number, month: number): number[] {
    return Array(new Date(year, month + 1, 0).getDate()).fill(null).map((_value, index) => index += 1)
  }

  private getLaterDays(days: Day[]): Day[] {
    if (days.at(days.length - 1)?.day > 27 && days.length < this.weeks.length) {
      const diff = this.weeks.length - days.length;
      return this.getFirstDaysLaterMonth().splice(0, diff);
    }
    return [];
  }

  private getLastDaysPrevieousMonth(): Day[] {
    const days = this.getDaysQuantity(this.value.getFullYear(), this.value.getMonth());
    return days.slice(days.length - this.ghosts.length).map(value => {
      return {
        day: value,
        disabled: true,
        current: false
      }
    });
  }
  private getFirstDaysLaterMonth(): Day[] {
    const days = this.getDaysQuantity(this.value.getFullYear(), this.value.getMonth() + 2);
    return days.slice(0, this.weeks.length).map(value => {
      return {
        day: value,
        disabled: true,
        current: false
      }
    });
  }
}
