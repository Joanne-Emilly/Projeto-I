import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import InputNumber from '../../components/Input/InputNumber';
import Select from '../../components/Input/Select';
import { ContainerSelectStyle, PStyle } from './styles';

const Extenso = () => {
  const [numberToConvert, setNumberToConvert] = useState('0');
  const [convertedNumber, setConvertedNumber] = useState('');
  const [textLanguage, setTextLanguage] = useState('pt');
  const [textCurrency, setTextCurrency] = useState('BRL');
  /* 
  https://api.invertexto.com/v1/number-to-words? [não muda]
  token=SEUTOKEN
  &number=1200.50
  &language=pt
  &currency=BRL
  */
  const fetchData = useCallback(
    async (valueToConvert: string, language: string, currency: string) => {
      const value = valueToConvert && valueToConvert !== '-' ? valueToConvert : '0';
      const URL = `https://api.invertexto.com/v1/number-to-words?token=${import.meta.env.VITE_API_TOKEN}&number=${value}&language=${language}&currency=${currency}`;
      try {
        const res = await axios.get(URL);
        setConvertedNumber(res.data.text);
      } catch (err: any) {
        toast.error(err.response.data.message);
      }
    },
    [],
  );
  useEffect(() => {
    fetchData(numberToConvert, textLanguage, textCurrency);
  }, [fetchData, numberToConvert, textLanguage, textCurrency]);

  return (
    <>
      <h1>Número por Extenso</h1>
      <ContainerSelectStyle>
        <Select
          onChange={event => {
            const selectedIndex = event.target.selectedIndex;
            const x = event.target.options[selectedIndex].getAttribute('data-value') || '';
            setTextCurrency(x);
            setTextLanguage(event.target.value);
          }}
        >
          <option value="pt" data-value="BRL">
            pt
          </option>
          <option value="en" data-value="USD">
            en
          </option>
          <option value="en" data-value="GBP">
            en-gb
          </option>
          <option value="es" data-value="EUR">
            es
          </option>
          <option value="de" data-value="EUR">
            de
          </option>
          <option value="fr" data-value="EUR">
            fr
          </option>
        </Select>
        <Select onChange={event => setTextCurrency(event.target.value)}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </Select>
      </ContainerSelectStyle>
      <InputNumber
        value={numberToConvert}
        onChange={event => setNumberToConvert(event.target.value)}
      />
      <PStyle>{convertedNumber}</PStyle>
      <ToastContainer />
    </>
  );
};

export default Extenso;
