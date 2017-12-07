import { Component, OnInit } from '@angular/core';
import { NameDataService } from './names/name-data.service';
import { Name } from './names/name';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NameDataService]
})
export class AppComponent implements OnInit{
  title = 'app';
  names: Name[] = [];
  nameCtrl: FormControl;

  constructor(
    private nameDataService: NameDataService
  ) {
    this.nameCtrl = new FormControl();
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
    if (!name) {return;}
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

}
