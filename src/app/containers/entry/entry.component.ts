import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Entry } from 'src/app/interface/entry.data';
import EditorJS from '@editorjs/editorjs';
import { DataService } from 'src/app/services/data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit, OnChanges {

  editor!: any;
  entry!: Entry;

  config: AngularEditorConfig = {
    editable: false,
    showToolbar: false,
  };
  
  @Input() isSave!: boolean;
  @Input() entryData!: Entry;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.editor = new EditorJS({

    //   holder: 'editorjs',
    //   readOnly: true,
    //   inlineToolbar: true
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.isSave == true) {
    //   this.editor.save().then((outputData: any) => {
    //     this.entry = {
    //       id: outputData.blocks[0].id, 
    //       time: outputData.time, 
    //       paragraph: outputData.blocks[0].data.text, 
    //     };
    //     console.log(this.entry)
    //     console.log('Article data: ', outputData)
    //     this.dataService.addEntry(this.entry)
    //   }).catch((error: any) => {
    //     console.log('Saving failed: ', error)
    //   });
    // }
  }

  deleteEntry(entry: Entry) {
    this.dataService.removeEntry(entry.id)
  }

}
