import React, { Component } from 'react';
import './PersonPage.css';
import { PersonDetails } from './../../components/PersonDetails/PersonDetails';
import { RecommendedPersons } from './../../components/RecommendedPersons/RecommendedPersons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PersonPage extends Component {
  person = () => this.props.personReducer.persons.find(row => row.person.name === this.props.match.params.personName)

  render () {
    return (
      <div className="Person">
        <PersonDetails person={this.person()}/>
        <RecommendedPersons {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    personReducer: state.personReducer
  };
};

export default connect(mapStateToProps, null)(PersonPage);

PersonPage.propTypes = {
  personReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
