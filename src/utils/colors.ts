export const COLORS = {
  white: '#ffffff',
  black: '#13172F',
  darkBlue: '#1F1ECC',
  blue: '#2726FF',
  transparent: 'transparent',
};

export const addAlpha = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`;
