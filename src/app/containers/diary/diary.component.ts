import { Component } from '@angular/core';
import { Entry } from 'src/app/interface/entry.data';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})

export class DiaryComponent {
  entries: Entry[] = [];

  constructor(public dataService: DataService, private auth: AuthService) {
    this.dataService.getEntries().subscribe((data) => {
      this.entries = data.sort(function (now, next) {
        if (now.time < next.time) {
          return 1;
        }
        if (now.time > next.time) {
          return -1;
        }
        return 0;
      });
    })
  }

  logOut() {
    this.auth.logOut()
  }

}
