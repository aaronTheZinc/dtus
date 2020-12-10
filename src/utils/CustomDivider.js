import React from 'react';
import Typography from '@material-ui/core/Typography';

const CustomDivider = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 40,
      }}
    >
      <div
        style={{
          borderBottom: '1px solid black',
          width: '100%',
          margin: '0 20px',
        }}
      />
      <Typography
        variant="h3"
        style={{
          padding: '0 10px 0 10px',
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          borderBottom: '1px solid black',
          width: '100%',
          margin: '0 20px',
        }}
      />
    </div>
  );
};

export default CustomDivider;
