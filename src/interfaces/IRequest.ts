export interface IGetArgs {
  endpoint: string;
  headers?: any;
}

export interface IPostArgs {
  endpoint: string;
  data: any;
  headers?: any;
}

export interface IDeleteArgs{
  endpoint: string;
  headers?: any;
}

export interface IHttpService<T> {
  get(args: IGetArgs): T;
  post(args: IPostArgs): T;
  put(args: IPostArgs): T;
  delete(args: IDeleteArgs): T;
}
