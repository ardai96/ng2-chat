import { Component, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchControl: AbstractControl = new FormControl('');
  public search: EventEmitter<undefined> = new EventEmitter();
  private destroy$: Subject<undefined> = new Subject();

  constructor() {}

  ngOnInit() {
    this.searchControl
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => this.search.emit(value));
  }
}
