import React, { Component } from 'react';
import './App.css';

import Header from '../Header';
import ListView from '../ListView';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      searchTerm: '',
      data: [],
      filteredData: []
    };
  }
  
  componentWillMount() {
    const data = [
            {
              id: 1, 
              name: 'Yeezy Boost 350 V2', 
              brand: 'Adidas', 
              price: 200.00, 
              img: 'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color' 
            },
            {
              id: 2, 
              name: 'Stan Smith', 
              brand: 'Adidas', 
              price: 100.00, 
              img: 'https://www.flightclub.com/media/catalog/product/6/3/63611743034-adidas-stan-smith-j-gs-ftwwht-ftwwht-green-201231_1.jpg' 
            },
            {
              id: 3, 
              name: 'Air Max 97 Silver Bullet 2017', 
              brand: 'Nike', 
              price: 220.00, 
              img: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800622_1.jpg' 
            },
            {
              id: 4, 
              name: 'Ultra Boost 3.0 Tripple White', 
              brand: 'Adidas', 
              price: 129.00, 
              img: 'https://stockx.imgix.net/Adidas-Ultra-Boost-3pt0-Triple-White.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color' 
            },
            {
              id: 5, 
              name: 'W Air Max Ultra 2.0', 
              brand: 'Nike', 
              price: 110.00, 
              img: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802352_01.jpg' 
            },
            {
              id: 6, 
              name: 'Air Jordan 13 Retro', 
              brand: 'Nike', 
              price: 220.00, 
              img: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800391_1.jpg' 
            },
            {
              id: 7,
              name: 'Adidas Yeezy Boost 350 V2',
              brand: 'Adidas',
              price: 1000.00,
              img: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800389_1.jpg'
            },
            {
              id: 8,
              name: 'NMD XR1',
              brand: 'Adidas',
              price: 140.00,
              img: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802372_01.jpg'
            },
            {
              id: 9,
              name: 'All Star Hi',
              brand: 'Converse',
              price: 70.00,
              img: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/c/o/converse-all-star-hi-optical-white-991584_1.png'
            }
        ];
    const filteredData = [ ...data ];
    
    this.setState({ data, filteredData });
  }
  
  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
  }
  
  componentWillUnmount() {
    console.log('COMPONENT WILL UNMOUNT');
  }
  
  updateSearchTerm = (e) => {
    e.stopPropagation();
    
    const searchTerm = e.target.value;
    const filteredData = this.state.data.filter(datum => datum.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    this.setState({ searchTerm, filteredData });
    
    console.log('SEARCH TERM: ', this.state.searchTerm);
  };
  
  purchaseItem = (itemName) => {
    alert(`Just copped the ${itemName}!`);
  };
  
  render() {
    return (
        <div className="container">
          <div className="row">
            <Header />
            <input 
              className="form-control"
              placeholder="Start typing to search..."
              type="text"
              onChange={this.updateSearchTerm}
            />
          </div>
          <div className="row">
            <h2>{this.state.searchTerm}</h2>
            <ListView 
              data={this.state.filteredData} 
              purchaseItem={this.purchaseItem}
            />
          </div>
        </div>
    );
  }
}

export default App;
