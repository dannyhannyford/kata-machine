export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}

// point = { x, y }

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // within
    if (!withinBounds(curr.x, curr.y, maze[0].length, maze.length)) {
        return false;
    }
    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // already traveled
    if (seen[curr.y][curr.x]) {
        return false;
    }

    //pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    //recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    //post
    path.pop();
    return false;
}

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

function withinBounds(x: number, y: number, m: number, n: number): boolean {
    return 0 <= x && 0 <= y && x < m && y < n;
}
