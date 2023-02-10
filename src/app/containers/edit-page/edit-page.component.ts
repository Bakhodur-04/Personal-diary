import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import EditorJS from '@editorjs/editorjs';
// import Underline from '@editorjs/underline';
import { Entry } from 'src/app/interface/entry.data';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit {
  editor!: any;
  isSave: boolean = false;
  entry!: Entry;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.editor = new EditorJS({

      holder: 'editorjs',
      tools: {
        // underline: Underline,
      }
    });
  }

  onSubmit() {
    this.isSave = true
    if (this.isSave == true) {
      this.editor.save().then((outputData: any) => {
        this.entry = {
          id: outputData.blocks[0].id, 
          time: outputData.time, 
          paragraph: outputData.blocks[0].data.text, 
        };
        console.log(this.entry)
        console.log('Article data: ', outputData)
        this.dataService.addEntry(this.entry)
      }).catch((error: any) => {
        console.log('Saving failed: ', error)
      });
    }
  }
}
