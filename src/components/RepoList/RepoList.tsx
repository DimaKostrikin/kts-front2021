import { useReposContext } from '@components/ReposSearchPage/ReposSearchPage';
import RepoTile from '@components/RepoTile';

const RepoList = () => {
  const repos = useReposContext();

  return (
    <>
      {repos.reposArray.map((rep) => {
        return <RepoTile key={rep.id} item={rep} />;
      })}
    </>
  );
};

export default RepoList;
