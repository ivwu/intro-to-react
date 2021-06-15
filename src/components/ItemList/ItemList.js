import React, { Component } from "react";

class ItemList extends Component {
  render() {
    const { menu } = this.props;
    return (
      <div className="itemList">
        <h2>This is the best Pokemon App ever</h2>
        {menu.length === 0 ? (
          <p className="none">No items currently</p>
        ) : (
          <ul>
            {menu.map((item, i) => (
              <li className="item" key={`${item}-${i}`}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ItemList;
