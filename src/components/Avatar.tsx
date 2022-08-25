import { ImgHTMLAttributes } from 'react';
import style from './Avatar.module.css';

//https://github.com/gabrieljuniorferrari88.png

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder, ...rest }: AvatarProps) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      {...rest}
    />
  );
}
