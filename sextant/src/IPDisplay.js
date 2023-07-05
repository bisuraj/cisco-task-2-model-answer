import React, { useEffect, useState } from 'react';

function IPDisplay() {
  const [ipAddress, setIPAddress] = useState('');
  const [ipv6Address, setIPv6Address] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        setIPAddress(data.ip);
        setIPv6Address(data.ip6);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className="rectangle">
        {ipAddress ? `My public IPv4 address is: ${ipAddress}` : 'Loading...'}
      </div>
      <div className="rectangle">
        {ipv6Address ? `My public IPv6 address is: ${ipv6Address}` : 'Loading...'}
      </div>
    </div>
  );
}

export default IPDisplay;
