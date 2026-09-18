import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

const doctors = [
  { name: "Dr. Richard James",   speciality: "General physician", degree: "MBBS", experience: "4 Years", fees: 50,  image: "doc1.png"  },
  { name: "Dr. Emily Larson",    speciality: "Gynecologist",      degree: "MBBS", experience: "3 Years", fees: 60,  image: "doc2.png"  },
  { name: "Dr. Sarah Patel",     speciality: "Dermatologist",     degree: "MBBS", experience: "1 Years", fees: 30,  image: "doc3.png"  },
  { name: "Dr. Christopher Lee", speciality: "Pediatricians",     degree: "MBBS", experience: "2 Years", fees: 40,  image: "doc4.png"  },
  { name: "Dr. Jennifer Garcia", speciality: "Neurologist",       degree: "MBBS", experience: "4 Years", fees: 50,  image: "doc5.png"  },
  { name: "Dr. Andrew Williams", speciality: "Neurologist",       degree: "MBBS", experience: "4 Years", fees: 50,  image: "doc6.png"  },
  { name: "Dr. Christopher Davis", speciality: "General physician", degree: "MBBS", experience: "4 Years", fees: 50, image: "doc7.png" },
  { name: "Dr. Timothy White",   speciality: "Gynecologist",      degree: "MBBS", experience: "3 Years", fees: 60,  image: "doc8.png"  },
  { name: "Dr. Ava Mitchell",    speciality: "Dermatologist",     degree: "MBBS", experience: "1 Years", fees: 30,  image: "doc9.png"  },
  { name: "Dr. Jeffrey King",    speciality: "Pediatricians",     degree: "MBBS", experience: "2 Years", fees: 40,  image: "doc10.png" },
  { name: "Dr. Zoe Kelly",       speciality: "Gastroenterologist",degree: "MBBS", experience: "4 Years", fees: 50,  image: "doc11.png" },
  { name: "Dr. Patrick Harris",  speciality: "Neurologist",       degree: "MBBS", experience: "4 Years", fees: 50,  image: "doc12.png" },
  { name: "Dr. Chloe Evans",     speciality: "General physician", degree: "MBBS", experience: "4 Years", fees: 50,  image: "doc13.png" },
  { name: "Dr. Ryan Martinez",   speciality: "Gynecologist",      degree: "MBBS", experience: "3 Years", fees: 60,  image: "doc14.png" },
  { name: "Dr. Amelia Hill",     speciality: "Dermatologist",     degree: "MBBS", experience: "1 Years", fees: 30,  image: "doc15.png" },
];

const about = "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.";
const address = { line1: "17th Cross, Richmond", line2: "Circle, Ring Road, London" };
const hashedPassword = await bcrypt.hash("Doctor@123", 10);

await mongoose.connect(process.env.MONGODB_URI + "/healix");
console.log("DB Connected");

let count = 0;
for (const doc of doctors) {
  const imagePath = path.join(__dirname, "../clientside/src/assets", doc.image);
  console.log(`Uploading image for ${doc.name}...`);
  const upload = await cloudinary.uploader.upload(imagePath, { resource_type: "image" });

  await doctorModel.findOneAndUpdate(
    { email: `${doc.name.replace(/\s+/g, "").toLowerCase()}@healix.com` },
    {
      name: doc.name,
      email: `${doc.name.replace(/\s+/g, "").toLowerCase()}@healix.com`,
      password: hashedPassword,
      image: upload.secure_url,
      speciality: doc.speciality,
      degree: doc.degree,
      experience: doc.experience,
      about,
      fees: doc.fees,
      address,
      date: Date.now(),
      slots_booked: {},
      available: true,
    },
    { upsert: true, new: true }
  );
  count++;
  console.log(`✅ ${doc.name} added (${count}/15)`);
}

console.log("\n🎉 All 15 doctors seeded successfully!");
await mongoose.disconnect();
process.exit(0);
