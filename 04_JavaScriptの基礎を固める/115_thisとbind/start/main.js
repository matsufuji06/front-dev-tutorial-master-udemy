const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);
        const _that = this;
        
        window.setTimeout(function() {
            console.log(this);
            // ↓のbindで実質、thisには_thatが定義されている（thisの参照先がbindの引数になる⇨引数を{first_name: 'Taro'のように特定のキー情報にしてもよい}）
        }.bind(_that));

        // window.setTimeout(function () {
        //     console.log(this);
        //     ※↓外で変数として「objのthis」を呼び出せば「windowのthis」を参照せずに済む
        //     console.log(_that);
        // });
    }
}

obj.printFullName();