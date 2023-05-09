function* createIdGenerator() {
    let numb = 0;
    for (let i = 0; i < Infinity; i++) {
        numb ++;
        yield numb;
    }
}
const idGenerator = createIdGenerator();

export { createIdGenerator };