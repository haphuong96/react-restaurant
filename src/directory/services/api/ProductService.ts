import { BaseService, ApiResponse } from "./BaseService";

// Use interface for entity models that might be extended
export interface Product {
  id: number;
  name: string;
  price: number;
  currentPrice: number;
  isBestSeller: boolean;
  thumbnail?: string;
}

// Use type for function parameter shapes or intermediate types
type CreateProductData = Omit<Product, "id">;
type UpdateProductData = Partial<Product>;

export class ProductService {
  private static instance: ProductService;

  private api: BaseService;
  private readonly basePath = "/product";

  constructor() {
    // Use DI instead of singleton
    this.api = BaseService.getInstance();
  }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  // Get all products - renamed to match domain concept
  public async getProducts(
    params?: Record<string, unknown>
  ): Promise<ApiResponse<Product[]>> {
    return this.api.get<Product[]>(this.basePath, params);
  }

  public async getBestSellers(): Promise<ApiResponse<Product[]>> {
    return this.getProducts({ is_best_seller: true });
  }

  // Create new product - renamed to match domain concept
  public async createProduct(
    payload: CreateProductData
  ): Promise<ApiResponse<Product>> {
    return this.api.post<Product, CreateProductData>(this.basePath, payload);
  }

  // Update product - renamed to match domain concept
  public async updateProduct(
    id: number,
    payload: UpdateProductData
  ): Promise<ApiResponse<Product>> {
    return this.api.put<Product, UpdateProductData>(
      `${this.basePath}/${id}`,
      payload
    );
  }

  // Delete product - renamed to match domain concept
  public async deleteProduct(id: number): Promise<ApiResponse<void>> {
    return this.api.delete<void>(`${this.basePath}/${id}`);
  }
}
