import bcrypt from "bcrypt";

const generateHashes = async () => {
  const hash1 = await bcrypt.hash("tpo123", 10);
  const hash2 = await bcrypt.hash("admin123", 10);

  console.log("TPO Hash:", hash1);
  console.log("Management Hash:", hash2);
};

generateHashes();