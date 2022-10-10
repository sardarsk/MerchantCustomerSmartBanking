import api from '../../../utils/api/KycOnboarding/KycDocumentUploadService'
/* eslint-disable no-alert */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export default (async function showResults(values) {
  //await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  const response = await api.custRegistration.put(values);
  window.alert("Map: "+response.status);
});
