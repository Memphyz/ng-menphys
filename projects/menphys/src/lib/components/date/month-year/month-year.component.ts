import { Component, Inject } from '@angular/core';
import { ModuleConfig } from '@menphys/menphys.module';

const DATA_LENGTH = 10

@Component({
  selector: 'menphys-month-year',
  templateUrl: './month-year.component.html',
  styleUrls: [ './month-year.component.scss' ]
})
export class MonthYearComponent {

  public value = new Date();

  public viewYear = this.currentYear;

  constructor (@Inject('config') private readonly config: ModuleConfig) { }


  public get currentYear(): number {
    return this.value?.getFullYear() || new Date().getFullYear();
  }

  public get currentMonth(): string {
    const month = Intl.DateTimeFormat(this.config.locale, {
      month: 'long'
    }).format(this.value)
    return this.formatMonth(month)
  }

  public trackByFn(i: number): number {
    return i;
  }

  public handleAnimation(input: HTMLInputElement, ms = 500): void {
    if (input.checked) {
      setTimeout(() => input.click(), ms)
      return undefined;
    }
    input.click()
  }

  public getContent(type: 'year' | 'month'): (number | string)[] {
    if (type === 'year') {
      return this.getYears();
    }
    return this.getMonths();
  }

  public handleLoadYears(orientation: 'top' | 'bottom', loaded: (number | string)[], event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const data = loaded as number[];
    if (orientation === 'top') {
      const first = data.at(0);
      this.viewYear = first - DATA_LENGTH;
      return undefined;
    }
    const last = data.at(data.length - 1);
    this.viewYear = last + DATA_LENGTH + 1;
  }

  public handleUpdate(type: 'year' | 'month', content: number | string): void {
    const data = content as number;
    if (type === 'year') {
      this.value = new Date(data, this.value.getMonth(), this.value.getDay());
      return undefined;
    }
    this.value = new Date(this.value.getFullYear(), data, this.value.getDay());
  }

  private formatMonth(month: string): string {
    return month.at(0).toLocaleUpperCase() + month.substring(1).toLocaleLowerCase().replace('.', '')
  }

  private getYears(): number[] {
    const previeous = Array(DATA_LENGTH).fill(0).map((_value, index) => this.viewYear - index - 1);
    const later = Array(DATA_LENGTH - 1).fill(0).map((_value, index) => this.viewYear + index + 1);
    return [ ...previeous.reverse(), this.viewYear, ...later ]
  }

  private getMonths(): string[] {
    return Array(12).fill(0).map((_value, index) => this.formatMonth(Intl.DateTimeFormat(this.config.locale, {
      month: 'long'
    }).format(new Date(this.currentYear, index, 1))))
  }

}
