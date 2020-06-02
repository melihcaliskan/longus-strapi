'use strict';
var slug = require('slug')

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      if (data.name[0].en) {
        data.slug = slug(data.name[0].en, {
          lower: true
        });
      }
    },
  },
};
