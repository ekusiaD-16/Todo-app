import { State } from "./state";

export class Task {
    no    : number;
    state : State;
    title : string;
    desc  : string;
    check : boolean;
    constructor(no:number,stateNo:number,title:string,desc:string) {
      this.no    = no;
      this.state = new State(stateNo);
      this.title = title;
      this.desc  = desc;
      this.check = false;
    }
  }