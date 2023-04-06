/**
 * 返回一个指定长度的随机 ID
 */
export function randomId(): string {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}

// eslint-disable-next-line
export function noop() {}
