import {ApiResponse, IApiStore, RequestParams, StatusHTTP, HTTPMethod} from './types';

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        // DONE: Напишите здесь код, который с помощью fetch будет делать запрос
        const method = params.method || HTTPMethod.GET;

        if (method === HTTPMethod.GET) { // Составление qs
            let qs = '?';

            Object.entries(params.data).forEach(([key, val]) => {
                qs += `${key}=${val}&`;
            })

            params.endpoint += qs;
        }

        return fetch(this.baseUrl + params.endpoint, {
            method: method,
            headers: params.headers
        }).then((data: Response) => {
            if (data.ok) {
                return data.json().then(dataJson => {
                    return new Promise<ApiResponse<SuccessT, ErrorT>>((resolve, reject) => {
                        let apiResponse: ApiResponse<SuccessT, ErrorT> = {
                            success: true,
                            data: <SuccessT><unknown>dataJson,
                            status: StatusHTTP.OK
                        }
                        resolve(apiResponse);
                    })
                })
            }
            return data.json().then(dataJson => {
                return new Promise<ApiResponse<SuccessT, ErrorT>>((resolve, reject) => {
                    let apiResponse: ApiResponse<SuccessT, ErrorT> = {
                        success: false,
                        data: <ErrorT><unknown>dataJson,
                        status: StatusHTTP.NOTFOUND
                    }
                    resolve(apiResponse);
                })
            })
        })
    }
}