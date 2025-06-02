import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const BASE_WIDTH = 462.506;
const BASE_HEIGHT = 1029.12;

export function cw(n: number): number {
  return (SCREEN_WIDTH / BASE_WIDTH) * n;
}

export function ch(n: number): number {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * n;
}