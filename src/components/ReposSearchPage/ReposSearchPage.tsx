import React from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import RepoList from '@components/RepoList';
import SearchIcon from '@components/SearchIcon';
import { StatusHTTP } from '@src/shared/store/ApiStore/types';
import GitHubStore from '@src/store/GitHubStore';
import { RepoItem } from '@src/store/GitHubStore/types';

import './repository-list.css';

const ReposContext = React.createContext({
  reposArray: [] as Array<RepoItem>,
  setReposArray: (() => {}) as React.Dispatch<React.SetStateAction<RepoItem[]>>,
});

const Provider = ReposContext.Provider;

const gitHubStore = new GitHubStore();

export const useReposContext = () => React.useContext(ReposContext);

const ReposSearchPage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [reposArray, setReposArray] = React.useState<Array<RepoItem>>([]);
  const [isLoading, setLoading] = React.useState<Boolean>(false);

  const buttonOnClick = async () => {
    setLoading(true);
    const params = { org: inputValue };
    const answer = await gitHubStore.getOrganizationReposList(params);

    if (answer.HTTPStatus !== StatusHTTP.OK) {
      setLoading(false);
      // Дорисовать сообщение об ошибке
      return;
    }

    setReposArray(answer.data as RepoItem[]);
    setLoading(false);
  };

  return (
    <div className="repository-list">
      <Input value={inputValue} onChange={onInputChange} />
      <Button onClick={buttonOnClick}>
        <SearchIcon />
      </Button>
      <Provider value={{ reposArray, setReposArray }}>
        <RepoList />
      </Provider>
    </div>
  );
};

export default ReposSearchPage;
