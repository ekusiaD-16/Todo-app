export class State {
    no    : number = -1;
    name : string = '---'

    static stateList : string[] = [
      'new',
      'doing',
      'pending',
      'finished',
    ]
    constructor(no:number) {
      this.no    = no;
      this.name = State.stateList[this.no];
    }
  }