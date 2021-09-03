import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {

  formUser: FormGroup;
  valueQr: string = null;
  level: string;
  size: number;
  submitted = false;

  exportAsConfig: ExportAsConfig = {
    type: 'png',// the type you want to download
    elementIdOrContent: 'myTableElementId', // the id of html/table element
  }

  constructor(private formBuilder: FormBuilder,
    private exportAsService: ExportAsService) {
    this.level = "L";
    this.size = 600;
    this.valueQr = "HOLA MUNDO ESTOY SIN DATOS...!!"
  }

  //validate form fields
  buildForm() {
    this.formUser = this.formBuilder.group({
      filename:['', Validators.required],
      url: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  download() {
    let filename = this.formUser.get('filename').value;
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, filename).subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe(content => {
      console.log(content);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formUser.invalid) {
      return;
    }
    let value = this.formUser.get('url').value;
    this.valueQr = value;
    let size = this.formUser.get('size').value;
    this.size = size;
  }

  resetForm() {
    this.submitted = false;
    this.formUser.reset();
  }

  //convenience getter for easy access to form fields
  get formUserValidate() { return this.formUser.controls; }
}
