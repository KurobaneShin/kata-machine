function visit(node: BinaryNode<number> | null, values: number[]) {
    if (!node) return;
    values.push(node.value);
    visit(node.left, values);
    visit(node.right, values);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const values: number[] = [];
    visit(head, values);
    return values;
}
