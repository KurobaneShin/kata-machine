export default function linear_search<T>(list: T[], item: T): number {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return i;
        }
    }
    return -1;
}
