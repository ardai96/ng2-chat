import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-content-message-sender',
  templateUrl: './chat-content-message-sender.component.html',
  styleUrls: ['./chat-content-message-sender.component.scss']
})
export class ChatContentMessageSenderComponent implements OnInit, AfterViewInit {

  @ViewChild('messageInput', { static: false })
  messageInput: ElementRef;

  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.messageInput.nativeElement.focus();
    });
  }

  public sendMessage(): void {

    console.log('MESSAGE SEND!');

    this.form.reset();
    this.messageInput.nativeElement.focus();
  }

  private createForm(): void {
    const fields = this.createFields();

    this.form = this.formBuilder.group(fields);
  }

  private createFields(): object {
    return {
      message: ['']
    };
  }

}
