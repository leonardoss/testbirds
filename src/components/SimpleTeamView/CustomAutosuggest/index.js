import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../../../actions';

import Autosuggest from 'react-autosuggest';
import MOCK_USERS from '../../../static/json/data.json';
  
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  console.log('getSuggestions inputValue', inputValue);
  console.log('getSuggestions inputLength', inputLength);

  // return ['not found'];

  return inputLength === 0 ? [] : MOCK_USERS.filter(lang =>
    lang.username.toLowerCase().slice(0, inputLength) === inputValue
  );
};
  
const getSuggestionValue = suggestion => '';

const renderSuggestion = suggestion => (
  <div className="item" data-id={suggestion.id} data-role={suggestion.role}>
    <div className="box-image">
      <img src={require('../../../static/images/' + suggestion.picture)} alt={suggestion.username} />
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
  
  onSuggestionSelected = (event, obj ) => {
    this.props.addMember(obj.suggestion);
    this.props.toogleAutosuggest();
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
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          focusInputOnSuggestionClick={false} 
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
  addMember: PropTypes.func
};

export default compose(connect(store => ({
  members: store.MembersReducer.members
}), {
  ...actions
}))(CustomAutosuggest);