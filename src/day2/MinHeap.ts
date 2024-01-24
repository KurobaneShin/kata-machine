export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) return -1;

        const min = this.data[0];

        this.length--;

        if (this.length === 0) {
            this.data = [];
            return min;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return min;
    }

    private heapifyDown(index: number): void {
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (index >= this.length || left >= this.length) return;

        const leftV = this.data[left];
        const rightV = this.data[right];
        const v = this.data[index];

        if (leftV > rightV && v > rightV) {
            this.data[index] = rightV;
            this.data[right] = v;
            this.heapifyDown(right);
        } else if (rightV > leftV && v > leftV) {
            this.data[index] = leftV;
            this.data[left] = v;
            this.heapifyDown(left);
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0) return;

        const p = this.parent(index);
        const parentV = this.data[p];
        const v = this.data[index];

        if (parentV > v) {
            this.data[index] = parentV;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number): number {
        return index * 2 + 1;
    }

    private rightChild(index: number): number {
        return index * 2 + 2;
    }
}
