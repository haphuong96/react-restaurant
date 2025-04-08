import { BaseService } from "@/directory/services/api/BaseService";
import { ProductService } from "@/directory/services/api/ProductService";

export const baseService = new BaseService();
export const productService = new ProductService(baseService);
