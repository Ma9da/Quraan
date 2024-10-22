import { Isurah } from './isurah';
export interface IsurahsResponse {
  code: number;
  status: string;
  data: Isurah[];
}
