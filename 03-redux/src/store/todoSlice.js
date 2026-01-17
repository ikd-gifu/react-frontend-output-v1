// Store（全体）の組み立て
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TODOS, INITIAL_UNIQUE_ID } from '../constants/data';
/**
 * createSlice で以下を自動生成:
 * 1. Action Types（文字列定数）
 * 2. Action Creators（アクション作成関数）
 * 3. Reducer（状態更新ロジック）
 */
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: INITIAL_TODOS,
    uniqueId: INITIAL_UNIQUE_ID,
  },
  reducers: {
    addTodo: (state, action) => {
      // action.payloadに新しいTodoのタイトルが入っている
      // stateには現在のReduxの状態が入っている
      const nextId = state.uniqueId + 1;
      state.todos = [
        ...state.todos, // 既存のtodosを展開
        { // 新しいTodoを追加
          id: nextId,
          title: action.payload,
        },
      ];
      //次回はnextIdから始まるように記録
      // DBの自動採番のイメージ
      state.uniqueId = nextId;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  },
});

/**
 * Action Creators をエクスポート（コンポーネントで使う）
 * createSlice が自動生成したもの
 * 
 * 例: addTodo("新しいTodo") → { type: "todo/addTodo", payload: "新しいTodo" }
 */
export const { addTodo, deleteTodo } = todoSlice.actions;

/**
 * Reducer をエクスポート（Storeに登録する。store/index.js で使われる）
 */
export default todoSlice.reducer;
