/* eslint-disable no-alert */
import apiClient from '../../utils/api/search/apiClient';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function transactionSearch(values) {
  await sleep(500); // simulate server latency
  window.alert(`Your Form submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
