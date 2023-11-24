import React, { useEffect, useState, Children, cloneElement } from 'react';
import styles from './Carousel.module.scss'
import{FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const PAGE_WIDTH = 450 

 const Main = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeft =() =>{
    setOffset((currentOffset) =>{
        const newOffset = currentOffset + PAGE_WIDTH
        return Math.min(newOffset,0)
    })
  }
  const handleRight = () => {
    setOffset((currentOffset) =>{
        const newOffset = currentOffset - PAGE_WIDTH
        
        return Math.max(newOffset, -1350)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      }),
    );
  }, []);
  return (
    <div className={styles.main}>
    <FaChevronLeft className={styles.arrow} onClick={handleLeft} />
      <div className={styles.windiw}>
        <div className={styles.allItems} style={{
            transform: `translateX(${offset}px)`
        }}>
        
        {pages}</div>
      </div>
      <FaChevronRight className={styles.arrow} onClick={handleRight} />
    </div>
  );
};

export default Main