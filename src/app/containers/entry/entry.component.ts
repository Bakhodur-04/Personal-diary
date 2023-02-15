import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Entry } from 'src/app/interface/entry.data';
import { DataService } from 'src/app/services/data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

/**
 * Class for Entry component.
 */
export class EntryComponent implements OnInit, OnChanges {

  editor!: any;
  entry!: Entry;

  config: AngularEditorConfig = {
    editable: false,
    showToolbar: false,
  };
  
  @Input() isSave!: boolean;
  @Input() entryData!: Entry;

  /**
   * Constructor for EntryComponent.
   * @param dataService - Service for connection database.
   * @param router - Object for navigation.
   */
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  /**
   * Method for deleting entry.
   * @param entry - Record.
   */
  deleteEntry(entry: Entry): void {
    this.dataService.removeEntry(entry.id)
  }

  /**
   * Method for change navigation.
   * @param id - Entry id.
   */
  change(id: string): void {
    this.router.navigate(['/edit', id])
  }

}
