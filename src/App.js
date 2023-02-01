import Directory from './components/directory/directory.component'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Meats',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
  ];

  return <Directory categories={categories} />;
};


      // <div className='category-container'>
      //   {/* <img /> */}
      //   <div className='category-body-container'>
      //     <h2>Jackets</h2>
      //     <p>Shop Now</p>
      //   </div>
      // </div>
      // <div className='category-container'>
      //   {/* <img /> */}
      //   <div className='category-body-container'>
      //     <h2>Sneakers</h2>
      //     <p>Shop Now</p>
      //   </div>
      // </div>
      // <div className='category-container'>
      //   {/* <img /> */}
      //   <div className='category-body-container'>
      //     <h2>Womens</h2>
      //     <p>Shop Now</p>
      //   </div>
      // </div>
      // <div className='category-container'>
      //   {/* <img /> */}
      //   <div className='category-body-container'>
      //     <h2>Mens</h2>
      //     <p>Shop Now</p>
      //   </div>
      // </div>

      export default App;
