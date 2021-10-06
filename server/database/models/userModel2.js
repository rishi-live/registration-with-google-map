const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
    houseNumber: {
        type: "String",
    },
    houseName: {
        type: "String",
    },
    poi: {
        type: "String",
    },
    street: {
        type: "String",
    },
    subSubLocality: {
        type: "String",
    },
    subLocality: {
        type: "String",
    },
    locality: {
        type: "String",
    },
    village: {
        type: "String",
    },
    subDistrict: {
        type: "String",
    },
    district: {
        type: "String",
    },
    city: {
        type: "String",
    },
    state: {
        type: "String",
    },
    pincode: {
        type: "String",
    },
    formattedAddress: {
        type: "String",
    },
    eLoc: {
        type: "String",
    },
    latitude: {
        type: "String",
    },
    longitude: {
        type: "String",
    },
    geocodeLevel: {
        type: "String",
    },
    confidenceScore: {
        type: "Number",
    },
});

const userSchema = new Schema({
    firstName: {
        type: "String",
    },
    lastName: {
        type: "String",
    },
    email: {
        type: "String",
        unique: true
    },
    password: {
        type: "String",
    },
    address: addressSchema,
},
    {
        timestamps: true,
        toObject: {
            transform: function (doc, ret, options) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                delete ret.__v;
                return ret;
            },
        },
    });

const User = mongoose.model("User", userSchema);
module.exports = { User };