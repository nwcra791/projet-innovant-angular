import { Injectable } from '@angular/core';
import {Upload} from "./upload";
import { AngularFireAuth } from 'angularfire2/auth'
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from 'firebase';
import 'firebase/storage'
import {model} from "../upload-form/upload-form.component";

@Injectable()
export class UploadService {

  constructor(private af: AngularFireAuth, private db: AngularFireDatabase) { }
  private basePath:string = '/profile-img';
  //uploads: FirebaseListObservable<Upload[]>;

  pushUpload(upload: Upload, model: model) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${model.path}/${upload.file.name}`).put(upload.file);
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
          //console.log(sessionStorage.getItem("user").toString());
          if (model.current <=  2 && model.path == "/img_offer") {
              var image = document.getElementById("img" + model.current) as HTMLImageElement;
              image.setAttribute("src", uploadTask.snapshot.downloadURL);
              model.current++;
              image = document.getElementById("img" + model.current) as HTMLImageElement;
              image.classList.remove("hidden");
          }
          upload.url = uploadTask.snapshot.downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(upload)
        }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

}
