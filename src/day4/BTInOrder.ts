function visit(node: BinaryNode<number> | null, values: number[]) {
    if (!node) return;
    visit(node.left, values);
    values.push(node.value);
    visit(node.right, values);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const values: number[] = [];
    visit(head, values);
    return values;
}
