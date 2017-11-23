import { Component, OnInit } from '@angular/core';
import { NameDataService } from './names/name-data.service';
import { Name } from './names/name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NameDataService]
})
export class AppComponent {
  title = 'app';
  names: Name[] = [];

  constructor(
    private nameDataService: NameDataService
  ) {}

  public ngOnInit() {
    this.nameDataService
      .getAllNames()
      .subscribe(
        (names) => {
          this.names = names;
        }
      );
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

  // get names() {
  //   return this.nameDataService.getAllNames();
  // }
}
