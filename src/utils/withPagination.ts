const WithPagination = (arr: any, elementsPerPage: number, currentPage: number) => {
  // Show limited count of orders
  return arr.slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage);
};

export default WithPagination;
