import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Name } from './names/name';
import { Frequency } from './frequency/frequency';
import { FrequencySearch } from './frequency/frequencySearch';

import { NameDataService } from './names/name-data.service';
import { FrequencyDataService } from './frequency/frequency-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NameDataService, FrequencyDataService]
})
export class AppComponent implements OnInit {
  names: Name[] = [];
  name: Name;
  frequencies: Frequency[];

  public nameForm = this.fb.group({
    nameField: ['', Validators.required]
  });

  constructor(
    private nameDataService: NameDataService,
    private frequencyDataService: FrequencyDataService,
    public fb: FormBuilder
  ) {
  }

  public ngOnInit() {
    this.nameDataService
      .getAllNames()
      .subscribe(
        (names) => {
          this.names = names;
        }
      );
  }

  displayFn(name: Name): string {
    if (!name) { return; }
    return name.name;
  }

  onAddName(name) {
    // this.nameDataService.addName(name);
    this.nameDataService
      .addName(name)
      .subscribe(
        (newName) => {
          this.names = this.names.concat(newName);
        }
      );
  }

  onRemoveName(name) {
    // this.nameDataService.deleteNamebyId(name.id);
    this.nameDataService
      .deleteNamebyId(name.id)
      .subscribe(
        (_) => {
          this.names = this.names.filter((n) => n.id !== name.id);
        }
      );
  }

  checkFrequency(event) {
    console.log(event);
    console.log(this.nameForm.value);

    const params: FrequencySearch = {
      'name': this.nameForm.value.nameField.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(),
      'genre': this.nameForm.value.nameField.genre
    };

    this.frequencyDataService
      .getAllFrequencies(params)
      .subscribe(
        (frequencies) => {
          console.log(frequencies);
          this.frequencies = frequencies;
        }
      );
  }

}
