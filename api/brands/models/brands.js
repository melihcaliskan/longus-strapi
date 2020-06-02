const slugify = require('slugify');

module.exports = {
  beforeSave: async model => {
    if (model.title) {
      model.slug = slugify(model.title);
    }
  },
  beforeUpdate: async model => {
    if (model.getUpdate() && model.getUpdate().title) {
      model.update({
        slug: slugify(model.getUpdate().title),
      });
    }
  },
};
