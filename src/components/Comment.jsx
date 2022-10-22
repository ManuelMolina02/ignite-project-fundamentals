import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  const imageUser = "https://avatars.githubusercontent.com/u/63245910?v=4";

  return (
    <div className={styles.comment}>
      <Avatar src={imageUser} class={"avatarCommentBox"} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Manuel Molina</strong>

              <time
                title="10 de outubro às 20:30"
                dateTime="2022-10-10 20:30:00"
              >
                1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parrabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
