const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, match: /.+\@.+\..+/ },
    password: { 
        type: String, 
        required: true, 
        validate: {
            validator: function(v) {
                return v.length >= 8; // Example: minimum length of 8 characters
            },
            message: props => `${props.value} is not a valid password!`
        }
    },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

// Password hash
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("User ", userSchema);