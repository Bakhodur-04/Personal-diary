import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'src/app/interface/entry.data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit{
  entry: Entry = {
    id: 0,
    time: 0,
    paragraph: ''
  };
  entryId!: number;
  index!: number;
  lol!: Entry;

  constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.entryId = this.route.snapshot.queryParams['id']

    // this.dataService.getEntries().subscribe((data) => {
    //   let lo = data.find(item => item.id == this.entryId);

    //   this.lol = {
    //     id: lo!.id,
    //     time: lo!.time,
    //     paragraph: lo?.paragraph
    //   }

    // })

    this.dataService.getEntry(this.entryId).subscribe((item) => {
      this.entry = item
    })
  }

  ngOnInit(): void {
  
  }

  onCancel() {
    this.router.navigate(['/diary'])
  }
}
