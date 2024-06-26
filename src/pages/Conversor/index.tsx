import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import InputNumber from '../../components/Input/InputNumber';
import Select from '../../components/Input/Select';
import { Container } from './styles';

const Conversor = () => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BRL');
  const [inputValues, setInputValues] = useState<{
    first: string | number;
    second: string | number | undefined;
  }>({
    first: '1',
    second: undefined,
  });
  const [data, setData] = useState({ price: 0, updateDat: new Date() });
  /* 
  Função que faz uma requisição das moedas recebidas 
  como parametros e atualiza a variavel data. 
  */
  const fetchData = useCallback(async (fCurrency: string, sCurrency: string) => {
    const currencyFormatted = `${fCurrency}_${sCurrency}`;
    await axios
      .get(
        `https://api.invertexto.com/v1/currency/${currencyFormatted}?token=${import.meta.env.VITE_API_TOKEN}`,
      )
      .then(response => {
        const currencyPrice = response.data[`${currencyFormatted}`].price;
        const updateDat = response.data[`${currencyFormatted}`].timestamp;
        setData({
          price: currencyPrice,
          updateDat: new Date(updateDat * 1000),
        });
        setInputValues(previousValue => {
          return { ...previousValue, second: Number(previousValue.first) * currencyPrice };
        });
        if (response.status === 205) {
          toast.success('Dados obtidos');
        }
      })
      .catch(error => {
        if (error.response.request.status === 401) {
          toast.error(`${error.response.data.message}`);
        }
        if (error.response.request.status === 404) {
          toast.error(`${error.response.data.message}`);
        }
        if (error.response.request.status === 422) {
          return `Entidade não processável`;
        }
      });
  }, []);
  useEffect(() => {
    fetchData(firstCurrency, secondCurrency);
  }, [fetchData, firstCurrency, secondCurrency]);
  return (
    <Container>
      <h1>
        Ultima atualização:{' '}
        {data.updateDat.toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </h1>
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
        <Select
          onChange={e => {
            setSecondCurrency(e.target.value);
          }}
        >
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
        </Select>
      </div>
      <div className="inputs">
        <InputNumber
          type="number"
          value={inputValues.first !== '' ? inputValues.first : ''}
          onChange={e => {
            const inputValue = e.target.value;
            setInputValues({ first: inputValue, second: Number(inputValue) * data.price });
          }}
        />
        <InputNumber
          type="number"
          value={inputValues.second !== '' ? inputValues.second || data.price : ''}
          onChange={e => {
            const inputValue = e.target.value;
            setInputValues({
              first: Number(inputValue) * (1 / data.price),
              second: inputValue,
            });
          }}
        />
      </div>
      <ToastContainer />
    </Container>
  );
};
export default Conversor;
