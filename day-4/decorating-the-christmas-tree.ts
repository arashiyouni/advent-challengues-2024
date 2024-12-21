function createXmasTree(height: number, ornament: string): string {
    let tree = '';

    //building christmas tree
    for (let level = 1; level <= height; level++) {
        const spaces = '_'.repeat(height - level);
        const chars = ornament.repeat(level * 2 - 1);
        tree += spaces + chars + spaces + '\n'
    }

    //building trunks
    const trunksSpace = '_'.repeat(height - 1)
    const trunk =  trunksSpace + '#' + trunksSpace + '\n'
    return tree + trunk + trunk.replace(/\s/g, '');
}

const ChristmasTree = createXmasTree(5, '*')
console.log(ChristmasTree)
const tree2 = createXmasTree(3, '+')
console.log(tree2)