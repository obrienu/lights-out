const randomNum = (str) =>{
    return Math.floor(Math.random() * str.length )
}

function getId(length, type){
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const alphachar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numerals = '1234567890'
    let char;
    let id = '';

    
        if(!type){
            char = character
        }
        else if(type === 'num'){
            char = numerals
        }else if(type === 'alpha'){
            char = alphachar
        }else{
        }
        for(let i = 0; i < length; i++){
            id += char[randomNum(char)]
        }
        return id
    }



export const uniqueId = (length, type)=>{
    try{
        let arr
        let len 
        if (['num','alpha'].includes(type) || !(type)){
            if(length === 0) throw Error;
            const val = Math.floor(length / 5)
            const rem = length % 5 
            rem ? arr = [rem] : arr = [5]
            rem ? len = val : len = val - 1
            for(let i = 0; i < len; i++){
                arr.push(4)
            }
            return arr.map(a => `-${getId(a, type)}`).join("").substring(1, )
        }else{
            throw Error
        }
    }catch(Error){
        return  "length cannot be 0, use uniqId(length: number, type: string), type can be empty for alphanumeral values, 'alpha' for alphabets or 'num' for numbers"
    }
}


export default uniqueId