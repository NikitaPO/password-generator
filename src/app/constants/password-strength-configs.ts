export const passwordStrengthConfigs = {
  bad: {
    numbers: false,
    uppercase: false,
    lowercase: false,
    symbols: false,
    length: 8,
  },
  low: {
    numbers: false,
    uppercase: true,
    lowercase: true,
    symbols: false,
    length: 15,
  },
  medium: {
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
    length: 25,
  },
  high: {
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
    length: 40,
  },
};
