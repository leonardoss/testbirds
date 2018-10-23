import React from 'react';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';
import MOCK_USERS from '../../static/json/data.json';
import MOCK_IMAGE from "../../static/images/avatar-default.png";
  
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : MOCK_USERS.filter(lang =>
    lang.username.toLowerCase().slice(0, inputLength) === inputValue
  );
};
  
const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className="item" data-id={suggestion.id} data-role={suggestion.role}>
    <div className="box-image">
      <img src={MOCK_IMAGE} alt={suggestion.username} />
    </div>
    <div className="box-content">
      <h4>
        {suggestion.username}
      </h4>
    </div>
  </div>
);

class CustomAutosuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type',
      value,
      onChange: this.onChange
    };
    
    return (
      <div>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <span 
          onClick={this.props.toogleAutosuggest}
          className="close">x</span>
      </div>
    );
  }
}

CustomAutosuggest.propTypes = {
  openAutosuggest: PropTypes.bool,
};

export default CustomAutosuggest;
