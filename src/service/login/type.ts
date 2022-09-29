export interface IAccount {
  nickname: string
  password: string
}

export interface ILoginResult {
  userId: number
  nickname: string
  token: string
}
