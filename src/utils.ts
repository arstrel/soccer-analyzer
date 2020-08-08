export const dateStringToDate = (dateString: string): Date => {
  // In our csv the datea are of this format: 10/08/2018
  const parts = dateString.split('/');
  return new Date(
    parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10)
  );
};
