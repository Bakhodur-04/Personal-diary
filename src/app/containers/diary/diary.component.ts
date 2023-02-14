import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/interface/entry.data';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})

export class DiaryComponent implements OnInit {
  entries: Entry[] = [];
  login!: string;
  loading: boolean = true;

  constructor(public dataService: DataService, private auth: AuthService) {  
    this.login = this.auth.loginName;
    
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

      this.entries = this.entries.filter((item) => item.login === this.login)
    })
  }

  ngOnInit(): void {
    
  }

  logOut() {
    this.auth.logOut()
  }
}

