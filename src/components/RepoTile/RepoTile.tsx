import Avatar from '@components/Avatar';
import { RepoItem } from '@src/store/GitHubStore/types';

type RepoTileProps = {
  item: RepoItem;
};

const RepoTile = ({ item }: RepoTileProps) => {
  return (
    <div className="repo-card">
      <Avatar />
      <ul className="repo-card__info">
        <li className="repo-card__title">{item.full_name}</li>
        <li className="repo-card__author">{item.owner}</li>
        <li className="repo-card__rating">{item.id}</li>
        <li className="repo-card__update">{item.name}</li>
      </ul>
    </div>
  );
};

export default RepoTile;
