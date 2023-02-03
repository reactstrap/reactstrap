
export function Manager({ children }) {
  return (children);
}

export const Popper = jest.fn(({ children, placement }) => {
  return children({ 
    ref: () => {}, 
    placement, 
    style: {}, 
    arrowProps: { ref: () => {}, style: {} } });
})

export function Reference({ children }) {
  return children({ ref: () => {} });
}
