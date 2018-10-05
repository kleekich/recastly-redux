import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';
import thunk from 'redux-thunk';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) =>{
    dispatch(handleVideoSearch(q));
  }
});

// var mapStateToProps = (state) => {
//   return{};
// };

var SearchContainer = (
  connect(null, mapDispatchToProps)(Search)  
);

// connect(mapStateToProps)
export default SearchContainer;
