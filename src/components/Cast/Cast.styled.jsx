import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Itam = styled.li`
  width: 200px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 8%) 0px 0px 0px 1px;
`;

export const WrapImg = styled.div`
  padding-top: 20px;
`;

export const WrapText = styled.div`
  padding: 10px 0;
`;
