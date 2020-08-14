import React, { useState, useCallback, useEffect } from 'react';

import { Container, Calculator, Buttons, Row } from './styles';

const Main: React.FC = () => {
  const [visor, setVisor] = useState('');
  const [actualNumber, setActualNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [lastInput, setLastInput] = useState('');

  const handleAC = useCallback(() => {
    setActualNumber('0');
    setVisor('');
    setOperation('');
    setPreviousNumber('');
  }, []);
  const handleC = useCallback(() => {
    setActualNumber('0');
  }, []);

  useEffect(() => {
    if (actualNumber.length > 8) {
      setActualNumber('ERR');
    }
  }, [actualNumber]);

  const handleNumberClick = useCallback(
    (number: string) => {
      if (actualNumber.length + number.length > 8 || actualNumber === 'ERR') {
        return;
      }
      setLastInput('number');
      if (actualNumber === '0' || lastInput === 'equal') {
        const n1 = `${number}`;
        setActualNumber(n1);
      } else {
        const n1 = `${actualNumber}${number}`;
        setActualNumber(n1);
      }
    },
    [actualNumber, lastInput],
  );
  const handleOperationClick = useCallback(
    (operationClicked: string) => {
      setLastInput('operation');
      setOperation(operationClicked);
      if (visor === '' && operationClicked === '=') {
        setLastInput('equal');
        handleC();
        return;
      }
      if (visor === '') {
        const number = `${actualNumber} ${operationClicked}`;
        setVisor(number);
        setPreviousNumber(number);
        handleC();
        return;
      }
      if (operationClicked === '=') {
        setLastInput('equal');
        switch (operation) {
          case '+': {
            const result = parseInt(previousNumber) + parseInt(actualNumber);
            handleAC();
            setActualNumber(result.toString());
            break;
          }
          case '-': {
            const result = parseInt(previousNumber) - parseInt(actualNumber);
            handleAC();
            setActualNumber(result.toString());
            break;
          }
          case 'x': {
            const result = parseInt(previousNumber) * parseInt(actualNumber);
            handleAC();
            setActualNumber(result.toString());
            break;
          }
          case '/': {
            const result = parseInt(previousNumber) / parseInt(actualNumber);
            handleAC();
            setActualNumber(result.toString());
            break;
          }
          default:
            break;
        }
      }
      if (operationClicked !== '=') {
        if (lastInput === 'operation') {
          const newVisor = `${visor.substring(
            0,
            visor.length - 2,
          )} ${operationClicked}`;

          setOperation(operationClicked);
          setVisor(newVisor);
          return;
        }
        switch (operation) {
          case '+': {
            const result = parseInt(previousNumber) + parseInt(actualNumber);
            setPreviousNumber(result.toString());
            handleC();
            setVisor(state => `${state} ${actualNumber} ${operationClicked} `);
            break;
          }
          case '-': {
            const result = parseInt(previousNumber) - parseInt(actualNumber);
            setPreviousNumber(result.toString());
            handleC();
            setVisor(state => `${state} ${actualNumber} ${operationClicked} `);
            break;
          }
          case 'x': {
            const result = parseInt(previousNumber) * parseInt(actualNumber);
            setPreviousNumber(result.toString());
            handleC();
            setVisor(state => `${state} ${actualNumber} ${operationClicked} `);
            break;
          }
          case '/': {
            const result = parseInt(previousNumber) / parseInt(actualNumber);
            setPreviousNumber(result.toString());
            handleC();
            setVisor(state => `${state} ${actualNumber} ${operationClicked} `);
            break;
          }
          default:
            break;
        }
      }
    },
    [
      actualNumber,
      visor,
      handleC,
      handleAC,
      operation,
      previousNumber,
      lastInput,
    ],
  );

  return (
    <Container>
      <h1>Calculator</h1>
      <Calculator>
        <p>{visor}</p>
        <input
          type="text"
          name="actualNumber"
          value={actualNumber}
          onChange={e => setActualNumber(e.target.value)}
        />
        <Buttons>
          <Row>
            <button onClick={() => handleC()} type="button">
              C
            </button>
            <button onClick={() => handleAC()} type="button">
              AC
            </button>
          </Row>
          <Row>
            <button onClick={() => handleNumberClick('7')} type="button">
              7
            </button>
            <button onClick={() => handleNumberClick('8')} type="button">
              8
            </button>
            <button onClick={() => handleNumberClick('9')} type="button">
              9
            </button>
            <button onClick={() => handleOperationClick('+')} type="button">
              +
            </button>
          </Row>
          <Row>
            <button onClick={() => handleNumberClick('4')} type="button">
              4
            </button>
            <button onClick={() => handleNumberClick('5')} type="button">
              5
            </button>
            <button onClick={() => handleNumberClick('6')} type="button">
              6
            </button>
            <button onClick={() => handleOperationClick('-')} type="button">
              -
            </button>
          </Row>
          <Row>
            <button onClick={() => handleNumberClick('1')} type="button">
              1
            </button>
            <button onClick={() => handleNumberClick('2')} type="button">
              2
            </button>
            <button onClick={() => handleNumberClick('3')} type="button">
              3
            </button>
            <button onClick={() => handleOperationClick('x')} type="button">
              x
            </button>
          </Row>
          <Row>
            <button onClick={() => handleNumberClick('000')} type="button">
              000
            </button>
            <button onClick={() => handleNumberClick('0')} type="button">
              0
            </button>
            <button onClick={() => handleNumberClick('.')} type="button">
              .
            </button>
            <button onClick={() => handleOperationClick('/')} type="button">
              /
            </button>
          </Row>
          <Row>
            <button onClick={() => handleOperationClick('=')} type="button">
              =
            </button>
          </Row>
        </Buttons>
      </Calculator>
    </Container>
  );
};

export default Main;
