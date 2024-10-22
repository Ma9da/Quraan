import { Iayah } from './iayah';

export interface IsurahResponse {
  code: number;
  status: string;
  data: {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: 'Meccan' | 'Medinan';
    ayahs: Iayah[]; // Array of ayahs
  };
}
