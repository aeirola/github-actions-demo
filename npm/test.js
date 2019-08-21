const index = require('./');

if (index) {
  console.log('All is good');
} else {
  throw new Error('Index not found');
}
