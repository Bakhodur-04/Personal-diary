import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Entry } from 'src/app/interface/entry.data';
// import EditorJS from '@editorjs/editorjs';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})

export class CreatePageComponent implements OnInit {
  htmlContent = '';
  editor!: any;
  isSave: boolean = false;
  entry!: Entry;
  date = new Date();

  constructor(public dataService: DataService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    // this.editor = new EditorJS({

    //   holder: 'editorjs',
    //   placeholder: 'Let`s write an awesome story!',
    //   tools: {
    //     // underline: Underline,
    //   }
    // });
  }

  onSubmit() {
    this.isSave = true

    this.entry = {
      id: uuidv4(), 
      time: new Date().getTime(), 
      paragraph: this.htmlContent,
      login: this.auth.loginName, 
    };

    this.dataService.addEntry(this.entry)

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
    console.log(this.htmlContent, 'lol', this.entry);
    this.router.navigate(['/diary']);
  }

  onCancel() {
    this.router.navigate(['/diary'])
  }
}
