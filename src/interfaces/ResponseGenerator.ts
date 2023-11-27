//* Common interface
export interface List<T> extends Array<T> {
  [index: number]: T;
}

export interface ResponseGenerator<T = any> {
  config?: any;
  data: {
    data: {
      data: T;
       paging: {
        nextPage: number | null;
        page: number;
        pageSize: number;
        prevPage: number | null;
        total: number;
        totalPage: number;
      };
    };
  };
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface CommonPaginated {
  page: number;
  pageSize: number;
}
