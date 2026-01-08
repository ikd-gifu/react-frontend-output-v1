import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.css";

export const TodoList = ({ todoList }) => {
  return (
    <div className={styles.container}>
      {todoList.length === 0 ? (
        <p className={styles.emptyMessage}>Todoがありません</p>
      ) : (
        <ul className={styles.list}>
          {todoList.map((todo) => (
            <li key={todo.id} className={styles.item}>
              <span className={styles.title}>{todo.title}</span>
              <div className={styles.far}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
