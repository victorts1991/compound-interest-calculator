import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    max-height: 60px;
    justify-content: center;
    align-items: center;
    background: #FFF;
`

interface IAdContainer {
    haveFlex: boolean;
}

export const AdContainer = styled.View`
    flex: ${(props: IAdContainer) => props.haveFlex ? '1' : '0'};
    justify-content: flex-end;
    align-items: center;
    
`
