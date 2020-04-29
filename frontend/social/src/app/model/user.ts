export class User {
  id: string;
  nickname: string;
  name: string;
  tenantId?: string;
  icon: string;

  constructor(
    id: string,
    nickname: string,
    name: string,
    tenantId: string = null,
    icon: string = null
  ) {
    this.id = id;
    this.nickname = nickname;
    this.name = name;
    this.tenantId = tenantId;
    this.icon = icon;
  }
}
