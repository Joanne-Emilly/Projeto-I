import 'react-toastify/dist/ReactToastify.css';

import { Button, ConfigProvider, Modal } from 'antd';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import PersonCard from '../../components/Cards/PersonCard';
import { UlStyle } from './styles';
const RandomPeople = () => {
  const [data, setData] = useState([]);
  const [currentPerson, setCurrentPerson] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchData = useCallback(async () => {
    const URL = 'https://randomuser.me/api/?results=50';
    try {
      const res = await axios.get(URL);
      setData(res.data.results);
      setCurrentPerson('');
      console.log(res.data.results);
    } catch (err) {
      toast.error('Erro no servidor.');
    }
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <UlStyle>
        {data.map((person: { login: any; name: any; picture: any }) => {
          return (
            <PersonCard
              key={person.login.uuid}
              firstName={person.name.first}
              lastName={person.name.last}
              imgSrc={person.picture.large}
              onClick={() => {
                setCurrentPerson(person);
                showModal();
              }}
            />
          );
        })}
      </UlStyle>
      {currentPerson && (
        <ConfigProvider
          theme={{
            components: {
              Modal: {
                contentBg: '#152c5b',
              },
            },
            token: {
              colorText: '#fafafa',
            },
          }}
        >
          <Modal
            className="test"
            open={isModalOpen}
            onCancel={handleCancel}
            centered
            footer={() => <></>}
          >
            <h1>
              {currentPerson.name.first} {currentPerson.name.last}
            </h1>
            <div>
              <img src={currentPerson.picture.large} alt="" />
            </div>
            <p>Email: {currentPerson.email}</p>
            <div>
              <p>Rua: {currentPerson.location.street.name}</p>
              <p>Nº: {currentPerson.location.street.number}</p>
              <p>Cidade: {currentPerson.location.city}</p>
              <p>Estado: {currentPerson.location.state}</p>
              <p>País: {currentPerson.location.country}</p>
            </div>
          </Modal>
        </ConfigProvider>
      )}
      <ToastContainer />
    </>
  );
};

export default RandomPeople;
