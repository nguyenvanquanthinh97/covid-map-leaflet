export const is2FloatsEqual = (f1, f2) => {
  const precision = 0.0000001;

  if(Math.abs(f1 - f2) <= precision){
    return true;
  }
  return false;
}