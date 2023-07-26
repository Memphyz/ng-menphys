/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnInit,
  Optional,
  Self
}

  from '@angular/core';
import { NgControl } from '@angular/forms';

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
  Subject,
  distinctUntilChanged,
  filter,
  interval,
  map,
  noop
}

  from 'rxjs';


@UntilDestroy()
@Component({
  selector: 'menphys-date',
  templateUrl: './date.component.html',
  styleUrls: [ './date.component.scss' ]
}
) export class DateComponent extends InputProperties<Date> implements OnInit {

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

  private readonly updatePosition = new Subject<string>();

  constructor (private readonly el: ElementRef<HTMLElement>, @Optional() @Self() protected override readonly ngControl: NgControl) {
    super(null, ngControl);
    this.ngControl && (this.ngControl.valueAccessor || (this.ngControl.valueAccessor = this));
  }

  public ngOnInit(): void {
    this.updatePosition
      .pipe(
        filter(() => !!this.el),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((stringfied: string) => {
        const position = JSON.parse(stringfied) as DOMRect;
        this.calendarPosition = {
          top: position.y + position.height + 15,
          left: position.x
        }
      })
    interval().subscribe(() => this.updatePosition.next(JSON.stringify(this.el?.nativeElement.getBoundingClientRect().toJSON())))
  }

}
