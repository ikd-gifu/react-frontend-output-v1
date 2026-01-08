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
              <button className={styles.deleteButton}>削除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
