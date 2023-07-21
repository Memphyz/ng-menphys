/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnInit
}

  from '@angular/core';

import {
  InputProperties
}

  from '@menphys/shared/input/input-properties';

import {
  UntilDestroy,
  untilDestroyed
}

  from '@ngneat/until-destroy';

import {
  interval,
  noop
}

  from 'rxjs';


@UntilDestroy() @Component({
  selector: 'menphys-date',
  templateUrl: './date.component.html',
  styleUrls: [ './date.component.scss' ]
}

) export class DateComponent extends InputProperties<Date> implements AfterContentChecked {

  public isFocused = false;

  public calendarPosition: {
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
  } = {
    top: 0,
      left: 0,
  }

  constructor (private readonly el: ElementRef<HTMLElement>) {
    super();
  }

  public ngAfterContentChecked(): void {
    if (!this.el?.nativeElement) {
      return undefined;
    }
    const position = this.el.nativeElement.getBoundingClientRect();
    this.calendarPosition = {
      top: position.y + position.height + 15,
      left: position.x
    }
  }

}
