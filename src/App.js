// useStateを用いる際は必ずimportすること！
import { useState } from "react";

import { List } from "./List";
import { Form } from "./Form";

// 固定値で使用するものについては
// 切り分けて管理すると使い勝手がいいし管理がわかりやすい
import { LANGUAGE } from "./const/language";

function App() {
    // useStateメソッドは戻り値が配列になるので変数は配列で用意する
    // 変数自体は配列の中身に変数名を直接記入してしまって良い
    // ０番目の変数を実質的に使用して１番目の変数は慣例的に記述する
    // setDiscriptionはdiscriptionに変更があったときに機能する変数となる
    // 不要箇所 const [discription, setDiscription] = useState("クリック前の表示");

    const [tab, setTab] = useState("list");
    const [langs, setLangs] = useState(LANGUAGE);

    // 関数を受け渡して下から読んでもらう

    const addLang = (lang) => {
        console.log(lang);
        
        // スプレッド構文を用いてlangsに追加していく
        // 配列へのpushみたいな感じ??
        // https://qiita.com/akisx/items/682a4283c13fe336c547
        setLangs([...langs, lang]);
        setTab('list')
    };

    // 不要箇所 const changeDiscription = () => {
    //     setDiscription("クリック後の表示になります");
    // };

    return (
        <div>
            <header>
                <ul>
                    {/* liタグをクリックした際にonClickメソッドで
                    setTabの文字列を引数の文字列に切り替える */}
                    <li
                        onClick={() => {
                            setTab("list");
                        }}
                    >
                        リスト
                    </li>
                    <li
                        onClick={() => {
                            setTab("form");
                        }}
                    >
                        フォーム
                    </li>
                </ul>
            </header>
            <hr />
            {/* {discription} */}

            {/* 三項演算子を用いることで1行でスッキリ書くことができる
            その時にjsで処理をするので波括弧でちゃんと括ること */}
            {/* 一番初めのuseStateの中身を見ている */}
            {/* Form.jsからaddLangを呼び出せるようにApp.jsに記述する */}
            {tab === "list" ? <List langs={langs}/> : <Form onAddLang={addLang} />}

            {/* 不要箇所 <List title="取扱言語" />
            <Form></Form> */}
            {/* <button onClick={changeDiscription}>ボタン</button> */}
        </div>
    );
}

export default App;
