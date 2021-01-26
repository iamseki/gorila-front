import React, { useEffect } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {

  useEffect(() => {
    async function loadComputedCDBs(): Promise<void> {
      // TODO
    }

    loadComputedCDBs();
  }, []);

  return (
    <>
      <Header />
      <Container>

      </Container>
    </>
  );
};

export default Dashboard;
