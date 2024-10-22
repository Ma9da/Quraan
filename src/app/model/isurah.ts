import { Iayah } from './iayah';
export interface Isurah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: 'Meccan' | 'Medinan';
  ayahs?: Iayah[];
}
