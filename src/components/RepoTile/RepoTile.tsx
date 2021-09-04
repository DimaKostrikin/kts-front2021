import Avatar from '@components/Avatar';
import StarIcon from '@components/StarIcon';
import { RepoItem } from '@src/store/GitHubStore/types';

import './repo.css';

type RepoTileProps = {
  item: RepoItem;
};

const RepoTile: React.FC<RepoTileProps> = ({ item }) => {
  const itemDate = new Date(item.updated_at);
  const strDate = itemDate.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return (
    <div className="repo-card">
      <Avatar />
      <ul className="repo-card__info">
        <li className="repo-card__title">{item.full_name}</li>
        <li className="repo-card__author">{item.owner.login}</li>
        <StarIcon fill="#FF9432" />
        <li className="repo-card__rating">{item.stargazers_count}</li>
        <li className="repo-card__update">{`Upd. ${strDate}`}</li>
      </ul>
    </div>
  );
};

export default RepoTile;
