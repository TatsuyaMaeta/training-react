import styled from "styled-components";
// import { LANGUAGE } from "./const/language";
import { useEffect } from "react";
import { TabBodyContainer } from "./components/tab-body-container";


const ListItem = styled.div`
    padding: 8px 16px;
    &:nth-child(n + 2) {
        border-top: 1px solid #d9dbde;
    }
`;

// 引数で渡す時には1つ以上入るなら波括弧でちゃんと囲うこと！
export const List = ({ langs }) => {
    // この関数コンポーネント内で使用する変数名に
    // 親コンポーネントから渡されたpropsのtitleを渡している

    // 不要箇所 const title = props.title;

    // これはunmountされた時に機能している
    useEffect(() => {
        console.log("List.js:unmount");
    });

    return (
        <TabBodyContainer title= "取扱言語一覧">
            {/* 不要箇所 <h4>{title}</h4> */}

            {/* 上で定義したLANGUAGEを繰り返し処理で表示させたい時は
            map関数を用いて表現する。map関数の戻り値は配列 
            jsxの繰り返し処理ではkeyが必ず必要になるので忘れないこと！！
            key自体はユニークであることが求められる。
            indexなら処理回数をとっているので必ずユニークになる
            objectのkeyでももしかして良い??*/}
            {langs.map((lang, index) => {
                return <ListItem key={index}>{lang}</ListItem>;
            })}

            {/* <div>リストです</div> */}
        </TabBodyContainer>
    );
};
