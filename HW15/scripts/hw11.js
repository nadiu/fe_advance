function getRandomChinese(length){
    return new Promise(resolve => {
        let result = [];
        let i = 0;
        while (i < length) {
            i++;
            setTimeout(() => {
                let constSign = Date.now().toString().slice(-5)
                let numb = String.fromCharCode(constSign) 
                result += numb
                if (result.length === length) 
                    resolve (result)
                }, i * 50)
            }
           
        }).then((result) => console.log(result));
    }


export { getRandomChinese };