import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'src/app/interface/entry.data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

/**
 * Class for editing entry.
 */
export class EditPageComponent implements OnInit{
  entry: Entry = {
    id: '',
    time: 0,
    paragraph: ''
  };
  entryId!: string;
  index!: number;
  lol!: Entry;

  /**
   * Constructor of EditPageComponent class.
   * @param dataService - Service of the database connection.
   * @param route - Object for query parametrs.
   * @param router - Object for navigation.
   */
  constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.entryId = this.route.snapshot.params['id']

    this.dataService.getEntry(this.entryId).subscribe((item) => {
      this.entry = item
    })
  }

  ngOnInit(): void {}

  /**
   * Save entry in database.
   * @param id - Id entry.
   * @param entry - Record.
   */
  onSave(id: string, entry: Entry): void {
    this.dataService.updateEntry(this.entryId, entry);
    this.router.navigate(['/diary'])
  }

  /**
   * Cancel saving of entry.
   */
  onCancel(): void {
    this.router.navigate(['/diary'])
  }
}
