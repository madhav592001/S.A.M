const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hashPassword: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    doctors: [
      {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
        specitality: {
          type: String,
        },
        qualification: {
          type: String,
        },
      },
    ],
    totalIcuBeds:{
      type:Number,
      required:true,
    },
    totalGeneralBeds:{
      type:Number,
      required:true,
    },
    totalPrivateWards:{
      type:Number,
      required:true
    },
    totalVentilators:{
      type:Number,
      required:true
    } ,
    availableIcuBeds:{
      type:Number,
      required:true,
    },
    availableGeneralBeds:{
      type:Number,
      required:true,
    },
    availablePrivateWards:{
      type:Number,
      required:true
    },
    availableVentilators:{
      type:Number,
      required:true
    },
    totalOxygenCylinders:{
      type:Number,
    },
    availableOxygenCylinders:{
      type:Number,
    },
  },
  {
    timestamps: true,
  }
);

hospitalSchema.virtual('password').set(function (password) {
  this.hashPassword = bcrypt.hashSync(password, 10);
});

hospitalSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hashPassword);
  },
};

const Hospital = mongoose.model('hospital', hospitalSchema);

module.exports = Hospital;
