import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
