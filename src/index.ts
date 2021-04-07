/*
 * @Author: Li-HONGYAO
 * @Date: 2021-04-07 18:00:49
 * @LastEditTime: 2021-04-07 19:54:39
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /lg-storage/src/index.ts
 */
class Storage {
  /**
   * 存储数据
   * @param key 键
   * @param value 值
   */
  public static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  /**
   * 读取数据
   */
  public static get<T = any>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return null;
  }
  /**
   * 移除数据
   * @param key
   */
  public static del(key?: string | string[]) {
    const type = Object.prototype.toString.call(key).slice(8, -1).toLowerCase();
    if (key) {
      if (type === 'string') {
        localStorage.removeItem(key as string);
      } else if (type === 'array') {
        const keys = key as string[];
        keys.forEach((_key) => {
          localStorage.removeItem(_key);
        });
      }
    } else {
      localStorage.clear();
    }
  }
}
export default Storage;
