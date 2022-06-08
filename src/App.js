import styled from "styled-components";
// useStateを用いる際は必ずimportすること！
import { useEffect, useState } from "react";

import { List } from "./List";
import { Form } from "./Form";

// 固定値で使用するものについては
// 切り分けて管理すると使い勝手がいいし管理がわかりやすい
import { getLanguages } from "./const/language";
import { withLoading } from "./hoc/withLoading";
import { Modal } from "./components/modal";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 64px 0;
    border-bottom: 1px solid #e0e0e0;
`;
const HeaderUl = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const HeaderLi = styled.li`
    list-style: none;
    padding: 4px 18px;
    cursor: pointer;
    border-bottom: ${(props) => (props.focused ? "2px solid #F44336" : "none")};
`;

function App({data}) {
    // useStateメソッドは戻り値が配列になるので変数は配列で用意する
    // 変数自体は配列の中身に変数名を直接記入してしまって良い
    // ０番目の変数を実質的に使用して１番目の変数は慣例的に記述する
    // setDiscriptionはdiscriptionに変更があったときに機能する変数となる
    // 不要箇所 const [discription, setDiscription] = useState("クリック前の表示");

    const [tab, setTab] = useState("list");
    const [langs, setLangs] = useState(data);

    // 関数を受け渡して下から読んでもらう

    // 一番最初だけ実行したい場合はからの配列を第２引数に入れればいい
    // useEffect(() => {
    //     console.log("app.js:useEffect");
    //     fetchLanguages();
    // }, [langs]);

    // const fetchLanguages = async () => {
    //     const languages = await getLanguages();
    //     setLangs(languages);
    // };


    const addLang = (lang) => {
        console.log(lang);

        // スプレッド構文を用いてlangsに追加していく
        // 配列へのpushみたいな感じ??
        // https://qiita.com/akisx/items/682a4283c13fe336c547
        setLangs([...langs, lang]);
        setTab("list");
    };

    // 不要箇所 const changeDiscription = () => {
    //     setDiscription("クリック後の表示になります");
    // };

    return (
        <div>
            <Header>
                <HeaderUl>
                    {/* liタグをクリックした際にonClickメソッドで
                    setTabの文字列を引数の文字列に切り替える */}
                    <HeaderLi
                        focused={tab === "list"}
                        onClick={() => {
                            setTab("list");
                        }}
                    >
                        リスト
                    </HeaderLi>
                    <HeaderLi
                        focused={tab === "form"}
                        onClick={() => {
                            setTab("form");
                        }}
                    >
                        フォーム
                    </HeaderLi>
                </HeaderUl>
            </Header>
            <hr />
            {/* {discription} */}

            {/* 三項演算子を用いることで1行でスッキリ書くことができる
            その時にjsで処理をするので波括弧でちゃんと括ること */}
            {/* 一番初めのuseStateの中身を見ている */}
            {/* Form.jsからaddLangを呼び出せるようにApp.jsに記述する */}
            {tab === "list" ? (
                <List langs={langs} />
            ) : (
                <Form onAddLang={addLang} />
            )}

            {/* 不要箇所 <List title="取扱言語" />
            <Form></Form> */}
            {/* <button onClick={changeDiscription}>ボタン</button> */}

            <Modal />
        </div>
    );
}

export default withLoading(App, getLanguages);
