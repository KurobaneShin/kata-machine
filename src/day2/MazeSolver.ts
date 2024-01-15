const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function walk(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    //1. base case
    //out of bound
    if (
        start.x < 0 ||
        start.y < 0 ||
        start.x >= maze[0].length ||
        start.y >= maze.length
    ) {
        return false;
    }

    //hit wall
    if (maze[start.y][start.x] === wall) return false;

    //hit end
    if (start.x === end.x && start.y === end.y) {
        path.push(end);
        return true;
    }

    if (seen[start.y][start.x]) return false;

    seen[start.y][start.x] = true;
    path.push(start);

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const next = { x: start.x + x, y: start.y + y };
        if (walk(maze, wall, next, end, seen, path)) return true;
    }

    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
