export interface NavItem {
  id: string;
  url: string;
  label: string;
}
export interface Product {
  id: number
  name: string
  description: string
  rating: number
  price: string
  imgSrc:string 
}
export interface CategoryItem {
  id:number
  title:string
}

export const Navlinks:NavItem[] = [
  {
    id: "1",
    url: "/",
    label: "Home",
  },
    {
    id: "2",
    url: "/store",
    label: "Store",
  },  {
    id: "3",
    url: "/aboutus",
    label: "About Us",
  },  {
    id: "4",
    url: "/contact",
    label: "Contact",
  },
  

];
 export const category:CategoryItem[]=[
  {id:1,
    title:"phone"
  },
   {id:2,
    title:"laptop"
  },
   {id:3,
    title:"macbook"
  },
   {id:4,
    title:"Earphones"
  },
   {id:5,
    title:"earphone"
  },
  {id:6,
    title:"watch"
  }
 
 ]

 export const bestsellers: Product[] = [
  {
    id: 1,
    name: 'Apple Earphones',
    description: 'Noise-cancellation, 40-hour battery',
    rating: 4.5,
    price: '$299.99',
    imgSrc: "/assets/apple_earphone_image.png"
  },
  {
    id: 2,
    name:'Bose QuietComfort 45',
    description:'Noise Cancellation, 24-hour battery',
    rating:4.5,
    price:'$329.99',
    imgSrc:"/assets/bose_headphone_image.png"
  },
  {
    id:3,
    name:'Samsung Galaxy S23',
    description: 'Fitness Tracking, AMOLED Display',
    rating:4.5,
    price:'$799.99',
    imgSrc:'/assets/samsung_s23phone_image.png',
  },
  {
    id: 4,
    name:'Garmin Venu 2',
    description:'Noise Cancellation, 24-hour battery',
    rating:4.5,
    price:'$349.99',
    imgSrc:'/assets/venu_watch_image.png',
  },
 
]
export const products: Product[] = [
  {
    id: 1,
    name: 'Apple Earphones',
    description: 'Noise-cancellation, 40-hour battery',
    rating: 4.5,
    price: '$299.99',
    imgSrc: "/assets/apple_earphone_image.png"
  },
  {
    id: 2,
    name:'Bose QuietComfort 45',
    description:'Noise Cancellation, 24-hour battery',
    rating:4.5,
    price:'$329.99',
    imgSrc:"/assets/bose_headphone_image.png"
  },
  {
    id:3,
    name:'Samsung Galaxy S23',
    description: 'Fitness Tracking, AMOLED Display',
    rating:4.5,
    price:'$799.99',
    imgSrc:'/assets/samsung_s23phone_image.png',
  },
  {
    id: 4,
    name:'Garmin Venu 2',
    description:'Noise Cancellation, 24-hour battery',
    rating:4.5,
    price:'$349.99',
    imgSrc:'/assets/venu_watch_image.png',
  },
  {
    id: 5,
    name: 'PlayStation 5',
    description: 'Ultra-HD, 825GB SSD, Ray Graphics',
    rating: 4.5,
    price: '$499.99',
    imgSrc: '/assets/apple_earphone_image.png',
  },
  {
    id: 6,
    name: 'MacBook Pro 16',
    description: 'M2 Pro Chip, 16GB RAM, 512GB SSD',
    rating: 4.5,
    price: '$2,499.99',
    imgSrc: '/assets/macbook_image.png',
  },
  {
    id: 7,
    name: 'Sony WF-1000XM5',
    description: 'Noise-Cancellation, Hi-Res Audio',
    rating: 4.5,
    price: '$299.99',
    imgSrc: '/assets/sony_airbuds_image.png',
  },
  {
    id: 8,
    name: 'Samsung Projector 4k',
    description: '4K Ultra HD, Realistic, Built-In Speaker',
    rating: 4.5,
    price: '$1,499.99',
    imgSrc: '/assets/projector_image.png'
  },
  {
    id: 9,
    name: 'ASUS ROG Zephyrus G16',
    description: 'Intel Core i9, RTX 4070, 16GB, 1TB',
    rating: 4.5,
    price: '$1,999.99',
    imgSrc: '/assets/asus_laptop_image.png',
  },
  {
    id: 10,
    name: 'Apple Earphones',
    description: 'Noise-cancellation, 40-hour battery',
    rating: 4.5,
    price: '$299.99',
    imgSrc: '/assets/apple_earphone_image.png',
  },
  {
    id: 11,
    name: 'Bose QuietComfort 45',
    description: 'Noise Cancellation, 24-hour battery',
    rating: 4.5,
    price: '$329.99',
    imgSrc: '/assets/bose_headphone_image.png',
  },
  {
    id: 12,
    name: 'Samsung Galaxy S23',
    description: 'Fitness Tracking, AMOLED Display',
    rating: 4.5,
    price: '$799.99',
    imgSrc: '/assets/samsung_s23phone_image.png',
  },
  {
    id: 13,
    name: 'Garmin Venu 2',
    description: 'Noise Cancellation, 24-hour battery',
    rating: 4.5,
    price: '$349.99',
    imgSrc: '/assets/venu_watch_image.png',
  },
  {
    id: 14,
    name: 'PlayStation 5',
    description: 'Ultra-HD, 825GB SSD, Ray Graphics',
    rating: 4.5,
    price: '$499.99',
    imgSrc: '/assets/apple_earphone_image.png',
  },
  {
    id: 15,
    name: 'Canon EOS R5',
    description: '45MP Sensor, 8K Video Recording',
    rating: 4.5,
    price: '$3,899.99',
    imgSrc: '/assets/cannon_camera_image.png',
  },
  {
    id: 16,
    name: 'MacBook Pro 16',
    description: 'M2 Pro Chip, 16GB RAM, 512GB SSD',
    rating: 4.5,
    price: '$2,499.99',
    imgSrc: '/assets/macbook_image.png',
  },
  {
    id: 17,
    name: 'Sony WF-1000XM5',
    description: 'Noise-Cancellation, Hi-Res Audio',
    rating: 4.5,
    price: '$299.99',
    imgSrc: '/assets/sony_airbuds_image.png',
  },

  {
    id:18,
    name: 'ASUS ROG Zephyrus G16',
    description: 'Intel Core i9, RTX 4070, 16GB, 1TB',
    rating: 4.5,
    price: '$1,999.99',
    imgSrc: '/assets/asus_laptop_image.png',
  },
]