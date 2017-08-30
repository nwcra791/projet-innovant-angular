import { Injectable } from '@angular/core';
import {Upload} from "./upload";
import { AngularFireAuth } from 'angularfire2/auth'
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from 'firebase';
import 'firebase/storage'

@Injectable()
export class UploadService {

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase) { }
  private basePath:string = '/profile-img';
  //uploads: FirebaseListObservable<Upload[]>;

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
          console.log(upload);
        },
        (error) => {
          // upload failed
          console.log(error)
        },
        () => {
          // upload success
          upload.url = uploadTask.snapshot.downloadURL
          upload.name = upload.file.name
          this.saveFileData(upload)
        }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

}
