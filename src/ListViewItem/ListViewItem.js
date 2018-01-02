import React from 'react';
import './ListViewItem.css';

const ListViewItem = (props) => (
  <div className="col-md-4 list-view-item">
    <img src={props.img} className="img-responsive" alt="" />
    <h3>{props.name}</h3>
    <p>{props.brand}</p>
    <p style={{fontWeight: 'bold', fontSize: '12px'}}>${props.price}</p>
    
    <div 
      className="btn btn-success"
      onClick={() => props.purchaseItem(props.name)}
    >
      Buy
    </div>
  </div>
);

export default ListViewItem;
