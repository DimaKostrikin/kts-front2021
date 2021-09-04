import qs from 'qs';

import {
  ApiResponse,
  IApiStore,
  RequestParams,
  StatusHTTP,
  HTTPMethod,
} from './types';

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    // DONE: Напишите здесь код, который с помощью fetch будет делать запрос
    const method = params.method || HTTPMethod.GET;

    let query = '';

    if (method === HTTPMethod.GET) {
      query = qs.stringify(params.data);
    }

    const answer = await fetch(`${this.baseUrl}/${params.endpoint}?${query}`, {
      method: method,
      headers: params.headers,
    });

    const answerJson = await answer.json();
    if (answer.ok) {
      return {
        success: true,
        data: answerJson as SuccessT,
        status: StatusHTTP.OK,
      };
    }

    return {
      success: false,
      data: answerJson as ErrorT,
      status: StatusHTTP.NOTFOUND,
    };
  }
}
