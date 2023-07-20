import { AfterViewInit, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { ModuleConfig } from 'menphys';

@Component({
  selector: 'menphys-time',
  templateUrl: './time.component.html',
  styleUrls: [ './time.component.scss' ]
})
export class TimeComponent implements AfterViewInit {

  public value = new Date();

  constructor (@Inject('config') private readonly config: ModuleConfig, private readonly cd: ChangeDetectorRef) { cd.detach() }

  public ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  public get hours() {
    return Intl.DateTimeFormat(this.config.locale, {
      hourCycle: 'h24',
      hour: '2-digit'
    }).format(this.value)
  }

  public set hours(hour: string) {
    this.value.setHours(Number(hour))
  }

  public get minutes() {
    return Intl.DateTimeFormat(this.config.locale, {
      minute: '2-digit',
    }).format(this.value)
  }

  public set minutes(minute: string) {
    this.value.setMinutes(Number(minute))
  }

  public get seconds() {
    return Intl.DateTimeFormat(this.config.locale, {
      second: '2-digit',
    }).format(this.value)
  }

  public set seconds(second: string) {
    this.value.setSeconds(Number(second))
  }

}
