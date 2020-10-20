module.exports = schema = {
    properties: {
      search: {
        pattern: /^[a-z]+$/,
        message: 'Search term must be only small caps letters',
        required: true
      }
    }
  };