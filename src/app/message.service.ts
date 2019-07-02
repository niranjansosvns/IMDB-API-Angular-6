import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
 providedIn: 'root',
})


export class MessageService {
 messages: string[] = [];

 add(message: string) {
   this.messages.push(message);
 }

 clear() {
   this.messages = [];
 }
}