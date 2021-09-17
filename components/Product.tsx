import Image from 'next/image'


export interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: StaticImageData
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div}>
            project
        </div >
    )
}

export default Product