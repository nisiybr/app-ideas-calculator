import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 20px;
    font-size: 50px;
  }
`;

export const Calculator = styled.div`
  width: 35%;
  min-height: 500px;
  background-color: #3a3434;
  border: 4px solid #474747;
  padding: 30px 20px 20px 20px;

  display: flex;
  flex-direction: column;

  p {
    color: #fff;
    text-align: right;
    min-height: 20px;
    margin-bottom: 10px;
    margin-right: 30px;
  }

  input {
    height: 100px;
    text-align: right;
    font-size: 72px;
    color: #111111;
    font-weight: normal;
    letter-spacing: 0.1em;
    margin-bottom: 40px;
    background: #444444;
    border: 1px solid #525252;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 460px;
  min-height: 380px;
  background: #444;
  width: 100%;
`;
export const Row = styled.div`
  flex: 1;

  display: flex;
  button {
    flex: 1;
  }
`;
