import React, { Component } from "react";
import PropTypes from "prop-types";

import AddButton from "./AddButton";
import Box from "./Box";

import { observer } from "mobx-react";

class Container extends Component {
  constructor(props) {
    super(props);

    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(item) {
    const { current = "root", store } = this.props;

    store.addToTree(current, item);
  }

  renderInnerTree() {
    const { current = "root", store } = this.props;

    const items = store.getTreeItems(current) || [];

    return items.map(item => {
      let itemComponent = null;

      const defaultProps = {
        key: item.key,
        parent: current,
        current: item.key,
        store,
        item
      };

      if (item.type === "box") {
        itemComponent = <Box {...defaultProps} />;
      } else if (item.type === "container") {
        itemComponent = <Container {...defaultProps} />;
      }

      return itemComponent;
    });
  }

  render() {
    return (
      <div className="item container">
        {this.renderInnerTree()}
        <AddButton parent={this.props.current} onAdd={this.addNewItem} />
      </div>
    );
  }
}

Container.propTypes = {
  current: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  parent: PropTypes.string,
  item: PropTypes.object
};

export default observer(Container);
