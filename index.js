import dotenv from "dotenv";


import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port:-> ${process.env.PORT}`);
});

// connectDB().then(() => {
//   app.listen(process.env.PORT || 8000, () => {
//     console.log(`🚀 Server is running on port:-> ${process.env.PORT}`);
//   })
// }).catch(()=>{
//     console.log(`Connection to MongoDB failed:-> ${process.env.PORT} ❌`);
// });
