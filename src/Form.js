import { useState } from "react";

// 親コンポーネントから渡ってくる引数(関数になってる変数)を
export const Form = ({onAddLang}) => {
    // からの要素で最初に用意する
    const [text, setText] = useState("");

    // submitフォームにはeventを入れておいて
    // 処理は一旦preventDefaultで止める
    const submitForm = (event) => {
        event.preventDefault();
        onAddLang(text)
    };

    return (
        <div>
            <h4>新しい言語一覧</h4>
            <form onSubmit={submitForm}>
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <button>追加</button>
                </div>
            </form>
        </div>
    );
};

// 渡す関数コンポーネントが1つしかない場合は
// export defaultでオブジェクトになるように括らなくても良い。
// 基本的には1つのファイルからexportできるのは1つのみ
// export default { Form };
