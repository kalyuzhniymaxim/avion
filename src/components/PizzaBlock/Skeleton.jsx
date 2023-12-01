import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
  className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <rect x="0" y="13" rx="0" ry="0" width="260" height="208" /> 
    <rect x="0" y="246" rx="10" ry="10" width="280" height="27" />
    <rect x="8" y="300" rx="10" ry="10" width="91" height="27" />
    <rect x="123" y="291" rx="20" ry="20" width="150" height="45" />
    {/* <rect x="0" y="308" rx="10" ry="10" width="280" height="85" /> */}
  </ContentLoader>
);

export default MyLoader;
