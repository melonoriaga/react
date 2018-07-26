import api from '../api.json'; 
import { normalize, schema } from 'normalizr';

// const media = new schema.Entity(key, {definicion de mi esquema}, {las opciones})
const media = new schema.Entity('media', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({
        ...value,
        catogory: parent.id,
        parentKey: key, //el key de la data original
    }),
})

const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
})

const categories = { categories: new schema.Array(category) };

const normaliedData = normalize(api, categories);

export default normaliedData;