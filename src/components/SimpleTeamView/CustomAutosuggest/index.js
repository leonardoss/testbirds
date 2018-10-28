import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';
import * as actions from '../../../actions';

import MOCK_USERS from '../../../static/json/data.json';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (escapedValue === '') {
    return [];
  }

  return inputLength === 0 ? [] : MOCK_USERS.filter(lang => lang.username.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = suggestion => '';

const renderSuggestion = suggestion => (
  <div className="item" data-id={ suggestion.id } data-role={ suggestion.role }>
    <div className="box-image">
      <img src={ require(`../../../static/images/${suggestion.picture}`) } alt={ suggestion.username } />
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
      suggestions: [],
      noSuggestions: false,
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getSuggestions(value);
    const isInputBlank = value.trim() === '';
    const noSuggestions = !isInputBlank && suggestions.length === 0;

    this.setState({
      suggestions,
      noSuggestions,
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, obj) => {
    this.props.addMember(obj.suggestion);
    this.props.toogleAutosuggest();
  };

  render() {
    const { value, suggestions, noSuggestions } = this.state;

    const inputProps = {
      placeholder: 'Type',
      value,
      onChange: this.onChange,
    };

    return (
      <div>
        <Autosuggest
          suggestions={ suggestions }
          onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested }
          onSuggestionsClearRequested={ this.onSuggestionsClearRequested }
          onSuggestionSelected={ this.onSuggestionSelected }
          getSuggestionValue={ getSuggestionValue }
          renderSuggestion={ renderSuggestion }
          focusInputOnSuggestionClick={ false }
          inputProps={ inputProps }
        />
        {
          noSuggestions
            && (
            <div className="no-suggestions">
              <h4>Team member not found.</h4>
              <span>
Maybe she/he is not in your
                <a href="#">team?</a>
              </span>
            </div>
            )
        }
        <span
          onClick={ this.props.toogleAutosuggest }
          className="close"
        >
x
        </span>
      </div>
    );
  }
}

CustomAutosuggest.propTypes = {
  openAutosuggest: PropTypes.bool,
  addMember: PropTypes.func,
};

export default compose(connect(store => ({
  members: store.MembersReducer.members,
}), {
  ...actions,
}))(CustomAutosuggest);
