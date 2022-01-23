const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        // ここでの「this」は↓にある1階層上の「objオブジェクト」のこと
        console.log(this.first_name);
        // ↓これでもオッケー
        // console.log(obj.first_name);
        const fn = function() {
            // ここでの「this」は↓にある1階層上の「windowオブジェクト（ブラウザ独自のオブジェクト）」のこと
            console.log(this);
        };
        window.setTimeout(fn);  
    }
}

// ※クラス内の「this」キーワード→生成されるオブジェクトを参照する
class MyObj {
    constructor() {
        this.first_name = 'Mafia2';
        this.last_name = 'Code2';
    }
    
    printFullName() {
        console.log(this.first_name);
        // クラスの場合は↓はnewで初期化してからじゃないとプロパティとして認識されないからダメ
        // console.log(obj.first_name);
        const fn = function() {
            // ここでの「this」は↓にある1階層上の「windowオブジェクト」のこと
            console.log(this);
        };
        window.setTimeout(fn)   
    }
}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();