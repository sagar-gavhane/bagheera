import { model, Schema } from "mongoose";

const UrlModel = model(
  "Url",
  Schema(
    {
      id: {
        type: String,
        minlength: [7, "Slug does not contain enough characters (Minimum 7)."],
        maxlength: [7, "Slug contains too many characters (Maximum 7)."],
        trim: true,
        validate: {
          validator: (value) => {
            return /[\w\-]/.test(value);
          },
          message: (props) => `${props.value} is not a valid id.`,
        },
      },
      long_url: {
        type: String,
        required: [true, "A valid URL must be provided."],
        trim: true,
      },
    },
    { timestamps: true }
  )
);

export default UrlModel;
