import { MessageStatus } from "../enum/MessageStatus.enum";

export class Chat {
       id?: number;
       ChatId?: String;
       senderId?: String;
       recipientId?: String;
       senderName?: String;
       recipientName?: String;
       content?: String;
       timestamp?: Date;
       status? : MessageStatus
}