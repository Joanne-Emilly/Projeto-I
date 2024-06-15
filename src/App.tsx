import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { Container } from './app.styles';
import InputNumber from './components/Input/InputNumber';
import Select from './components/Input/Select';

function App() {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BRL');
  const [firstValue, setFirstValue] = useState<string>('1');
  const [secondValue, setSecondValue] = useState<string>();
  const [price, setPrice] = useState(0);

  const fetchData = useCallback(async (fCurrency: string, sCurrency: string) => {
    const currencyFormatted = `${fCurrency}_${sCurrency}`;
    await axios
      .get(
        `https://api.invertexto.com/v1/currency/${currencyFormatted}?token=${import.meta.env.VITE_API_TOKEN}`,
      )
      .then(response => {
        console.log(response);
        const currencyPrice = response.data[`${currencyFormatted}`].price;
        setPrice(currencyPrice);
        setSecondValue((+firstValue * currencyPrice).toString());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData(firstCurrency, secondCurrency);
  }, [fetchData, firstCurrency, secondCurrency]);
  return (
    <Container>
      <div className="selects">
        <Select
          onChange={e => {
            setFirstCurrency(e.target.value);
          }}
        >
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
          <option value="BRL">BRL</option>
        </Select>
        <Select onChange={e => setSecondCurrency(e.target.value)}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
        </Select>
      </div>
      <div className="inputs">
        <InputNumber
          type="number"
          value={firstValue !== '' ? firstValue : ''}
          onChange={e => {
            const inputValue = e.target.value;
            setFirstValue(inputValue);
            setSecondValue((+inputValue * price).toString());
          }}
        />
        <InputNumber
          type="number"
          value={secondValue !== '' ? secondValue || price : ''}
          onChange={e => {
            const inputValue = e.target.value;
            setSecondValue(inputValue);
            setFirstValue((+inputValue * (1 / price)).toString());
          }}
        />
      </div>
    </Container>
  );
}

export default App;
