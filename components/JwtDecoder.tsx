import React, { useState } from 'react';
const jwt_decode = require('jwt-decode');

const JwtDecoder: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [decoded, setDecoded] = useState<string | null>(null);

  const handleDecode = () => {
    try {
      const decodedToken = jwt_decode(token); // Ensure this is correctly recognized as a function
      setDecoded(JSON.stringify(decodedToken, null, 2));
    } catch (error) {
      setDecoded(`Error decoding token: ${(error as Error).message}`);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>JWT Decoder</h1>
      <textarea
        placeholder="Enter JWT here"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        rows={10}
        cols={50}
      ></textarea>
      <br />
      <button onClick={handleDecode}>Decode</button>
      {decoded && (
        <pre style={{ textAlign: 'left', marginTop: '20px', maxWidth: '600px', margin: '0 auto' }}>
          {decoded}
        </pre>
      )}
    </div>
  );
};

export default JwtDecoder;
