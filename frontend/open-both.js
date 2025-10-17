import waitOn from 'wait-on';
import open from 'open';

(async () => {
  try {
    // Wait until backend and frontend are ready
    await waitOn({ resources: ['http://127.0.0.1:8000/', 'http://localhost:5173'] });

    // Open both URLs in Safari
    await open('http://localhost:5173', { app: { name: 'Safari' } });
    await open('http://127.0.0.1:8000/', { app: { name: 'Safari' } });

  } catch (err) {
    console.error('Error opening browsers:', err);
  }
})();