import { useEffect } from 'react';

import styles from './modal.module.css';

import cross from '../../images/cross.svg';

import { TUserData } from '../../../interfaces/user-data-type';

type TProps = {
  userData: TUserData;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Modal = ({ userData, setIsModalOpen }: TProps) => {
  useEffect(() => {
    function escClickHandler(e: KeyboardEvent) {
      e.key === 'Escape' && setIsModalOpen(false)
    }
    document.addEventListener('keydown', escClickHandler);
    return () => {
      document.removeEventListener('keydown', escClickHandler);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <section className={styles.modalWindow} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{userData.name}</h2>
          <img
            src={cross}
            className={styles.cross}
            alt='крест для закрытия окна'
            onClick={closeModal}
          />
        </div>
        <ul className={styles.textUserList}>
          {
            [
              ['Телефон', 'phone'],
              ['Почта', 'email'],
              ['Дата приёма', 'hire_date'],
              ['Должность', 'position_name'],
              ['Подразделение', 'department'],
            ].map((item) => {
              return (
                <li className={styles.textUserItem} key={item[0]}>
                  <p className={styles.typeName}>
                    {`${item[0]}:` || '-'}
                  </p>
                  <p className={styles.typeDescription}>
                    {userData[item[1]] || '-'}
                  </p>
                </li>
              )
            })}
        </ul>
        <p className={styles.typeName}>
          Дополнительная информация:
        </p>
        <p className={styles.typeDescription} style={{ margin: '12px 0' }}>
          {userData.address || '-'}
        </p>
      </section>
    </div>
  );
}

export default Modal;
