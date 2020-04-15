export class User {
  id: string;
  nickname: string;
  name: string;
  tenantId?: string;

  constructor(
    id: string,
    nickname: string,
    name: string,
    tenantId: string = null
  ) {
    this.id = id;
    this.nickname = nickname;
    this.name = name;
    this.tenantId = tenantId;
  }
}
