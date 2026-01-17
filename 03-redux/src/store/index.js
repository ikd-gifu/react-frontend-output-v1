// Slice（部品）の定義
// ① todoSlice.jsのリデューサーをインポート
import { configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // todoSlice.reducer

// ② Store に登録
export default configureStore({
  reducer: {
    todo: todoReducer, // この名前で state にアクセス可能になる（state.todo.todos でアクセス可能）
  },
});
