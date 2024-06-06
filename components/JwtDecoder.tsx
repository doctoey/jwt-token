import React, { useState } from 'react';
import jwt from 'jsonwebtoken';

const JwtDecoder: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [header, setHeader] = useState<string | null>(null);
  const [payload, setPayload] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const handleDecode = () => {
    try {
      const decodedToken: any = jwt.decode(token, { complete: true });

      // Extract and set header, payload, and signature
      if (decodedToken) {
        setHeader(JSON.stringify(decodedToken.header, null, 2));
        setPayload(JSON.stringify(decodedToken.payload, null, 2));
        setSignature(decodedToken.signature);
      }
    } catch (error) {
      console.error(error);
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

      {/* Display header */}
      {header && (
        <div>
          <h2>Header:</h2>
          <pre style={{ textAlign: 'left' }}>{header}</pre>
        </div>
      )}

      {/* Display payload */}
      {payload && (
        <div>
          <h2>Payload:</h2>
          <pre style={{ textAlign: 'left' }}>{payload}</pre>
        </div>
      )}

      {/* Display signature */}
      {signature && (
        <div>
          <h2>Signature:</h2>
          <pre style={{ textAlign: 'left' }}>{signature}</pre>
        </div>
      )}
    </div>
  );
};

export default JwtDecoder;
