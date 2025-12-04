const input = `actual input`;

const rows = input.trim().split('\n').map(e => e.replace(/\s+/gi, ''))
const cols = rows.length;

let accessible = 0;

function checkSides(row: number, col: number) {
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

for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows[0].length; col++) {
        if (checkSides(row, col)) {
            accessible++;
        }
    }
}

console.log(accessible);