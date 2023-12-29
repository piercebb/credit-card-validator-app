export const isValidLuhn = (num: string): boolean => {
  let numbers = Array.from(num, Number);
  if (numbers.includes(NaN) || numbers.length === 0) {
    return false;
  }
  let checksum = numbers[numbers.length - 1];
  let sum = numbers
    .reverse()
    .slice(1)
    .map((num, i) => {
      let val = num;
      if (!(i % 2)) {
        val = num * 2;
        if (val > 9) {
          val = Number(String(val)[0]) + Number(String(val)[1]);
        }
      }
      return val;
    })
    .reduce((sum, val) => {
      return (sum += val);
    });
  return 10 - (sum % 10) === checksum;
};
