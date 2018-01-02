import React from 'react';
import PropTypes from 'prop-types';

import ListViewItem from '../ListViewItem';

import './ListView.css';

const ListView = (props) => (
  <div className="row">
    { props.data.map((item) => <ListViewItem 
                                  key={item.id}
                                  img={item.img}
                                  name={item.name}
                                  brand={item.brand}
                                  price={item.price}
                                  purchaseItem={props.purchaseItem}
                                />)
    }
  </div>
);

ListView.propTypes = {
  data: PropTypes.array.isRequired
};

export default ListView;