import { ProductType } from "./productTypes";

export interface CartType extends ProductType {
  order: number;
}
