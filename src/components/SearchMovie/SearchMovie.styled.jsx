import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 500px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  min-height: 40px;
  font: inherit;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 5px;
  outline: rgba(0, 0, 0, 0);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    border: 3px solid orangered;
  }
  :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 12px 16px;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: white;
    background-color: orangered;
  }
`;
