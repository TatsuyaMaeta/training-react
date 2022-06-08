import { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/button";
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from "./FormModal";

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
`;

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`;

const ButtonContainer = styled.div`
    margin-top: 24px;
`;

// 既存のButtonコンポーネントを拡張(継承)させるときは下記のように記述する
const FormButton = styled(Button)`
    width: 150px;
`;

// 親コンポーネントから渡ってくる引数(関数になってる変数)を
export const Form = ({ onAddLang }) => {
    // からの要素で最初に用意する
    const [text, setText] = useState("");
    const [showModal, setShowModal] = useState(false);
    // submitフォームにはeventを入れておいて
    // 処理は一旦preventDefaultで止める
    const submitForm = (event) => {
        event.preventDefault();
        setShowModal(true);
        
    };

    return (
        <TabBodyContainer title="新しい言語一覧">
            <form onSubmit={submitForm}>
                <div>
                    <Label>言語</Label>
                    <Input
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
            {showModal === true && (
                <FormModal
                    confirm={() => onAddLang(text)}
                    cancel={() => setShowModal(false)}
                />
            )}
        </TabBodyContainer>
    );
};

// 渡す関数コンポーネントが1つしかない場合は
// export defaultでオブジェクトになるように括らなくても良い。
// 基本的には1つのファイルからexportできるのは1つのみ
// export default { Form };
