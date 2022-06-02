### プロパティとステート
props：親コンポーネント→子コンポーネントを呼び出すときに使用するもの

親から子に渡されるものでread only

state：コンポーネントの状態を表す
stateは状態を表すものなので変更が可能


親コンポーネント内で定義した関数コンポーネント(今回でいうところのAPP.jsのaddLang)を処理を子コンポーネントに渡して
子コンポーネントの引数で定義した引数

Form.jsからaddLangを呼び出せるようにApp.jsにonAddLangをFormタグ内に記述する

#5のフォームと親子間のデータのやり取り のでーたのやりとりについて
<Form onAddLang={addLang} />について
Formタグに紐づいているonAddLangはメソッドになっているがそのメソッドの定義はこコンポーネントにて実施している。
子コンポーネントではinputの入力内容を引数に持って実行。
それは何かというと親コンポーネントでの{addLang}に引数を持たせて実行している。その結果console.logが出力される
### 親子間でのデータのやりとりは理解がすぐにはできないのでちゃんと考えよう！


子コンポーネントの関数で引数で渡す時に1つ以上入るなら、波括弧でちゃんと囲うこと！



次は#6から！
https://youtu.be/SKrnW7PRBdk


学んだJSの最新ES6?の記法
- map関数
    https://ja.reactjs.org/docs/lists-and-keys.html
- スプレッド構文
    https://qiita.com/akisx/items/682a4283c13fe336c547
