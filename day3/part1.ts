(() => {
    const input = `987654321111111
811111111111119
234234234234278
818181911112111`;
    const output: number[] = [];
    const lines = input.split('\n').map(line => line.trim());

    const nextLargest = (line: string, index: number) => {
        line = line.slice(index + 1);

        let largest = Number(line[0]);
        for (let i = 0; i < line.length; i++) {
            let current = Number(line[i]);

            if (current > largest) {
                largest = current;
            }
        }

        return largest;
    }


    for (const line of lines) {
        let index = 0;
        let n1 = Number(line[index]);
        let n2 = nextLargest(line, index);

        while (index < line.length - 1) {
            let current = Number(line[index]);
            let next = nextLargest(line, index);

            if (current >= n1) {
                const nextLargest = Number(`${current}${next}`);
                const currentLargest = Number(`${n1}${n2}`);

                if (nextLargest >= currentLargest) {
                    n1 = current;
                    // if (next >= n2) {
                    n2 = next;
                    // }
                }
            }

            index++;
        }

        output.push(Number(`${n1}${n2}`));
    }

    console.log(output);

    const total = output
        .reduce((c, v) => c + v, 0);

    console.log(total);
})();