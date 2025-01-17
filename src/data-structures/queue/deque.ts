/**
 * data-structure-typed
 *
 * @author Tyler Zeng
 * @copyright Copyright (c) 2022 Tyler Zeng <zrwusa@gmail.com>
 * @license MIT License
 */
import {DoublyLinkedList} from '../linked-list';

// O(n) time complexity of obtaining the value
// O(1) time complexity of adding at the beginning and the end
export class Deque<E = any> extends DoublyLinkedList<E> {}

// O(1) time complexity of obtaining the value
// O(n) time complexity of adding at the beginning and the end
// todo tested slowest one
export class ObjectDeque<E = number> {
  constructor(capacity?: number) {
    if (capacity !== undefined) this._capacity = capacity;
  }

  private _nodes: {[key: number]: E} = {};

  get nodes(): {[p: number]: E} {
    return this._nodes;
  }

  private _capacity = Number.MAX_SAFE_INTEGER;

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

  private _first = -1;

  get first(): number {
    return this._first;
  }

  set first(value: number) {
    this._first = value;
  }

  private _last = -1;

  get last(): number {
    return this._last;
  }

  set last(value: number) {
    this._last = value;
  }

  private _size = 0;

  get size(): number {
    return this._size;
  }

  /**
   * The "addFirst" function adds a value to the beginning of an array-like data structure.
   * @param {E} value - The `value` parameter represents the value that you want to add to the beginning of the data
   * structure.
   */
  addFirst(value: E) {
    if (this._size === 0) {
      const mid = Math.floor(this._capacity / 2);
      this._first = mid;
      this._last = mid;
    } else {
      this._first--;
    }
    this._nodes[this._first] = value;
    this._size++;
  }

  /**
   * The addLast function adds a value to the end of an array-like data structure.
   * @param {E} value - The `value` parameter represents the value that you want to add to the end of the data structure.
   */
  addLast(value: E) {
    if (this._size === 0) {
      const mid = Math.floor(this._capacity / 2);
      this._first = mid;
      this._last = mid;
    } else {
      this._last++;
    }
    this._nodes[this._last] = value;
    this._size++;
  }

  /**
   * The function `pollFirst()` removes and returns the first element in a data structure.
   * @returns The value of the first element in the data structure.
   */
  pollFirst() {
    if (!this._size) return;
    const value = this.peekFirst();
    delete this._nodes[this._first];
    this._first++;
    this._size--;
    return value;
  }

  /**
   * The `peekFirst` function returns the first element in an array-like data structure if it exists.
   * @returns The element at the first position of the `_nodes` array.
   */
  peekFirst() {
    if (this._size) return this._nodes[this._first];
  }

  /**
   * The `pollLast()` function removes and returns the last element in a data structure.
   * @returns The value that was removed from the data structure.
   */
  pollLast() {
    if (!this._size) return;
    const value = this.peekLast();
    delete this._nodes[this._last];
    this._last--;
    this._size--;

    return value;
  }

  /**
   * The `peekLast()` function returns the last element in an array-like data structure.
   * @returns The last element in the array "_nodes" is being returned.
   */
  peekLast() {
    if (this._size) return this._nodes[this._last];
  }

  /**
   * The get function returns the element at the specified index in an array-like data structure.
   * @param {number} index - The index parameter is a number that represents the position of the element you want to
   * retrieve from the array.
   * @returns The element at the specified index in the `_nodes` array is being returned. If there is no element at that
   * index, `null` is returned.
   */
  get(index: number) {
    return this._nodes[this._first + index] || null;
  }

  /**
   * The function checks if the size of a data structure is less than or equal to zero.
   * @returns The method is returning a boolean value indicating whether the size of the object is less than or equal to 0.
   */
  isEmpty() {
    return this._size <= 0;
  }

  protected _seNodes(value: {[p: number]: E}) {
    this._nodes = value;
  }

  protected _setSize(value: number) {
    this._size = value;
  }
}

// O(1) time complexity of obtaining the value
// O(n) time complexity of adding at the beginning and the end
export class ArrayDeque<E> {
  protected _nodes: E[] = [];

  get size() {
    return this._nodes.length;
  }

  /**
   * O(n) time complexity of adding at the beginning and the end
   */

  /**
   * The function "addLast" adds a value to the end of an array.
   * @param {E} value - The value parameter represents the value that you want to add to the end of the array.
   * @returns The return value is the new length of the array after the value has been added.
   */
  addLast(value: E) {
    return this._nodes.push(value);
  }

  /**
   * The function "pollLast" returns and removes the last element from an array, or returns null if the array is empty.
   * @returns The method `pollLast()` returns the last element of the `_nodes` array, or `null` if the array is empty.
   */
  pollLast(): E | null {
    return this._nodes.pop() ?? null;
  }

  /**
   * The `pollFirst` function removes and returns the first element from an array, or returns null if the array is empty.
   * @returns The `pollFirst()` function returns the first element of the `_nodes` array, or `null` if the array is
   * empty.
   */
  pollFirst(): E | null {
    return this._nodes.shift() ?? null;
  }

  /**
   * O(n) time complexity of adding at the beginning and the end
   */

  /**
   * The function "addFirst" adds a value to the beginning of an array.
   * @param {E} value - The value parameter represents the value that you want to add to the beginning of the array.
   * @returns The return value of the `addFirst` function is the new length of the array `_nodes` after adding the
   * `value` at the beginning.
   */
  addFirst(value: E) {
    return this._nodes.unshift(value);
  }

  /**
   * The `peekFirst` function returns the first element of an array or null if the array is empty.
   * @returns The function `peekFirst()` is returning the first element (`E`) of the `_nodes` array. If the array is
   * empty, it will return `null`.
   */
  peekFirst(): E | null {
    return this._nodes[0] ?? null;
  }

  /**
   * The `peekLast` function returns the last element of an array or null if the array is empty.
   * @returns The method `peekLast()` returns the last element of the `_nodes` array, or `null` if the array is empty.
   */
  peekLast(): E | null {
    return this._nodes[this._nodes.length - 1] ?? null;
  }

  /**
   * O(1) time complexity of obtaining the value
   */

  /**
   * The get function returns the element at the specified index in an array, or null if the index is out of bounds.
   * @param {number} index - The index parameter is a number that represents the position of the element you want to
   * retrieve from the array.
   * @returns The method is returning the element at the specified index in the `_nodes` array. If the element exists, it
   * will be returned. If the element does not exist (i.e., the index is out of bounds), `null` will be returned.
   */
  get(index: number): E | null {
    return this._nodes[index] ?? null;
  }

  /**
   * The set function assigns a value to a specific index in an array.
   * @param {number} index - The index parameter is a number that represents the position of the element in the array
   * that you want to set a new value for.
   * @param {E} value - The value parameter represents the new value that you want to set at the specified index in the
   * _nodes array.
   * @returns The value that is being set at the specified index in the `_nodes` array.
   */
  set(index: number, value: E) {
    return (this._nodes[index] = value);
  }

  /**
   * The insert function adds a value at a specified index in an array.
   * @param {number} index - The index parameter specifies the position at which the value should be inserted in the
   * array. It is a number that represents the index of the array where the value should be inserted. The index starts
   * from 0, so the first element of the array has an index of 0, the second element has
   * @param {E} value - The value parameter represents the value that you want to insert into the array at the specified
   * index.
   * @returns The splice method returns an array containing the removed elements, if any. In this case, since no elements
   * are being removed, an empty array will be returned.
   */
  insert(index: number, value: E) {
    return this._nodes.splice(index, 0, value);
  }

  /**
   * The remove function removes an element from an array at a specified index.
   * @param {number} index - The index parameter specifies the position of the element to be removed from the array. It
   * is a number that represents the index of the element to be removed.
   * @returns The method is returning an array containing the removed element.
   */
  remove(index: number) {
    return this._nodes.splice(index, 1);
  }

  /**
   * The function checks if an array called "_nodes" is empty.
   * @returns The method `isEmpty()` is returning a boolean value. It returns `true` if the length of the `_nodes` array
   * is 0, indicating that the array is empty. Otherwise, it returns `false`.
   */
  isEmpty() {
    return this._nodes.length === 0;
  }
}
