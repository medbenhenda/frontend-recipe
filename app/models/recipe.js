import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    author: DS.attr(),
    type_recipe: DS.attr(),
    image: DS.attr(),
    description: DS.attr(),
    created_at: DS.attr(),
    updated_at: DS.attr()
});