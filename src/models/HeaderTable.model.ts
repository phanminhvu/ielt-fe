
class MHeaderTable {
  key?: string;
  title?: string;
  asHtml?: boolean

  constructor(data: { key: string; title: string, asHtml?: boolean }) {
    this.title = data?.title;
    this.key = data?.key;
    this.asHtml = data?.asHtml;
  }

  //   static parseTodoListFromResponse(data: any) {
  //     if (isArray(data)) {
  //       return data.map((el) => new TodoModel(el));
  //     }

  //     return [];
  //   }
}

export default MHeaderTable;
