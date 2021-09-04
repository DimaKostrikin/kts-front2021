/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */

import { StatusHTTP } from 'src/shared/store/ApiStore/types';

export interface GetOrganizationReposListParams {
  org: string;
  type?:
    | 'all'
    | 'public'
    | 'private'
    | 'forks'
    | 'sources'
    | 'member'
    | 'internal';
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  direction?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
}

export interface RepoItem {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  created_at: string;
  updated_at: string;
}

export interface ApiResp<Type> {
  data: Type;
  HTTPStatus: StatusHTTP;
}

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>>;
}
