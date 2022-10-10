import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/63245910?v=4" />

          <div className={styles.authorInfo}>
            <strong>Manuel Molina</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="10 de outubro às 20:30" dateTime="2022-10-10 20:30:00">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galerios!</p>
        <p>Tudo certérios?!</p>

        <p>
          asdasasd asd adasd asdas das asdas dasd asdasd as asd asdasdasdasd
          asdasdas as dasd asdas dasd asas ads ds as as dasd asd asda ssadas
          dasd
        </p>
        <p>
          <a href="#">Olha nois ai</a>
        </p>
        <p>
          <a href="#">#react</a>
          <a href="#">#ehNois</a>
          <a href="#">#node</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
