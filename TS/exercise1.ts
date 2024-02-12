const twoFer = (name: string = "you"): string => {
  return `One for ${name}, one for me`;
};

const isLeapYear = (year: number): boolean => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 100) {
    return true;
  } else {
    return false;
  }
};
