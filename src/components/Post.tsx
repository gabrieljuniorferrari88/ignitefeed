import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';

interface PostProps {
  author: string;
  content: string;
}

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar
            hasBorder
            src="https://github.com/gabrieljuniorferrari88.png"
          />
          <div className={style.authorInfo}>
            <strong>Gabriel Ferrari</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de Agosto às 14:38h" dateTime="2022-08-03 14:38:01">
          Publicado há 1h
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
