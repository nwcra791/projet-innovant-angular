import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from "angularfire2/database";

export class model {
  public src: string;
  public current: number;
  public path: string;
}

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  providers: [UploadService, AngularFireAuth, AngularFireDatabase]
})
export class UploadFormComponent implements OnInit {
  model: model;
  selectedFiles: FileList;
  currentUpload: Upload;
  current: number;
  public src : string;
  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.model = new model;
    this.model.src = "../../assets/add_image.jpg";
    this.model.current = 1;
    this.model.path = "/img_offer"
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, this.model);
    this.current = this.current + 1;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, this.model);
  }

 /* uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
    )
  }*/
}
