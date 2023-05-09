//1
function* createIdGenerator() {
    let numb = 0;
    for (let i = 0; i < Infinity; i++) {
        numb ++;
        yield numb;
    }
}
const idGenerator = createIdGenerator();

// idGenerator.next()

//2
function* newFontGenerator(value) {
    let size = value
    for (let i = 0; i < Infinity; i++){
        let res = yield;
        if (res ==="up"){
            size +=2;
            let p = document.getElementById("text")
            p.style.fontSize = size + "px";
            
        }
        if (res ==="down"){
            size -=2;
            let p = document.getElementById("text")
            p.style.fontSize = size + "px";
        }
    }
}
const fontGenerator = newFontGenerator(14);

// fontGenerator.next("up")
// fontGenerator.next("down")
