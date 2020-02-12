const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text:{
        type: String,
        required: true
    },
    name:{
        type: String
    },
    avatar:{
        type: String
    },
    likes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            }
        }
    ],
    commit:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            text:{
                type: String,
                required: true
            },
            name:{
                type: String
            },
            avatar: {
                type: String
            },
            createdAt:{
                type: Date,
                default: Date.now
            }
        }
    ]
    
},{
    timestamps: true
})



module.exports = mongoose.model("Post", postSchema);