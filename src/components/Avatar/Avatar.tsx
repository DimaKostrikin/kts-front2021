type AvatarProps = {
  src?: string;
  alt?: string;
};

const baseAvatarUrl =
  'https://img2.freepng.ru/20180204/owe/kisspng-juice-lemon-tangerine-grapefruit-orange-fruit-5a77af8e4b9f06.5103260515177931663098.jpg';

const Avatar = ({ src = baseAvatarUrl, alt }: AvatarProps) => {
  return (
    <div className="repo-card__avatar">
      <img className="img-cover" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
