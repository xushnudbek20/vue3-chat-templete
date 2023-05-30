interface Chats {
  id: number,
  name: string,
  last_seen: string,
  img:string,
  data: Chat
}

interface Chat {
  id: number,
  chat_id: number,
  from_user_id: number,
  message: string|number,
  is_showed: boolean,
  showed_at: string,
  created_at: string,
  updated_at: string
}
export default Chats