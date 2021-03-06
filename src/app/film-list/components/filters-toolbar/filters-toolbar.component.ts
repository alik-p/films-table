import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filters } from 'src/app/core/api';
import { debounceTime, takeWhile } from 'rxjs/operators';
import { Lookup } from '../../shared/models/lookup';


@Component({
  selector: 'app-filters-toolbar',
  templateUrl: './filters-toolbar.component.html',
  styleUrls: ['./filters-toolbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersToolbarComponent implements OnInit, OnDestroy {
  @Input() genres: string[];
  @Input() lookup: Lookup;
  @Output() changes = new EventEmitter<Filters>();

  form: FormGroup;

  private alive = true;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm();
  }


  ngOnDestroy(): void {
    this.alive = false;
  }


  private initForm(): void {
    this.form = this.createForm();
    this.initFormListeners(this.form);
  }


  private initFormListeners(form: FormGroup): void {
    form.valueChanges
      .pipe(
        takeWhile(() => this.alive),
        debounceTime(300),
      )
      .subscribe(res => this.changes.emit(res));
  }


  private createForm(): FormGroup {
    const controls: Filters = {
      name: null,
      tags: null,
      premiere: null,
    };
    return this.formBuilder.group(controls);
  }

}
