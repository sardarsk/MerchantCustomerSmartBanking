import axios from 'axios';
import { getToken } from '../../helpers';

export const defaultParams = () => ({
  headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' },
});

export default axios;
