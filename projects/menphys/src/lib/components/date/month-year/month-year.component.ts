// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
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
  styleUrls: [ './month-year.component.scss' ]
})
export class MonthYearComponent implements AfterViewInit, AfterContentChecked {

  @Input() public value = new Date();

  public memValue = this.value;
  public year = this.currentYear;
  public showMonth = false;
  public preShow = false;
  public show = false;
  public monthChangeAnimation = '';
  public currentViewData: ViewMonth[] = [];

  @ViewChild('listRef', { static: true }) list: ElementRef<HTMLUListElement>;

  constructor (@Inject('config') private readonly config: ModuleConfig, private readonly cd: ChangeDetectorRef) {
    this.cd.detach();
  }
  public ngAfterContentChecked(): void {
    // this.updateScrollUl();
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
    this.updateViewData()
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

  public handleUpdate(month: number): void {
    this.value = new Date(
      Number(this.year),
      month,
      this.value.getDay(),
      this.value.getHours(),
      this.value.getMinutes(),
      this.value.getSeconds(),
    );
    this.toggle();
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

  public getMonths(): string[] {
    return Array(12).fill(0).map((_value, index) => this.formatMonth(Intl.DateTimeFormat(this.config.locale, {
      month: 'short'
    }).format(new Date(this.currentYear, index, 1))));
  }

  public handleArrows(event: 'up' | 'down'): void {
    if (event === 'up') {
      this.updateViewData(event);
      this.cd.detectChanges();
      return undefined;
    }
    this.updateViewData(event);
    this.memValue.setMonth(this.memValue.getMonth() + 1);
    this.cd.detectChanges();
  }

  private updateScrollUl(): void {
    const childs = Array.from(this.list.nativeElement.children);
    const childIndex = childs.findIndex(el => el.classList.contains('active'));
    childs.at(childIndex)?.scrollIntoView({ behavior: 'smooth' });
  }

  private updateViewData(event?: 'up' | 'down'): void {
    if (!this.currentViewData.length) {
      this.initializeCurrentView();
    }
    if (event === 'up') {
      // setTimeout(() => {
      //   console.log(this.memValue)
      //   this.cd.detectChanges();
      //   this.updateScrollUl();
      // }, 500)
      const last = this.currentViewData.at(0);
      const date = new Date(last.year, last.monthIndex + 1, 1);
      this.currentViewData.unshift({
        month: this.getMonthName(date),
        year: date.getFullYear(),
        monthIndex: date.getMonth()
      });
      this.memValue.setMonth(this.memValue.getMonth() + 1);
      this.cd.detectChanges();
      this.updateScrollUl();

      this.currentViewData.pop();
    }
  }


  private initializeCurrentView() {
    const treeMonthEarlier = new Date(this.memValue.getFullYear(), this.memValue.getMonth() - 2, 1);
    const monthEarlier = treeMonthEarlier.getMonth() + 1;
    Array(3).fill(0).forEach((_value, i) => {
      treeMonthEarlier.setMonth(monthEarlier + i);
      const month = this.getMonthName(treeMonthEarlier);
      this.currentViewData.push({
        month: month,
        year: treeMonthEarlier.getFullYear(),
        monthIndex: treeMonthEarlier.getMonth()
      });
    });
  }


  private getMonthName(date: Date) {
    return this.formatMonth(Intl.DateTimeFormat(this.config.locale, {
      month: 'long'
    }).format(date));
  }
}
