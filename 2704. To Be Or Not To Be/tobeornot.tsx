type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const toBe = (val2: any): boolean => {
    if (val === val2) return true;
    throw "Not Equal";
  };

  const notToBe = (val2: any): boolean => {
    if (val !== val2) return true;
    throw "Equal";
  };

  return {
    toBe: toBe,
    notToBe: notToBe,
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
