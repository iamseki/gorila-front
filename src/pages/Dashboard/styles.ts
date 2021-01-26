import styled from 'styled-components';

interface InputProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #3a3a3a;
`;

export const InputContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Input = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background: ${({ total }: InputProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: InputProps): string => (total ? '#fff' : '#363F5F')};
`;
