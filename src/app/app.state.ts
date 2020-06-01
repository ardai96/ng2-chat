import {UserState} from "./user/user.state";
import {ChatState} from "./chat/store/chat.state";

export interface AppState {
  user: UserState;
  chat: ChatState;
}
