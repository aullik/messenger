import { Injectable } from '@angular/core';
import {DgraphClient} from 'dgraph-js-http/lib/client'
import {DgraphClientStub} from 'dgraph-js-http/lib/clientStub'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private clientStub: DgraphClientStub;
  private dbClient: DgraphClient;
  constructor() {
    this.clientStub = new DgraphClientStub("http://localhost:8080",false,);
  }

  connect() {
    this.dbClient = new DgraphClient(this.clientStub);
    console.log("ping");
  }

  async test() {
    const txn = this.dbClient.newTxn();
    const content = [ {"name": "Karthic", "age": 28}, {"name": "Jessica", "age": 31}];
    await txn.mutate({ setJson: content });
    const query = `
    query all(){
        people(func: has(name)) {
          name
          age
        }
      }
    `;
      const res = await this.dbClient.newTxn().queryWithVars(query);
      const ppl = res.data;
      ppl.people.forEach((person) => console.log(person.name));
  }
}
