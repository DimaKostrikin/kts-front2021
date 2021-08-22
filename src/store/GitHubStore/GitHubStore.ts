import ApiStore from '../../shared/store/ApiStore';
import {IGitHubStore, GetOrganizationReposListParams, RepoItem, ApiResp} from './types';
import { HTTPMethod, RequestParams, StatusHTTP } from 'src/shared/store/ApiStore/types';

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com'); // DONE: не забудьте передать baseUrl в конструктор

    // DONE: реализовать интерфейс IGitHubStore

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        // DONE: Здесь сделайте вызов из this.apiStore и верните результат
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories

        const rp: RequestParams<GetOrganizationReposListParams> = {
            method: HTTPMethod.GET,
            endpoint: `orgs/${params.org}/repos`,
            headers: { 'accept': 'application/vnd.github.v3+json'},
            data: params
        }

        const answer = await this.apiStore.request(rp);

        const apiResp: ApiResp<RepoItem[]> = {
            data: answer.data as RepoItem[],
            HTTPStatus: StatusHTTP.OK
        }

        return apiResp;
    }
}