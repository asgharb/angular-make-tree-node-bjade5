import { Component, VERSION } from '@angular/core';

interface nodeMOdelFlat {
  Id: number;
  Text: string;
  Desc: string;
  ParentId: number;
}

interface nodeMOdel {
  Id: number;
  Text: string;
  Desc: string;
  ParentId: number;
  children: nodeMOdel[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: nodeMOdelFlat[];

  constructor() {
    this.data = [
      {
        Id: 1,
        Text: 'What kind of apple is it?',
        Desc: 'Desc_1',
        ParentId: 0,
      },
      {
        Id: 2,
        Text: 'Green Apple',
        Desc: 'Desc_2',
        ParentId: 1,
      },
      {
        Id: 3,
        Text: 'Red Apple',
        Desc: 'Desc_2',
        ParentId: 1,
      },
      {
        Id: 4,
        Text: 'Purple GMO Apple',
        Desc: 'Desc_4',
        ParentId: 1,
      },
      {
        Id: 5,
        Text: 'What is the issue with the apple?',
        Desc: 'Desc_5',
        ParentId: 2,
      },
      {
        Id: 6,
        Text: 'Spoiled.',
        Desc: 'Desc_6',
        ParentId: 5,
      },
      {
        Id: 7,
        Text: 'Taste Bad.',
        Desc: 'Desc_7',
        ParentId: 5,
      },
      {
        Id: 8,
        Text: 'Too Ripe.',
        Desc: 'Desc_8',
        ParentId: 5,
      },
      {
        Id: 9,
        Text: 'Is not an apple.',
        Desc: 'Desc_9',
        ParentId: 5,
      },
      {
        Id: 10,
        Text: 'The apple was not green.',
        Desc: 'Desc_10',
        ParentId: 5,
      },
    ];
  }

  clickBtn() {
    let data_2: nodeMOdel[] = this.data.map((value: any) => {
      return {
        Id: value.Id,
        Text: value.Text,
        Desc: value.Desc,
        ParentId: value.ParentId,
        children: [],
      };
    });
    console.log(data_2);

    let tree = this.makeTree(data_2, 0);
    console.log(tree);
  }

  makeTree(nodes: any[], ParentId: any): any {
    return nodes
      .filter((node) => node.ParentId === ParentId)
      .reduce(
        (tree, node) => [
          ...tree,
          {
            ...node,
            children: this.makeTree(nodes, node.Id),
          },
        ],
        []
      );
  }
}
