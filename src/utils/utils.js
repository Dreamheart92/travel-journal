export const findCurrentDestination = (destination, destinations) => {
  if (!destination) {
    return null;
  }
  return destinations.find((destinationFilter) => destinationFilter.name === destination);
};
