import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker';
import React, { useState, useEffect } from 'react';
import { defaultCurrentDate, defaultInvestmentDate, maximumDate, minimumDate } from './date-picker-options'
import Header from '../../components/Header';
import { Container, InputContainer, Input, Title } from './styles';

const Dashboard: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);
  const [investmentDay, setInvestmentDay] = useState<DayValue>(defaultInvestmentDate);
  const [currentDay, setCurrentInvestmentDay] = useState<DayValue>(defaultCurrentDate);

  useEffect(() => {

    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <InputContainer>
          <Input>
            <DatePicker
              value={investmentDay}
              onChange={setInvestmentDay}
              inputPlaceholder="Select investment date"
              shouldHighlightWeekends
              calendarPopperPosition="bottom"
              maximumDate={maximumDate}
              minimumDate={minimumDate}
            />
            <Title>Investment Date</Title>
          </Input>
          <Input>
          <DatePicker
            value={currentDay}
            onChange={setCurrentInvestmentDay}
            inputPlaceholder="Select current date"
            shouldHighlightWeekends
            calendarPopperPosition="bottom"
            maximumDate={maximumDate}
            minimumDate={minimumDate}
          />
          <Title>Current Date</Title>
          </Input>
        </InputContainer>
      </Container>
    </>
  );
};

export default Dashboard;
