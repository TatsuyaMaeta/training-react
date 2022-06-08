import styled from "styled-components";
import { useEffect, useState } from "react";

const LoadDiv = styled.div`
    padding: 36px;
`;

// 引数で受け取ったコンポーネントを使用できる
export const withLoading = (WrappedComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch();
        }, []);

        const fetch = async () => {
            const data = await fetchData();
            setData(data);
        };
        
        const Loading = <LoadDiv>ロード中...</LoadDiv>;

        return data ? <WrappedComponent data={data} /> : Loading;
    };
};
