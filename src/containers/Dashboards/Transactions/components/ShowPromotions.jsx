import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Panel from '@/shared/components/Panel';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 1 } },
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 1536, settings: { slidesToShow: 1 } },
    { breakpoint: 100000, settings: { slidesToShow: 2 } },
  ],
};

const motivations = [
  { id: 0, name: 'Our Goal', value: "Our goal is to achive No.1 Bank in USA." },
  { id: 1, name: 'Our Mission', value: "We are spreading our branches to all over the world." },
  { id: 2, name: 'Our Success', value: "We are the No.2 bank in USA." },
  { id: 3, name: 'Our Progress', value: "We are progressing towards contactless payment." }
];

const ShowPromotions = () => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={12} xl={12} sm={12} xs={12} title={t('dashboard_Card_and_trans.promotions')}>
      <Slider {...settings} className="dashboard__carousel">
      {motivations.map((entry) => (
        <div>
          <div className="dashboard__carousel-slide">
            <p className="dashboard__carousel-title">{entry.name}</p>
            <p>{entry.value}</p>
          </div>
        </div>
        ))}
      </Slider>
    </Panel>
  );
};

export default ShowPromotions;
