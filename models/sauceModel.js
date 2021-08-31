import mongoose from "mongoose"

const sauceSchema = new mongoose.Schema({
    userId : {
        type: String, 
        require: true,
        trim: true,
    },
    name : {
        type: String, 
        require: true,
        trim: true,
    },
    manufacturer : {
        type: String, 
        require: true,
        trim: true,
    },
    description : {
        type: String, 
        require: true,
        trim: true,
    },
    mainPepper : {
        type: String, 
        require: true,
        trim: true,
    },
    imageUrl : {
        type: String, 
        require: true,
        trim: true,
    },
    heat : {
        type: Number, 
        require: true,
        trim: true,
        validate : value => {
            if (value < 1 || value > 10) {
                throw new Error ('Veuillez choisir un nombre entre 1 et 10')
            }
        }
    },
    likes : {
        type: Number, 
        require: true,
        trim: true,
    },
    dislikes : {
        type: Number, 
        require: true,
        trim: true,
    },
    usersLiked : {
        type : Array,
    },
    usersDisliked : {
        type : Array,

    }
})

const Sauce = mongoose.model('Sauce', sauceSchema);

export default Sauce;
