import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [
  { id: 0, name: 'Jan', value: 4000 },
  { id: 1, name: 'Feb', value: 3000 },
  { id: 2, name: 'Mar', value: 2000 },
  { id: 3, name: 'Apr', value: 2780 },
  { id: 4, name: 'May', value: 1890 },
  { id: 5, name: 'Jun', value: 2390 },
  { id: 6, name: 'Jul', value: 3490 },
  { id: 7, name: 'Aug', value: 2000 },
  { id: 8, name: 'Sep', value: 2780 },
  { id: 9, name: 'Oct', value: 1890 },
  { id: 10, name: 'Nov', value: 1890 },
  { id: 11, name: 'Dec', value: 1890 },
];

const settingProperty = { color: '#ce113b', onSlectionColor: '#4ce1b6'}

const TotalAtmTrans = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (item) => {
    const index = data.indexOf(item.payload);
    setActiveIndex(index);
  };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="card__title">
            <h5 className="bold-text">{t('dashboard_Card_and_trans.total_atm_trans')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {activeItem.value}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="value" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={index === activeIndex ? settingProperty.onSlectionColor : settingProperty.color }
                        key={entry.id}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalAtmTrans;
