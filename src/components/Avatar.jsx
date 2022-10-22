import styles from "./Avatar.module.css";

export function Avatar(props) {
  function handleClass() {
    if (props.class === "avatarSidebar") {
      return styles.avatarSidebar;
    } else if (props.class === "avatarPost") {
      return styles.avatarPost;
    } else {
      return styles.avatarCommentBox;
    }
  }

  return <img src={props.src} className={handleClass()} />;
}
