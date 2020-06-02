const slug = require('slug');

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      if (data.name) {
        data.slug = slug(data.name, {
          lower: true
        });
      }
    },
  },
};
