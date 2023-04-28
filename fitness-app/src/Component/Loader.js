import React from 'react';
import { Stack } from '@mui/material';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
);

export default Loader;
