import React, { useState } from 'react';
import AboutSection from '../components/AboutSection'
import Contact from '../components/Contact'
import Login from '../components/Login'
import { Button, Modal } from 'react-bootstrap';

// Пример компонента с графиком
// const ChartComponent = () => {
//   return (
//     <div>
//       {/* Вставьте сюда ваш график */}
//       <iframe
//         src="https://coinpaprika.com/widget/coin/btc-bitcoin/chart/"
//         width="100%"
//         height="400"
//         title="Bitcoin Chart"
//         style={{ border: 'none' }}
//       ></iframe>
//     </div>
//   );
// };

// Основной компонент с кнопкой и модальным окном
const ChartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          {/* <ChartComponent /> */}
          {/* <AboutSection/> */}
          {/* <Login /> */}
          <Contact />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChartModal;
