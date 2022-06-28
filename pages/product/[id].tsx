import { useRouter } from 'next/router'
import React from 'react'


type Props = {}

const ProductDetal = (props: Props) => {
    const router= useRouter()
    const {id} = router.query;
  return (
    <div>Products{id}</div>
  )
}

export default ProductDetal