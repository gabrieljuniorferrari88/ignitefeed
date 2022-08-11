import style from './Avatar.module.css';

//https://github.com/gabrieljuniorferrari88.png

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder }: AvatarProps) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src}
    />
  );
}
