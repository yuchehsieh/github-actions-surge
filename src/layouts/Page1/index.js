import React from 'react';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const Page1 = () => {
    return (
        <div className={styles.container}>
            <Header />
            Page 1
        </div>
    );
};

export default Page1;
