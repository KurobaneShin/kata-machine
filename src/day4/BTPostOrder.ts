function visit(node: BinaryNode<number> | null, values: number[]) {
    if (!node) return;
    visit(node.left, values);
    visit(node.right, values);
    values.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const values: number[] = [];
    visit(head, values);
    return values;
}
