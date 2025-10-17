import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Box p={5}>
      <Text fontSize="xl">Backend says: {message}</Text>
    </Box>
  );
}

export default App;