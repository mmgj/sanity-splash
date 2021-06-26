import React from 'react';

const Json = (data) => (
  <pre style={{ wordBreak: 'break-word', maxWidth: '90%' }}>
    {JSON.stringify(data, null, 2)}
  </pre>
);

export default Json;
