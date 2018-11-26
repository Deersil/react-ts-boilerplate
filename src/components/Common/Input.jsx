import React from 'react';
import { TextField as MaterialTextField } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextField = styled(MaterialTextField)`
  width: 100%;
`;

const Input = ({ input, ...rest }) => {
  return <TextField {...rest} {...input} variant="outlined" margin="normal" />;
};
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  name: '',
};

export default Input;
