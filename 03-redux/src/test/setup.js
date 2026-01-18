/**
 * テストのセットアップファイル
 * 全てのテストファイルの実行前に読み込まれる
 * Hooksテストのみ、DOM操作なしで完結するため、ここで共通のセットアップを行う
 */
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// 各テスト後にクリーンアップ
afterEach(() => {
  cleanup();
});
