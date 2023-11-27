import { isObject } from "lodash";

interface IPagination {
  page?: number;
  pageSize?: number;
  totalPage?: number;
  nextPage?: number;
  prevPage?: number;
  total?: number;
}
class MPagination {
  page?: number;
  pageSize?: number;
  totalRow?: number;
  constructor(data: IPagination) {
    this.page = data.page ? data.page - 1 : 0;
    this.pageSize = data.pageSize;
    this.totalRow = data.total;
  }
  static parsePaginationFromResponse(data: IPagination) {
    if (isObject(data)) {
      return new MPagination(data);
    }
    return {};
  }
}

export default MPagination;
