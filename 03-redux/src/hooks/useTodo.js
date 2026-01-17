import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";  // ← Redux フック
import { addTodo, deleteTodo } from "../store/todoSlice"; // ← Action Creators

export const useTodo = () => {
  // todo listの状態管理
  // Redux store から状態を取得
  const originalTodoList = useSelector((state) => state.todo.todos); 
  // useDispatch: Action を dispatch する関数を取得
  const dispatch = useDispatch();

  // 追加用の入力値の状態管理 初期値を空文字に設定
  const [addInputValue, setAddInputValue] = useState("");
  // 検索用のキーワードの状態管理 初期値を空文字に設定
  const [searchInputValue, setSearchInputValue] = useState("");
  // 検索用の入力値に基づいて表示するTodoリストを絞り込む
  const showTodoList = useMemo(() => {
    return originalTodoList.filter((todo) =>
      // 検索キーワードに前方一致したTodoだけを一覧表示
      todo.title.toLowerCase().startsWith(searchInputValue.toLowerCase())
    );
  // originalTodoListかsearchInputValueが変化したときに再計算
  }, [originalTodoList, searchInputValue]);

    /**
   * addInputValueの変更処理 ユーザーの入力を受け取る
   * @param {Event} e
   */
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);
  
  /**
 * Todo新規登録処理
 * @param {KeyboardEvent} e - キーボードイベント
 */

  const handleAddTodo = (e) => {
    // IME変換中は処理しない
    if (e.key === "Enter" && !e.nativeEvent.isComposing && addInputValue !== "") {
      // Redux の addTodo アクションを dispatch
      dispatch(addTodo(addInputValue));

      // 入力フォームを空にする
      setAddInputValue("");
    }
  };

  // Todo削除処理 @param は /**  */ のJSDocコメント内で使う
  /**
  * @param {number} targetId - 削除対象のTodoのID
  * @param {string} targetTitle - 削除対象のTodoのタイトル
  */
  const handleDeleteTodo = (targetId, targetTitle) => {
    // 確認ダイアログを表示
    if (window.confirm(`「${targetTitle}」を削除しますか？`)) {
      // Redux Store の deleteTodo アクションを dispatch
      // 自動で状態が更新される
      dispatch(deleteTodo(targetId));
      
      // 手動で状態を更新する必要がないため、以下の行は不要
      // setOriginalTodoList(newTodoList);
    }
  };

  return {
    showTodoList, // 状態
    addInputValue,
    searchInputValue,
    handleDeleteTodo, // 関数
    handleAddTodo,
    onChangeAddInputValue,
    setSearchInputValue
  };
};
