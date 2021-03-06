import { model, Schema } from 'mongoose';

import { IRsImg } from "../interfaces/IRsImg.interface";

// Create Schema and Model
const rsImgSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: false
    },
    basicInfo: {
        type: {},
        required: false
    },
    dateInfo: {
        type: {},
        required: false
    },
    location: []
});

export const rsImgs = model<IRsImg>('rsImgs', rsImgSchema, "rsImgs");