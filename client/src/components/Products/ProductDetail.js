import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Product from './Product';

export default function ProductDetail(props) {
    const { id } = useParams();
    const [ product, setProduct ] = useState(null);
    console.log('k'+id);
  useEffect(() => {
    const config = {
      url: `http://localhost:5000/api/v1/products/${id}`,
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }
    axios(config).then((response) => {
      setProduct(response.data)
    }).catch((err) => {
      console.log('error in ProductDetail useEffect');
    })
  }, [id]);

    if (product) {
      return <Product product={product} />;
    }
    return <div>Loading...</div>;
}