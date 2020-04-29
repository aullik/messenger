import { MessageMedia } from './../model/media';
import { Injectable } from '@angular/core';
import {DgraphClient} from 'dgraph-js-http/lib/client';
import {DgraphClientStub} from 'dgraph-js-http/lib/clientStub';
import { Txn } from 'dgraph-js-http/lib/txn';
import * as DB_ERROR from 'dgraph-js-http/lib/errors';
import * as DbType from 'dgraph-js-http/lib/types';
import {User} from '../model/user';
import { FeedMessage, DbMessage } from '../model/feed-message';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // database access variables
  private clientStub: DgraphClientStub = new DgraphClientStub(environment.dbUrl,false,);
  private dbClient: DgraphClient;

  // TODO: remove test data
  private tenantDump : string[] = ['01','02','03','04'];
  private userDump: User[] = [
    { id: '01', nickname: 'ddd', name: 'Random user 0', tenantId: this.tenantDump[0],icon: "assets/icon.svg"},
    { id: '02', nickname: 'sda', name: 'Random user 1', tenantId: this.tenantDump[0],icon: "assets/icon.svg"},
    { id: '03', nickname: 'vcbvb', name: 'User 2', tenantId: this.tenantDump[0] ,icon: "assets/icon.svg"},
    { id: '04', nickname: 'laösdlö', name: 'User 3', tenantId: this.tenantDump[0] ,icon: "assets/icon.svg"},
    { id: '05', nickname: 'epw', name: 'User 1', tenantId: this.tenantDump[1] ,icon: "assets/icon.svg"},
    { id: '06', nickname: 'iqwe', name: 'User 4', tenantId: this.tenantDump[1] ,icon: "assets/icon.svg"},
    { id: '07', nickname: 'yxc', name: 'User 10202', tenantId: this.tenantDump[1] ,icon: "assets/icon.svg"},
    { id: '08', nickname: 'vcn', name: 'User 5', tenantId: this.tenantDump[2] ,icon: "assets/icon.svg"},
    { id: '09', nickname: 'qwef', name: 'Rand user', tenantId: this.tenantDump[2] ,icon: "assets/icon.svg"},
    { id: '10', nickname: 'blövc', name: 'User 6', tenantId: this.tenantDump[3] ,icon: "assets/icon.svg"},
    { id: '11', nickname: 'fgd', name: 'User 8', tenantId: this.tenantDump[3] ,icon: "assets/icon.svg"},
    { id: '12', nickname: 'vckl', name: 'User 7', tenantId: this.tenantDump[3] ,icon: "assets/icon.svg"},
    { id: '13', nickname: 'qwer', name: 'User 9', tenantId: this.tenantDump[3] ,icon: "assets/icon.svg"},
    ];
  private messageDump: DbMessage[] = [
    {id: '14', user: this.userDump[0].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '15', user: this.userDump[0].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '16', user: this.userDump[0].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '17', user: this.userDump[0].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '18', user: this.userDump[1].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '19', user: this.userDump[1].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '20', user: this.userDump[1].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '21', user: this.userDump[2].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '22', user: this.userDump[2].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '23', user: this.userDump[2].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '24', user: this.userDump[2].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '25', user: this.userDump[3].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '26', user: this.userDump[3].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '27', user: this.userDump[4].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '28', user: this.userDump[4].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '29', user: this.userDump[5].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '30', user: this.userDump[5].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '31', user: this.userDump[5].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '32', user: this.userDump[5].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '33', user: this.userDump[6].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '34', user: this.userDump[7].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '35', user: this.userDump[7].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '36', user: this.userDump[8].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '37', user: this.userDump[8].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '38', user: this.userDump[8].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '39', user: this.userDump[8].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '40', user: this.userDump[8].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '41', user: this.userDump[9].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '42', user: this.userDump[10].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '43', user: this.userDump[10].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '44', user: this.userDump[11].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '45', user: this.userDump[11].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '46', user: this.userDump[11].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '47', user: this.userDump[12].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    {id: '48', user: this.userDump[12].nickname, content: 'test content !!!!', timeStamp: new Date().toTimeString()},
    ];
  private feedDump: FeedMessage[] = this.messageDump.map(m =>  {
      const u = this.userDump.filter(u => u.nickname === m.user)[0];
      return new FeedMessage(
        m.id, u.name,
        u.nickname,
        m.content,
        [
          new MessageMedia(null,'name1',null,new Date().toTimeString(),"https://upload.wikimedia.org/wikipedia/commons/c/cb/Broadway_tower_edit.jpg",null),
          new MessageMedia(null,'name2',null,new Date().toTimeString(),"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/HumphreysPeak.jpg/800px-HumphreysPeak.jpg",null)
        ],
        m.timeStamp);
    }).filter(m => m !== null);

  constructor() {

  }

  async connect(): Promise<DbType.Payload> {
    this.dbClient = new DgraphClient(this.clientStub);
    this.dbClient.setDebugMode(true);
    //TODO: should be removed
    return this.createSchema()
    .then(() => {
      var f = (txn: Txn) => { return this.insertContent(txn, this.userDump, this.messageDump); };
      return this.transition(f);
      });
  }

  //TODO should be removed
  private async createSchema(): Promise<DbType.Payload> {
    // TODO: should be replaced
    // clean db
    return this.dbClient.alter({ dropAll: true })
      .then((r) => r.data as any)
      // check if modification was successful
      .then((r) => {
        if (r.code !== "Success") throw new Error(r)
        })
      // create schema types, is later used by the objects
      .then(() =>
        `id: string @index(exact) .
          nickname: string .
          name: string .
          user: string .
          tenantId: string .
          content: string .
          timeStamp: string .`
        )
      .then((dbSchema) => this.dbClient.alter({ schema: dbSchema }))
  }

  private async transition(f: any) {
    var txn = this.dbClient.newTxn();
    var result: any = null;
    try {
      result = await f(txn);
      await txn.commit();
    } catch(e) {
      if (e === DB_ERROR.ERR_ABORTED) {
        console.log("Something bad happend by db transition");
      }
    } finally {
       await txn.discard();
    }
    return result ? result.data : null;
  }

  private async insertContent(txn: Txn, userObj: User[] = null, messages: DbMessage[] = null): Promise<DbType.Payload>{
    // insert content
    var userUid: any = null;
    var uidMList: any = null;
    if (userObj) {
      var uidList = await txn.mutate({ setJson: this.userDump });
      userUid = Object.keys(uidList.data.uids).map((key,i) => [this.userDump[i], uidList.data.uids[key]]);
    }
    if (messages) {
      var uids: any = await txn.mutate({ setJson: this.messageDump });
      uidMList = Object.keys(uids.data.uids).map((key,i) => [this.messageDump[i], uids.data.uids[key]]);
    }
    if (userUid && uidMList) {
      // set graph relations between user and their messages
      var messageFromUser = uidMList.map((m) => (
        {
          "uid": m[1],
          "from":
          {
            "uid": this.getUser(m[0].user,userUid)[1]
          }
        })
      );
      return txn.mutate({ setJson: messageFromUser });
    }
    return new Promise((reject) => { throw new Error("Failed")});
  }

  async getFeed(): Promise<FeedMessage[]> {
    // create callback function
    // var req = async (txn: Txn) => {
    //   var query = `query mFrom() {
    //       mFrom(func: has(id)) {
    //         id
    //         user
    //         content
    //         timeStamp
    //         answerOfId
    //         from {
    //           name
    //           nickname
    //         }
    //      }
    //   }`;
    //   var res = await txn.query(query);
    //   return res;
    // };
    // return this.transition(req).then((r) =>
    //   r.mFrom
    //     .filter(v => v.content)
    //     .map((m: any) =>
    //       new FeedMessage(m.id, m.from.name, m.user, m.content, m.timeStamp, m.answerOfId)
    //     ) as FeedMessage[]
    // );
    return new Promise((resolve,rejects) => {
      resolve(this.feedDump)
    })
  }

  private cartesianProductOf(objList: any[][]) {
    return objList.reduce((a, b) => {
            return a
                .map((x) => b.map((y) => x.concat([y])))
                .reduce((a, b) => a.concat(b), [])
        }, [[]]);
  }

  private getUser(nickname: string, userList: any[][]) {
    var users = userList.filter(u => u[0].nickname === nickname);
    return users.length > 0 ? users[0] : null;
  }

  public getAllUser(): Promise<User[]> {
    return new Promise((resolve,rejects) => {
      resolve(this.userDump)
    })
  }
}
