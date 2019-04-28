import React from "react";
import PropTypes from "prop-types";

class BuildFromJson extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      json: ""
    };
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      json: value
    });
  }

  onClick() {
    const { store } = this.props;
    const { json } = this.state;

    try {
      const tree = JSON.parse(json);
      store.buildTree(tree);
    } catch (e) {
      console.log(e);
      alert("JSON is not valid");
    }
  }

  render() {
    return (
      <div>
        <input type="button" value="Build from json" onClick={this.onClick} />
        <textarea value={this.state.json} onChange={this.onChange} />
      </div>
    );
  }
}

export default BuildFromJson;
