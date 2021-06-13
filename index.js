/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.size = 0;
  this.queue = new Array(k);
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  if (this.head === undefined) {
    this.head = this.tail = 0;
    this.queue[0] = value;
  } else {
    this.tail = ++this.tail % this.queue.length;
    this.queue[this.tail] = value;
  }
  this.size++;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.size) return false;

  this.queue[this.head] = null;
  this.head = ++this.head % this.queue.length;
  this.size--;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.size ? this.queue[this.head] : -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.size ? this.queue[this.tail] : -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size == 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size && this.size == this.queue.length;
};

var obj = new MyCircularQueue(2);
var param_1 = obj.enQueue(1);
var param_2 = obj.enQueue(2);
var param_3 = obj.deQueue();
var param_4 = obj.enQueue(4);
var front = obj.Front();
var rear = obj.Rear();

console.log(obj, param_1, param_2, param_3, param_4, front, rear);
