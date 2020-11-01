import mongoose from "mongoose";
import { nanoid } from "nanoid";

import UrlModel from "../model/url";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST": {
      try {
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          autoIndex: true,
        });

        const data = await UrlModel.create({
          id: nanoid(7),
          long_url: req.body.url,
        });

        res.json({
          data: {
            id: data.id,
            short_url: `https://bagheera.vercel.app/${data.id}`,
            long_url: data.long_url,
          },
          status_code: 200,
          status_txt: "OK",
        });
      } catch (err) {
        console.log("[err]", err);
      }
      break;
    }

    default: {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}

// bagheera.vercel.com/2HHZYwN -> generated link
// bagheera.vercel.com/api/shortner -> post request to generate shortn url
