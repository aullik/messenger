import { MessageMedia } from './../../model/media';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { User } from './../../model/user';
import { BackendService } from './../../service/backend.service';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FeedMessage } from 'src/app/model/feed-message';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit, AfterViewInit {
  icon: any;
  user: User;

  form: FormGroup;
  colorControl = new FormControl('primary');
  loading: boolean = false;


  @ViewChild('fileUpload', {static: false}) fileInput: ElementRef;
  files = [];

  constructor(
    private backend: BackendService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    fb: FormBuilder
    ) {
      this.form = fb.group({
        color: this.colorControl,
        content: new FormControl()
      });
   }

  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    new Promise(() => {
      this.user =  this.backend.getUser();
      this.icon = this.domSanitizer.bypassSecurityTrustUrl(this.user.icon);
    });
  }

  ngAfterViewInit() { }

  onFileChanged(event) {
    for (const iterator of event.target.files) {
      const i = iterator as File;
      const reader = new FileReader();
          reader.addEventListener('load', () => {
            this.files.push({ filReaderPath: reader.result.toString(), name: i.name, inProgress: false, progress: 0});
          }, false);
          if (i) {
            reader.readAsDataURL(i);
          }
    }
    this.uploadImage();
  }

  private uploadImage() {
    this.files.forEach(file => {
      this.uploadImages(file);
    });
  }

  uploadImages(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    const textOfUser = formModel.content;
    const mediaContent: MessageMedia[] = this.files.map(
          f =>  new MessageMedia(null,null,f.filReaderPath, new Date().toTimeString(),null,null)
      );
    this.backend.setNewMessage(
      new FeedMessage(null,this.user.name, this.user.nickname,textOfUser, mediaContent, new Date().toTimeString(), null)
      );
    this.files = []
    this.form.reset();
    this.loading = false;
  }

  getErrorMessage() {
    if (this.form.hasError('required')) {
      return 'You must enter a value';
    }
  }

}
