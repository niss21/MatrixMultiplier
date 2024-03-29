import { cofactor } from "./cofactor.js";
import { transpose } from "./transpose.js";

const adjoint = (matrix) => {
  return transpose(cofactor(matrix));
};

export { adjoint };
