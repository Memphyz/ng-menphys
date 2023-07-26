// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Self, ViewChild } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { AbstractControlValueAccessor } from '@menphys/abstracts/control-accessor.abstract';
import type { ModuleConfig } from '@menphys/menphys.module';

const DATA_LENGTH = 2
interface ViewMonth {
  month: string,
  year: number,
  monthIndex: number
}
@Component({
  selector: 'menphys-month-year',
  templateUrl: './month-year.component.html',
  styleUrls: [ './month-year.component.scss' ],
})
export class MonthYearComponent extends AbstractControlValueAccessor<Date> implements AfterViewInit, ControlValueAccessor {

  public memValue = this.value;
  public year = this.currentYear;
  public showMonth = false;
  public preShow = false;
  public show = false;
  public monthChangeAnimation = '';
  public currentViewData: ViewMonth[] = [];

  @Output() public readonly onMonthChange = new EventEmitter<string>()

  @ViewChild('listRef', { static: true }) list: ElementRef<HTMLUListElement>;

  constructor (@Inject('config') private readonly config: ModuleConfig, private readonly cd: ChangeDetectorRef, @Optional() @Self() protected override readonly ngControl: NgControl) {
    super(new Date(), ngControl);
    this.ngControl && (this.ngControl.valueAccessor || (this.ngControl.valueAccessor = this));
    this.cd.detach();
  }

  public get currentMonthShort(): string {
    const month = Intl.DateTimeFormat(this.config.locale, {
      month: 'short'
    }).format(this.memValue)
    return this.formatMonth(month)
  }

  public get currentYear(): number {
    return this.value?.getFullYear() || new Date().getFullYear();
  }

  public ngAfterViewInit(): void {
    this.memValue ||= this.value || new Date();
    this.updateViewData();
    this.cd.detectChanges();
  }

  public trackByFn(i: number): number {
    return i;
  }

  public toggle(): void {
    if (this.show) {
      this.preShow = false;
      setTimeout(() => {
        this.show = false;
        this.showMonth = false;
      }, 500);
      this.cd.detectChanges();
      return undefined
    }
    this.preShow = true;
    this.show = true;
    this.cd.detectChanges();
  }

  public handleSelectYear(year: number): void {
    this.year = year;
    this.showMonth = true
    this.cd.detectChanges();
  }

  public handleUpdate(toggle = true, monthIndex?: number): void {
    if (monthIndex !== undefined && monthIndex !== null) {
      this.memValue = new Date(this.year, monthIndex, this.memValue.getDate(), this.memValue.getHours(), this.memValue.getMinutes(), this.memValue.getSeconds())
    }
    this.currentViewData = [];
    console.log(this.memValue)
    this.value = this.memValue;
    toggle && this.toggle();
    this.updateViewData();
    this.cd.detectChanges();
  }

  private formatMonth(month: string): string {
    return month.at(0).toLocaleUpperCase() + month.substring(1).toLocaleLowerCase().replace('.', '')
  }

  public getYears(): number[] {
    const previeous = Array(DATA_LENGTH).fill(0).map((_value, index) => this.year - index - 1);
    const later = Array(DATA_LENGTH - 1).fill(0).map((_value, index) => this.year + index + 1);
    return [ ...previeous.reverse(), this.year, ...later ];
  }

  public getMonths(): ViewMonth[] {
    return Array(12).fill(0).map((_value, index) => {
      return {
        month: this.formatMonth(Intl.DateTimeFormat(this.config.locale, {
          month: 'short'
        }).format(new Date(this.currentYear, index, 1))),
        year: undefined,
        monthIndex: index
      }
    });
  }

  public handleArrows(event: 'up' | 'down'): void {
    if (event === 'up') {
      this.updateViewData(event);
      this.cd.detectChanges();
      return undefined;
    }
    this.updateViewData(event);
    this.cd.detectChanges();
  }

  private updateScrollUl(smooth = true): void {
    const childs = Array.from(this.list.nativeElement.children);
    const childIndex = childs.findIndex(el => el.classList.contains('active'));
    childs.at(childIndex)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  }

  private updateViewData(event?: 'up' | 'down'): void {
    if (!this.currentViewData.length) {
      this.initializeCurrentView();
    }
    if (!event) {
      return undefined;
    }
    if (event === 'up') {
      return this.loadUpperContent();
    }
    this.loadLowerContent();
  }


  private loadLowerContent(): void {
    const next = this.currentViewData.at(this.currentViewData.length - 1);
    const date = new Date(next.year, next.monthIndex + 1, 1);
    this.currentViewData.push({
      month: this.getMonthName(date),
      year: date.getFullYear(),
      monthIndex: date.getMonth()
    });
    this.list.nativeElement.scrollTo({ top: 0 });
    this.currentViewData.shift();
    this.memValue = new Date(
      this.memValue.getFullYear(),
      this.memValue.getMonth() + 1,
      this.memValue.getDate(), this.memValue.getHours(), this.memValue.getMinutes(), this.memValue.getSeconds()
    );
    this.handleUpdate(false);
    this.cd.detectChanges();
    this.updateScrollUl();
  }

  private loadUpperContent(): void {
    const first = this.currentViewData.at(0);
    const date = new Date(first.year, first.monthIndex - 1, 1);
    this.currentViewData.unshift({
      month: this.getMonthName(date),
      year: date.getFullYear(),
      monthIndex: date.getMonth()
    });
    this.list.nativeElement.scrollTo({ top: this.list.nativeElement.scrollHeight });
    this.currentViewData.pop();
    this.memValue = new Date(
      this.memValue.getFullYear(),
      this.memValue.getMonth() - 1,
      this.memValue.getDate(), this.memValue.getHours(), this.memValue.getMinutes(), this.memValue.getSeconds()
    );
    this.handleUpdate(false);
    this.cd.detectChanges();
    this.updateScrollUl();
  }

  private initializeCurrentView(): void {
    const monthEarlierIndex = this.memValue.getMonth() - 2;
    const year = monthEarlierIndex < 0 ? this.memValue.getFullYear() - 1 : this.memValue.getFullYear();
    const monthsEarlier = new Date(year,
      monthEarlierIndex < 0 ? 12 - Math.abs(monthEarlierIndex) : monthEarlierIndex,
      1);
    const monthEarlier = monthsEarlier.getMonth() + 1;
    Array(3).fill(0).forEach((_value, i) => {
      const nextMonth = monthEarlier + i
      monthsEarlier.setMonth(nextMonth > 12 ? nextMonth - 12 : nextMonth);
      const month = this.getMonthName(monthsEarlier);
      this.currentViewData.push({
        month: month,
        year: monthsEarlier.getFullYear(),
        monthIndex: monthsEarlier.getMonth(),
      });
    });
    this.cd.detectChanges();
    this.updateScrollUl(false);
  }


  private getMonthName(date: Date) {
    return this.formatMonth(Intl.DateTimeFormat(this.config.locale, {
      month: 'long'
    }).format(date));
  }
}
