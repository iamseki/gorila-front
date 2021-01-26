import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-content: center;
    strong {
      color: #FFF;
      align-self: center;
      margin-left: 7px;
    }
    img {
      width: 48px;
      height: 48px;
    }
  }
`;
