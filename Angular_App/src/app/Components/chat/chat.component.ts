import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService, Message } from 'src/app/Services/chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  //--------------
  messages: Message[] = [];
  value: string='';

constructor(public chatService:ChatService,private modalService: NgbModal) { }

ngOnInit(): void {
  this.chatService.conversation.subscribe((val)=>{
    this.messages=this.messages.concat(val);
  })
}

  sendMessage() {
  this.chatService.getBotAnswer(this.value);
  this.value = '';
}

//-----------------
}
