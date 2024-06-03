export class State {
    no    : number = -1;
    name : string = '---'

    static stateList : string[] = [
      'new',
      'doing',
      'pending',
      'finished',
      'deleted',
    ]
    constructor(no:number) {
      this.no    = no;
      this.name = State.stateList[this.no];
    }

    changeState(no:number | string) {
      if (typeof(no)==='number') {
        this.no = no;
        this.name = State.stateList[this.no];
      }
      else {
        this.no = State.stateList.indexOf('no');
        this.name = no;
      }
    }

  }