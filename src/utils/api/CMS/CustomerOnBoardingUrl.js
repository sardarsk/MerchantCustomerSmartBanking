import { put, get,post } from '../base/index';
import axios, { defaultParams } from '../../../utils/api/base/axios';
//const baseUrl="http:\\localhost:8083/NanoConfig/v1/smart_banking/";
//const baseUrl = "http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";
const cmsConfigBaseUrl="http://localhost:8082/NanoCMS/v1/smart_banking/";
const customerBaseUrl="http://localhost:8081/NanoCustomerService/v1/customer/";
const saveImageToServer="https://picsum.photos/seed/1/600/";
export default {
 
  GetAllInstitution: (data) => {
    const params = { ...data };
      return get(cmsConfigBaseUrl+'getAllInstitutionId', { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpbnN0SWRcIjpcIk9NQVwiLFwidXNlck5hbWVcIjpcInNhcmRhcnNrXCIsXCJyb2xlXCI6XCJDVVNUT01FUlwiLFwiZGV2aWNlVHlwZVwiOlwiV0VCXCIsXCJhcHBsaWNhdGlvbkFjY2Vzc1wiOm51bGwsXCJleHBpcmF0aW9uVGltZVwiOjQzMjAwLFwibW9iaWxlQ291bnRyeUNvZGVcIjpcIis5MVwiLFwibW9iaWxlTnVtYmVyXCI6XCI5ODc5NDY0Mzg4XCIsXCJlbWFpbElkXCI6XCJzYXJkYXIxMTFAbmFldGhyYS5jb21cIixcImN1c3RJZFwiOlwiMDAwMDAwMDAwMDAzNlwiLFwid2FsbGV0SWRcIjpcIk1CMDAwMDAwMDAwMDAyNDAxQFVBRU9NQVwiLFwiYWNjb3VudE51bWJlclwiOlwiMDAwMDAwMDAwMDAyNFwiLFwiY2FyZFJlZmVyZW5jZU51bWJlclwiOlwiT01BMDAwMDAwMDAwMDA2NFwifSIsImV4cCI6MTY2NTE1OTgwOCwiaWF0IjoxNjY1MTE2NjA4fQ.GifSAEVsjuABTzlqslIuXnee8Ur83Cdf9OnHmNSd08wIHVGIvapg07wSfrBf1ClkBs7j0Dwl6oVvpfdTRa-7Tg`}}, { params });
  },
  getToFindActiveUser: (data) => {
    const params = { ...data };
      return get(cmsConfigBaseUrl+'getUserNameAvailabilitySatus/'+data, { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpbnN0SWRcIjpcIk9NQVwiLFwidXNlck5hbWVcIjpcInNhcmRhcnNrXCIsXCJyb2xlXCI6XCJDVVNUT01FUlwiLFwiZGV2aWNlVHlwZVwiOlwiV0VCXCIsXCJhcHBsaWNhdGlvbkFjY2Vzc1wiOm51bGwsXCJleHBpcmF0aW9uVGltZVwiOjQzMjAwLFwibW9iaWxlQ291bnRyeUNvZGVcIjpcIis5MVwiLFwibW9iaWxlTnVtYmVyXCI6XCI5ODc5NDY0Mzg4XCIsXCJlbWFpbElkXCI6XCJzYXJkYXIxMTFAbmFldGhyYS5jb21cIixcImN1c3RJZFwiOlwiMDAwMDAwMDAwMDAzNlwiLFwid2FsbGV0SWRcIjpcIk1CMDAwMDAwMDAwMDAyNDAxQFVBRU9NQVwiLFwiYWNjb3VudE51bWJlclwiOlwiMDAwMDAwMDAwMDAyNFwiLFwiY2FyZFJlZmVyZW5jZU51bWJlclwiOlwiT01BMDAwMDAwMDAwMDA2NFwifSIsImV4cCI6MTY2NTE1OTgwOCwiaWF0IjoxNjY1MTE2NjA4fQ.GifSAEVsjuABTzlqslIuXnee8Ur83Cdf9OnHmNSd08wIHVGIvapg07wSfrBf1ClkBs7j0Dwl6oVvpfdTRa-7Tg`}}, { params });
  },
  GetAllCurrencyCode: (data) => {
    const params = { ...data };
      return get(cmsConfigBaseUrl+'getAllCurrencyRates', { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpbnN0SWRcIjpcIk9NQVwiLFwidXNlck5hbWVcIjpcInNhcmRhcnNrXCIsXCJyb2xlXCI6XCJDVVNUT01FUlwiLFwiZGV2aWNlVHlwZVwiOlwiV0VCXCIsXCJhcHBsaWNhdGlvbkFjY2Vzc1wiOm51bGwsXCJleHBpcmF0aW9uVGltZVwiOjQzMjAwLFwibW9iaWxlQ291bnRyeUNvZGVcIjpcIis5MVwiLFwibW9iaWxlTnVtYmVyXCI6XCI5ODc5NDY0Mzg4XCIsXCJlbWFpbElkXCI6XCJzYXJkYXIxMTFAbmFldGhyYS5jb21cIixcImN1c3RJZFwiOlwiMDAwMDAwMDAwMDAzNlwiLFwid2FsbGV0SWRcIjpcIk1CMDAwMDAwMDAwMDAyNDAxQFVBRU9NQVwiLFwiYWNjb3VudE51bWJlclwiOlwiMDAwMDAwMDAwMDAyNFwiLFwiY2FyZFJlZmVyZW5jZU51bWJlclwiOlwiT01BMDAwMDAwMDAwMDA2NFwifSIsImV4cCI6MTY2NTE1OTgwOCwiaWF0IjoxNjY1MTE2NjA4fQ.GifSAEVsjuABTzlqslIuXnee8Ur83Cdf9OnHmNSd08wIHVGIvapg07wSfrBf1ClkBs7j0Dwl6oVvpfdTRa-7Tg`}}, { params });
  },
  registerCustomer: (data) => {
    const params = {data};
      return post(customerBaseUrl+'customerRegistration',data, { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpbnN0SWRcIjpcIk9NQVwiLFwidXNlck5hbWVcIjpcInNhcmRhcnNrXCIsXCJyb2xlXCI6XCJDVVNUT01FUlwiLFwiZGV2aWNlVHlwZVwiOlwiV0VCXCIsXCJhcHBsaWNhdGlvbkFjY2Vzc1wiOm51bGwsXCJleHBpcmF0aW9uVGltZVwiOjQzMjAwLFwibW9iaWxlQ291bnRyeUNvZGVcIjpcIis5MVwiLFwibW9iaWxlTnVtYmVyXCI6XCI5ODc5NDY0Mzg4XCIsXCJlbWFpbElkXCI6XCJzYXJkYXIxMTFAbmFldGhyYS5jb21cIixcImN1c3RJZFwiOlwiMDAwMDAwMDAwMDAzNlwiLFwid2FsbGV0SWRcIjpcIk1CMDAwMDAwMDAwMDAyNDAxQFVBRU9NQVwiLFwiYWNjb3VudE51bWJlclwiOlwiMDAwMDAwMDAwMDAyNFwiLFwiY2FyZFJlZmVyZW5jZU51bWJlclwiOlwiT01BMDAwMDAwMDAwMDA2NFwifSIsImV4cCI6MTY2NTE1OTgwOCwiaWF0IjoxNjY1MTE2NjA4fQ.GifSAEVsjuABTzlqslIuXnee8Ur83Cdf9OnHmNSd08wIHVGIvapg07wSfrBf1ClkBs7j0Dwl6oVvpfdTRa-7Tg`}},{ params });
  },
  saveImageInServer: (data) => {
    const params = {data};
      return post(saveImageToServer, { params });
  },
  addOrUpdateKYCInfoWithUsername: (data,instId) => {
    const params = {data};
      return post(customerBaseUrl+'addOrUpdateKYCInfo/'+instId,data,{ headers: 
        {
          "Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpbnN0SWRcIjpcIk9NQVwiLFwidXNlck5hbWVcIjpcInNhcmRhcnNrXCIsXCJyb2xlXCI6XCJDVVNUT01FUlwiLFwiZGV2aWNlVHlwZVwiOlwiV0VCXCIsXCJhcHBsaWNhdGlvbkFjY2Vzc1wiOm51bGwsXCJleHBpcmF0aW9uVGltZVwiOjQzMjAwLFwibW9iaWxlQ291bnRyeUNvZGVcIjpcIis5MVwiLFwibW9iaWxlTnVtYmVyXCI6XCI5ODc5NDY0Mzg4XCIsXCJlbWFpbElkXCI6XCJzYXJkYXIxMTFAbmFldGhyYS5jb21cIixcImN1c3RJZFwiOlwiMDAwMDAwMDAwMDAzNlwiLFwid2FsbGV0SWRcIjpcIk1CMDAwMDAwMDAwMDAyNDAxQFVBRU9NQVwiLFwiYWNjb3VudE51bWJlclwiOlwiMDAwMDAwMDAwMDAyNFwiLFwiY2FyZFJlZmVyZW5jZU51bWJlclwiOlwiT01BMDAwMDAwMDAwMDA2NFwifSIsImV4cCI6MTY2NTE1OTgwOCwiaWF0IjoxNjY1MTE2NjA4fQ.GifSAEVsjuABTzlqslIuXnee8Ur83Cdf9OnHmNSd08wIHVGIvapg07wSfrBf1ClkBs7j0Dwl6oVvpfdTRa-7Tg`,
          // "Content-Type": "multipart/form-data",
        }
      },
         { params });
  },

  
  GetAcquirerById: (data) => {
    const params = {  };
    return get(cmsConfigBaseUrl+'getAcquirerById/'+data, { params });
  },
};

// let headers = new HttpHeaders();
// headers.append('content-type', 'multipart/form-data');
// headers.append('accept', 'application/json');
// headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpbnN0SWRcIjpcIk9NQVwiLFwidXNlck5hbWVcIjpcInNhcmRhcnNrXCIsXCJyb2xlXCI6XCJDVVNUT01FUlwiLFwiZGV2aWNlVHlwZVwiOlwiV0VCXCIsXCJhcHBsaWNhdGlvbkFjY2Vzc1wiOm51bGwsXCJleHBpcmF0aW9uVGltZVwiOjQzMjAwLFwibW9iaWxlQ291bnRyeUNvZGVcIjpcIis5MVwiLFwibW9iaWxlTnVtYmVyXCI6XCI5ODc5NDY0Mzg4XCIsXCJlbWFpbElkXCI6XCJzYXJkYXIxMTFAbmFldGhyYS5jb21cIixcImN1c3RJZFwiOlwiMDAwMDAwMDAwMDAzNlwiLFwid2FsbGV0SWRcIjpcIk1CMDAwMDAwMDAwMDAyNDAxQFVBRU9NQVwiLFwiYWNjb3VudE51bWJlclwiOlwiMDAwMDAwMDAwMDAyNFwiLFwiY2FyZFJlZmVyZW5jZU51bWJlclwiOlwiT01BMDAwMDAwMDAwMDA2NFwifSIsImV4cCI6MTY2NTE1OTgwOCwiaWF0IjoxNjY1MTE2NjA4fQ.GifSAEVsjuABTzlqslIuXnee8Ur83Cdf9OnHmNSd08wIHVGIvapg07wSfrBf1ClkBs7j0Dwl6oVvpfdTRa-7Tg');
 