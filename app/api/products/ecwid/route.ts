import { NextResponse } from 'next/server';
import ecwidService from '@/lib/ecwid';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');
    const search = url.searchParams.get('search');
    const categoryId = url.searchParams.get('category');

    let products;

    if (search) {
      products = await ecwidService.searchProducts(search, limit);
    } else if (categoryId) {
      products = await ecwidService.getProductsByCategory(parseInt(categoryId), limit);
    } else {
      products = await ecwidService.getProducts(limit, offset);
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
