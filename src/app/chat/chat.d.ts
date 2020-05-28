declare namespace ChatModule {
  export interface Chat {
    avatar: string;
    name: string;
    lastMessage: string;
    date: string;
    id: number;
    isChatGroup: boolean;
    messages?: ChatMessage[]
  }

  export interface ChatMessage {
      id: string;
      user: ChatUser;
      message: string;
      date: string;
  }

  export interface ChatUser {
      id: number;
      name: string;
      avatar: string;
  }

  export interface SendMessageDTO {
      message: string;
  }
}
