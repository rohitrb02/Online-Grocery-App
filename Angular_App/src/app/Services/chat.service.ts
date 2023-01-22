import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();

    botMessage:string=""
   messageMap = {
    "hi": "Hello",
    "who are you": "My name is Test Sat Bot",
    "what is your role": "Just guide for the user",
    "defaultmsg": "I can't understand your text. Can you please repeat"
  }
  
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    console.log(question);


    // for (var key in this.messageMap) {
    //   console.log("key " + key + " has value " + this.messageMap[key]);
    // }


    
    if(question=="hi")
      return this.messageMap["hi"]
    else if(question=="who are you")
      return this.messageMap["who are you"]
    else if(question=="what is your role")
      return this.messageMap["what is your role"]

    return this.messageMap['defaultmsg'];
  }
}
