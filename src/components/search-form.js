import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    return (
      <div
        className="search-form"
        style={{
          margin: "25px 25px 0px 0px",
        }}
      >
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.searchState}
          style={{
            borderRadius: "5px",
            border: "0.5px solid rgb(53, 51, 51)",
          }}
        />

        <button
          className="search-button"
          onClick={() => this.props.handleSubmit(this.state.searchText)}
          style={{
            fontFamily: "Balsamiq Sans, cursive",
            borderRadius: "5px",
            border: "0.5px solid rgb(53, 51, 51)",
            marginLeft: "3px",
            cursor: "pointer",
            color: "rgb(53, 51, 51)",
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
