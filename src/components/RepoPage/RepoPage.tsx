import { useParams } from 'react-router-dom';

type RepoPageParams = {
  id: number;
};

const RepoPage = () => {
  const { id } = useParams() as unknown as RepoPageParams;

  return <div>REPOPAGE {id}</div>;
};

export default RepoPage;
