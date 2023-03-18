export interface ProductInterface {
  category: {
    id: number,
    image: string,
    name: string, 
    creationAt: string,
    updateAt: string
  },
  description: string,
  id: number,
  images: string[],
  price: number,
  title: string,
  creationAt: string,
  updatedAt: string
}
