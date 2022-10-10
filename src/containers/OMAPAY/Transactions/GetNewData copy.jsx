import React, { useMemo } from 'react';

const GetNewData = () => {
 
  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 30; i += 1) {
      data.push({
        id: i,
        card: ['564490****1001','564490****1002','564490****1003','564490****1004','564490****1005','564490****1006','564490****1007'][Math.floor((Math.random() * 7))],
        accountNumber: ['S840****1001','S840****1002','C840****1003','C840****1004','P840****1005','P840****1006','W1001****1007'][Math.floor((Math.random() * 7))],
        name: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        traceNumber: ['0000120', '0000121', '0000122', '0000123'][Math.floor((Math.random() * 4))],
        refNumber: ['2202010000120', '2202010000121', '2202010000122', '2202010000123'][Math.floor((Math.random() * 4))],
        txnDate: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        terminalId: ['TERM001', 'TERM002', 'ATM001', 'POS001', 'POS002', 'ECOM_MERCH_001'][Math.floor((Math.random() * 6))],
        terminalLoc: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
        status: ['00', '05', '96', '08', '52'][Math.floor((Math.random() * 5))],
      });
    }
  };

  rows();
  return data;
};

export default GetNewData;
