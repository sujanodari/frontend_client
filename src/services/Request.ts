import axios, { AxiosInstance, AxiosPromise } from "axios";

import environment from "../config/environments";
import {
  IPostArgs,
  IGetArgs,
  IDeleteArgs,
  IHttpService,
} from "../interfaces/IRequest";

const apiUrl: string = environment.apiUrl as string;

export default class HttpClient<T extends AxiosPromise<any>>
  implements IHttpService<T> {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: apiUrl,
      responseType: "json",
      withCredentials: false,
    });
  }

  get(args: IGetArgs): T {
    const headers: any = {
      ...args.headers,
    };
    return this.instance.get(args.endpoint, {
      headers,
    }) as T;
  }

  post(args: IPostArgs): T {
    const headers: any = {
      ...args.headers,
    };

    return this.instance.post(args.endpoint, args.data, {
      headers,
    }) as T;
  }

  put(args: IPostArgs): T {
    const headers: any = {
      ...args.headers,
    };

    return this.instance.put(args.endpoint, args.data, {
      headers,
    }) as T;
  }

  delete(args: IDeleteArgs): T {
    const headers: any = {
      ...args.headers,
    };
    return this.instance.delete(args.endpoint, {
      headers,
    }) as T;
  }
}
