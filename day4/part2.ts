const input = `..xx.xx@x.
x@@.@.@.@@
@@@@@.x.@@
@.@@@@..@.
x@.@@@@.@x
.@@@@@@@.@
.@.@.@.@@@
x.@@@.@@@@
.@@@@@@@@.
x.x.@@@.x.`;

let rows = input.trim().split('\n').map(e => e.replace(/\s+/gi, ''))
let cols = rows.length;

let removed = 0;
let removables: [number, number][] = [];

function remove(row: number, col: number) {
    const current = rows[row];

    rows[row] = current.slice(0, col) + '.' + current.slice(col + 1);

    removed++;
}

function isRemovable(row: number, col: number) {
    if (rows[row][col] === '.') return false;

    const angles = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ]

    let has = 0;
    for (const [y, x] of angles) {
        if (!rows[row + y]) continue;
        if (!rows[row + y][col + x]) continue;

        if (rows[row + y][col + x] === '@') {
            has++;
        }

        if (has >= 4) return false;
    }

    return true;
}

function checkRemovables() {
    for (let row = 0; row < rows.length; row++) {
        for (let col = 0; col < rows[0].length; col++) {
            if (isRemovable(row, col)) {
                removables.push([row, col]);
            }
        }
    }

    if (removables.length) {
        clearRemovables();
    }
}

function clearRemovables() {
    for (const [row, col] of removables) {
        remove(row, col);
    }

    removables = [];
    checkRemovables();
}

checkRemovables();

console.log(removed);