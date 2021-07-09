/*
 * @Author: Li-HONGYAO
 * @Date: 2021-04-07 18:00:49
 * @LastEditTime: 2021-07-09 11:39:11
 * @LastEditors: Lee
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
   * @param key 键
   * @returns
   */
  public static get<T = any>(key: string): T | undefined {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }
  }
  /**
   * 移除数据
   * key的类型可以为字符串、字符串数组以及undefined
   * 根据不同类型，有如下三种结果：
   * - 当key为字符串时/移除指定key对应的数据
   * - 当key为字符串数组时/遍历删除指定key对应的数据
   * - 当key为undefined时/清空所有本地数据
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
