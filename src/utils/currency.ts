export const formatZAR = (value: number | undefined | null) => {
  const v = typeof value === 'number' ? value : Number(value ?? 0);
  try {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(v);
  } catch (e) {
    return `R${v.toFixed(2)}`;
  }
};
