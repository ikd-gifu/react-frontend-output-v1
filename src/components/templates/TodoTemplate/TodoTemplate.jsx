import { useState } from "react";
import styles from "./style.module.css";
import { TodoList } from "../../organisms/";
import { INITIAL_TODOS } from "../../../constants/data";

export const TodoTemplate = () => {
  // todo listの状態管理
  // const [現在の値, 値を更新するための関数] = useState(初期値);
  const [originalTodoList, setOriginalTodoList] = useState(INITIAL_TODOS );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo アプリ</h1>
      {/* Todo追加エリア */}
      {/* Todo検索フォームエリア */}
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {/* 状態を渡す */}
        <TodoList todoList={originalTodoList} />
      </section>
    </div>
  );
};
