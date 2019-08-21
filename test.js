const index = require('./');

if (typeof index === 'function') {
  console.log('All is good');
} else {
  throw new Error('Index not found');
}
