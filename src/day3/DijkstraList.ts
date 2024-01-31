function hasUnvisited(seen: boolean[], dist: number[]) {
    return seen.some((s, i) => !s && dist[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dist: number[]) {
    let idx = -1;
    let lowest = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;

        if (lowest > dist[i]) {
            lowest = dist[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    const dist = new Array(arr.length).fill(Infinity);
    dist[source] = 0;

    while (hasUnvisited(seen, dist)) {
        const current = getLowestUnvisited(seen, dist);

        seen[current] = true;

        const adjs = arr[current];

        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];

            if (seen[edge.to]) continue;

            const newDist = dist[current] + edge.weight;

            if (newDist < dist[edge.to]) {
                dist[edge.to] = newDist;
                prev[edge.to] = current;
            }
        }
    }

    const out: number[] = [];
    let current = sink;

    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }

    out.push(source);
    return out.reverse();
}
