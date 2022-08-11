import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';

interface CommentProps {
  content: string;
}

export function Comment({ content }: CommentProps) {
  return (
    <div className={style.comment}>
      <Avatar src="https://github.com/gabrieljuniorferrari88.png" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Gabriel Ferrari</strong>
              <time
                title="03 de Agosto às 14:38h"
                dateTime="2022-08-03 14:38:01"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
