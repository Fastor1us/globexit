import { useState } from 'react';

import styles from './card.module.css';
import phoneSVG from '../../images/phone.svg';
import emailSVG from '../../images/email.svg';

import Modal from '../modal/modal';

import type { TUserData } from '../../../interfaces/user-data-type';


const Card = (props: TUserData) => {
  const { name, phone, email } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <li className={styles.card} onClick={() => setIsModalOpen(true)}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>
          <img className={styles.svg} src={phoneSVG} alt="телефон" />
          <span className={styles.text}>{phone || '-'}</span>
        </p>
        <p className={styles.description}>
          <img className={styles.svg} src={emailSVG} alt="почта" />
          <span className={styles.text}>{email || '-'}</span>
        </p>
      </li>
      {isModalOpen && <Modal userData={props} setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Card;
