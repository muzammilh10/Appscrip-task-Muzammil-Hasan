'use Client'
import React, { useEffect, useState } from 'react';
import './cardDetail.css';
import SidebarFilter from '../Sidebar/Sidebar'
import Image from 'next/image';

interface CardDetailProps {
  sidebar?: boolean;
}

const CardDetail: React.FC<CardDetailProps> = ({ sidebar }) => {
  const [imageData, setImageData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setImageData(json))
  }, [])

  return (
    <div className='cardDetail'>
      {sidebar && <SidebarFilter />}
      <div className="main">
        <ul className="cards">
          {imageData.map((item, index) => {
            const { image, title, description } = item
            return (
              <>
                <li key={index} className="cards_item">
                  <div className="card">
                    <div className="card_image"><Image src={image} alt={`image${index}`} width={500}
                      height={500} /> </div>
                    <div className="card_content">
                      <h2 className="card_title">{title}</h2>
                    </div>
                  </div>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardDetail;
