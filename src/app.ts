// type AddFn = (a:number, b: number) => number;
interface AddFn {
    (a:number, b:number) : number;
}

let add: AddFn;

add = (n1: number, n2:number) => {
    return n1 + n2;
}


interface Named{
    readonly name?: string,
    outputName?:string; //Named인터페이스를 구현한 클래스에 이 변수는 선택적으로 존재할 수 있음 => 선택적 프로퍼티티

}

interface Greetable extends Named {
    greet(phrase: string) : void;
    
}
class Person implements Greetable {
    name?: string;
    age = 20;
    constructor(n?: string) {
        if(n){
            this.name = n;
        }
        
    }

    greet(phrase: string): void {
        if(this.name){
            console.log(phrase + ' ' + this.name)

        } else{
            console.log("Hi");
        }
    }
}
let user1: Greetable;

user1 = new Person();

user1.greet("Hello")