export const findCurrentDestination = (destination, destinations) => {
  if (!destination) {
    return null;
  }
  return destinations.find((destinationFilter) => destinationFilter.name === destination);
};

export const findDestinationIndex = (destinations, searchedDestination) => (
  destinations.findIndex((destination) => String(destination._id) === searchedDestination)
);
