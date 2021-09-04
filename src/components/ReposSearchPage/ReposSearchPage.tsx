import React from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import RepoTile from '@components/RepoTile';
import SearchIcon from '@components/SearchIcon';
import { StatusHTTP } from '@src/shared/store/ApiStore/types';
import GitHubStore from '@src/store/GitHubStore';
import { RepoItem } from '@src/store/GitHubStore/types';

import './repository-list.css';

const gitHubStore = new GitHubStore();

const ReposSearchPage = () => {
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
      {reposArray.map((rep) => {
        return <RepoTile key={rep.id} item={rep} />;
      })}
    </div>
  );
};

export default ReposSearchPage;
