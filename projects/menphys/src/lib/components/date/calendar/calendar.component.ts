import type { AfterViewInit, } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ChangeDetectorRef, Component, Inject, Optional, Self, type OnInit } from '@angular/core';
import { type ControlValueAccessor, NgControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '@menphys/abstracts/control-accessor.abstract';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ModuleConfig } from '@menphys/menphys.module';

interface Day { day: number, disabled: boolean, current: boolean }

@Component({
  selector: 'menphys-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.scss' ],
})
export class CalendarComponent extends AbstractControlValueAccessor<Date> implements OnInit, AfterViewInit, ControlValueAccessor {

  public weeks: string[] = [];
  private days: Day[];
  private previeus: Day[] = [];
  private ghosts: number[];
  public visibleValue = this.value || new Date();

  constructor (@Inject('config') private readonly config: ModuleConfig, public readonly cd: ChangeDetectorRef, @Inject(NgControl) @Optional() @Self() protected override readonly ngControl: NgControl) {
    super(new Date(), ngControl);
    cd.detach();
  }

  public ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  public ngOnInit(): void {
    this.handleUpdateValueByNgModel();
    this.value && (this.visibleValue = this.value);
    this.updateInfos();
  }

  public handleUpdateValue(): void {
    this.value = this.visibleValue;
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
    this.value = new Date(this.visibleValue?.getFullYear(), this.visibleValue?.getMonth(), day, this.visibleValue?.getHours(), this.visibleValue?.getMinutes(), this.visibleValue?.getSeconds());
    this.visibleValue = this.value;
    this.updateInfos();
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
    const daysLastMonth = new Date(this.visibleValue.getFullYear(), this.visibleValue.getMonth(), 0).getDate();
    const weekdayStart = new Date(this.visibleValue.getFullYear(), this.visibleValue.getMonth() - 1, daysLastMonth).getDay();
    this.ghosts = Array(weekdayStart + 1).fill(0);
    this.days = this.getDaysQuantity(this.visibleValue.getFullYear(), this.visibleValue.getMonth()).map(value => {
      return {
        day: value,
        disabled: false,
        current: false
      }
    });
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
    const days = this.getDaysQuantity(this.visibleValue.getFullYear(), this.visibleValue.getMonth());
    return days.slice(days.length - this.ghosts.length).map(value => {
      return {
        day: value,
        disabled: true,
        current: false
      }
    });
  }
  private getFirstDaysLaterMonth(): Day[] {
    const days = this.getDaysQuantity(this.visibleValue.getFullYear(), this.visibleValue.getMonth() + 2);
    return days.slice(0, this.weeks.length).map(value => {
      return {
        day: value,
        disabled: true,
        current: false
      }
    });
  }
}
