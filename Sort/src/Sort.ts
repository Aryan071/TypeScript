// const collection:number[] = [12,-9,4,8,22];

export abstract class Sort {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  constructor(public collection: number[]){}
  abstract length: number;

  sort(): void {
    const { length } = this.collection;

    // let k = 0;
    // while (k<length) {
    //   if(this.collection[k] > this.collection[k+1]){
    //       let temp:number = this.collection[k];
    //       this.collection[k] = this.collection[k+1];
    //       this.collection[k+1] = temp;
    //   }
    //   k = k+1;
    // }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }

    for (let i = 0; i < length; i++) {
      console.log(this.collection[i]);
    }
  }
}

