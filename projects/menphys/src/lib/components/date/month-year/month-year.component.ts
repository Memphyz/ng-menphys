import { AfterViewInit, ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { ModuleConfig } from '@menphys/menphys.module';

const DATA_LENGTH = 2

@Component({
  selector: 'menphys-month-year',
  templateUrl: './month-year.component.html',
  styleUrls: [ './month-year.component.scss' ]
})
export class MonthYearComponent implements AfterViewInit {

  @Input() public value = new Date();

  public year = this.currentYear;
  public showMonth = false;
  public preShow = false;
  public show = false;

  constructor (@Inject('config') private readonly config: ModuleConfig, private readonly cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  public get currentMonth(): string {
    const month = Intl.DateTimeFormat(this.config.locale, {
      month: 'long'
    }).format(this.value)
    return this.formatMonth(month)
  }

  public get currentYear(): number {
    return this.value?.getFullYear() || new Date().getFullYear();
  }

  public ngAfterViewInit(): void {
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

}
