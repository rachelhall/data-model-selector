export const groupBy = (array: any[], key: string | number) => {
  return array.reduce((result, currentValue, index) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};
