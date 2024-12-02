function createFrame(names: string[]): string {
    const maxLengthBorder = Math.max(...names.map((name) => name.length));
    const border = '*'.repeat(maxLengthBorder + 4 )
    const frameWithName = names.map((name) => {
     const padding = maxLengthBorder - name.length
     return `* ${name}${' '.repeat(padding)} *`
    })
    return [border, ...frameWithName, border].join('\n')
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))
console.log(createFrame(['midu']))
console.log(createFrame(['a', 'bb', 'ccc']))
console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))