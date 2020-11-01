import mongoose from "mongoose";

import UrlModel from "../model/url";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      try {
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          autoIndex: true,
        });

        const data = await UrlModel.findOne({ id: req.query.id });

        res.redirect(data.long_url);
      } catch (err) {
        console.log("[err]", err);
      }
    }
  }
}
