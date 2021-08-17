import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = (getSelectedYear) => {
    setSelectedYear(getSelectedYear);
  };

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          yearSelected={selectedYear}
          onFilterChangeHandler={filterChangeHandler}
        />
        <ExpenseChart expense={filteredItems} />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
};
export default Expenses;
