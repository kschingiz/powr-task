import React from "react";
import PropTypes from "prop-types";

class ConvertToJson extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      json: ""
    };
  }

  onClick() {
    const { store } = this.props;

    const tree = store.getTree();

    this.setState({
      json: JSON.stringify(tree)
    });
  }

  render() {
    return (
      <div>
        <input type="button" value="Convert to JSON" onClick={this.onClick} />
        <textarea value={this.state.json} />
      </div>
    );
  }
}

export default ConvertToJson;
