import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { DayValue, Day } from 'react-modern-calendar-datepicker';
import React, { useState, useCallback } from 'react';
import { defaultCurrentDate, defaultInvestmentDate, maximumDate, minimumDate } from './date-picker-options'
import Header from '../../components/Header';
import { Container, InputContainer, Input, Title, InputCDBRate, CalculateBox, ComputedBox, ComputedResultBox } from './styles';
import api from '../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';

interface CalculateCDBRequest {
  investmentDate: string
  cdbRate: number
  currentDate: string
}

interface ComputedUnitResponse {
  unitPrice: number
  date: string
}

const formatStringDate = (date: Day): string => `${date.year}-${date.month}-${date.day}`
const getLastComputedUnitPrice = (arr: ComputedUnitResponse[]): number => arr[arr?.length - 1]?.unitPrice ?? 0

const Dashboard: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);
  const [investmentDay, setInvestmentDay] = useState<DayValue>(defaultInvestmentDate);
  const [currentDay, setCurrentInvestmentDay] = useState<DayValue>(defaultCurrentDate);
  const [computedCDB, setComputedCDB] = useState<ComputedUnitResponse[]>([]);
  const [cdbRate, setCDBRate] = useState<number>(103.5)

  const [isSending, setIsSending] = useState(false)
  const sendRequest = useCallback(async () => {
    if (isSending) return
    setIsSending(true)

    const requestBody: CalculateCDBRequest = {
      cdbRate,
      investmentDate: formatStringDate(investmentDay as Day),
      currentDate: formatStringDate(currentDay as Day)
    }
    const { data } = await api.post<ComputedUnitResponse[]>('api/v1/calculate/cdb', requestBody)
    
    setComputedCDB(data)
    setIsSending(false)
  }, [isSending, investmentDay, currentDay, cdbRate]) // update the callback if the state changes

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
          <Input>
            <InputCDBRate value={cdbRate} onChange={e => setCDBRate(Number(e.target.value))} type="number" />
            <CalculateBox>
              <p>CDB Rate</p>
              <button onClick={sendRequest}>Compute</button>
            </CalculateBox>
          </Input>
        </InputContainer>
        <ComputedBox>
          {
            isSending ?
              <CircularProgress color="secondary" /> :
              <ComputedResultBox>
                <p>Date: {formatStringDate(currentDay as Day)}</p>
                <p>Unit Price: <strong>{getLastComputedUnitPrice(computedCDB)} R$</strong></p>
              </ComputedResultBox>
          }
        </ComputedBox>
      </Container>
    </>
  );
};

export default Dashboard;
