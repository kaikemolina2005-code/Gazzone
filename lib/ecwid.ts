import axios, { AxiosInstance } from 'axios';

interface EcwidProduct {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  compareToPrice?: number;
  imageUrl?: string;
  images?: Array<{ url: string; id: number }>;
  category?: { id: number; name: string };
  enabled: boolean;
  quantity: number;
}

interface EcwidOrder {
  id: number;
  orderNumber: string;
  email: string;
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  createDate: number;
  items: Array<{
    id: number;
    productId: number;
    productName: string;
    sku: string;
    quantity: number;
    price: number;
  }>;
}

class EcwidService {
  private client: AxiosInstance;
  private storeId: string;

  constructor() {
    this.storeId = process.env.ECWID_STORE_ID || '';
    this.client = axios.create({
      baseURL: `https://api.ecwid.com/v3/${this.storeId}`,
      headers: {
        Authorization: `Bearer ${process.env.ECWID_ACCESS_TOKEN}`,
      },
    });
  }

  /**
   * Get all products from Ecwid store
   */
  async getProducts(limit = 100, offset = 0): Promise<EcwidProduct[]> {
    try {
      const response = await this.client.get('/products', {
        params: {
          limit,
          offset,
        },
      });
      return response.data.items || [];
    } catch (error) {
      console.error('Error fetching products from Ecwid:', error);
      return [];
    }
  }

  /**
   * Get a single product by ID
   */
  async getProduct(productId: number): Promise<EcwidProduct | null> {
    try {
      const response = await this.client.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${productId} from Ecwid:`, error);
      return null;
    }
  }

  /**
   * Search products by keyword
   */
  async searchProducts(keyword: string, limit = 100): Promise<EcwidProduct[]> {
    try {
      const response = await this.client.get('/products', {
        params: {
          keyword,
          limit,
        },
      });
      return response.data.items || [];
    } catch (error) {
      console.error('Error searching products in Ecwid:', error);
      return [];
    }
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(categoryId: number, limit = 100): Promise<EcwidProduct[]> {
    try {
      const response = await this.client.get('/products', {
        params: {
          category: categoryId,
          limit,
        },
      });
      return response.data.items || [];
    } catch (error) {
      console.error(`Error fetching products from category ${categoryId}:`, error);
      return [];
    }
  }

  /**
   * Get order information
   */
  async getOrder(orderId: number): Promise<EcwidOrder | null> {
    try {
      const response = await this.client.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order ${orderId}:`, error);
      return null;
    }
  }

  /**
   * Get all orders
   */
  async getOrders(limit = 100, offset = 0): Promise<EcwidOrder[]> {
    try {
      const response = await this.client.get('/orders', {
        params: {
          limit,
          offset,
        },
      });
      return response.data.items || [];
    } catch (error) {
      console.error('Error fetching orders from Ecwid:', error);
      return [];
    }
  }

  /**
   * Update product inventory
   */
  async updateProductInventory(productId: number, quantity: number): Promise<boolean> {
    try {
      await this.client.put(`/products/${productId}`, {
        quantity,
      });
      return true;
    } catch (error) {
      console.error(`Error updating product inventory:`, error);
      return false;
    }
  }

  /**
   * Create an order
   */
  async createOrder(order: Partial<EcwidOrder>): Promise<EcwidOrder | null> {
    try {
      const response = await this.client.post('/orders', order);
      return response.data;
    } catch (error) {
      console.error('Error creating order in Ecwid:', error);
      return null;
    }
  }
}

export default new EcwidService();
