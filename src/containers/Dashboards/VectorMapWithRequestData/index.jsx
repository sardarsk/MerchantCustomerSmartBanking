import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import Map from './components/Map';
import { fetchData } from './redux/actions';

const VectorMapWithRequestData = ({ fetchDataAction, covidData }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);

  return (
    <Container>
      <Row>
        <Map
          mapData={covidData && covidData.mapData}
        />
      </Row>
    </Container>
  );
};

VectorMapWithRequestData.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  covidData: PropTypes.shape(),
};

VectorMapWithRequestData.defaultProps = {
  covidData: null,
};

const mapStateToProps = state => ({
  covidData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(VectorMapWithRequestData);
