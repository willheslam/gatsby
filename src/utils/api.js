import * as mock from './mock-api';
import * as real from './real-api';

const MOCK_API = true;

export default (MOCK_API ? mock : real);
