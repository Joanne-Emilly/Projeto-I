import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import InputNumber from '../../components/Input/InputNumber';
import Select from '../../components/Input/Select';
import { ContainerSelectStyle, PStyle } from './styles';

const Extenso = () => {
  const [numberToConvert, setNumberToConvert] = useState('0');
  const [convertedNumber, setConvertedNumber] = useState('');
  const [textLanguage, setTextLanguage] = useState('pt');
  const [textCurrency, setTextCurrency] = useState('');
  const defaultLanguageKeys = useMemo<{ [index: string]: string }>(() => {
    return {
      pt: 'BRL',
      en: 'USD',
      es: 'ARS',
      de: 'EUR',
      fr: 'EUR',
    };
  }, []);
  /* 
  https://api.invertexto.com/v1/number-to-words? [não muda]
  token=SEUTOKEN
  &number=1200.50
  &language=pt
  &currency=BRL
  */
  const fetchData = useCallback(
    async (valueToConvert: string, language: string, textCurr: string) => {
      const currency = textCurr || defaultLanguageKeys[`${language}`];
      const value = valueToConvert && valueToConvert !== '-' ? valueToConvert : '0';
      const URL = `https://api.invertexto.com/v1/number-to-words?token=${import.meta.env.VITE_API_TOKEN}&number=${value}&language=${language}&currency=${currency}`;
      const res = await axios.get(URL);
      setConvertedNumber(res.data.text);
    },
    [defaultLanguageKeys],
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
            setTextCurrency('');
            setTextLanguage(event.target.value);
          }}
        >
          <option value="pt">pt</option>
          <option value="en">en</option>
          <option value="es">es</option>
          <option value="de">de</option>
          <option value="fr">fr</option>
        </Select>
        <Select onChange={event => setTextCurrency(event.target.value)}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="ARS">ARS</option>
          <option value="EUR">EUR</option>
        </Select>
      </ContainerSelectStyle>
      <InputNumber
        value={numberToConvert}
        onChange={event => setNumberToConvert(event.target.value)}
      />
      <PStyle>{convertedNumber}</PStyle>
    </>
  );
};

export default Extenso;
