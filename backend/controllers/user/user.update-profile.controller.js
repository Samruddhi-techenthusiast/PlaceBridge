const User = require("../../models/user.model");

const UpdateProfile = async (req, res) => {
  try {

    console.log("REQUEST BODY:", req.body);

    const userId = req.body._id || req.body.id;

    if (!userId) {
      return res.status(400).json({ msg: "User ID missing!" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User Doesn't Exist!" });
    }

    /* -------- Ensure Objects Exist -------- */

    if (!user.studentProfile) user.studentProfile = {};
    if (!user.studentProfile.SGPA) user.studentProfile.SGPA = {};
    if (!user.studentProfile.pastQualification) user.studentProfile.pastQualification = {};

    /* ---------------- EMAIL ---------------- */

    if (req.body.email && req.body.email !== user.email) {

      const existingEmail = await User.findOne({ email: req.body.email });

      if (existingEmail && existingEmail._id.toString() !== user._id.toString()) {
        return res.status(400).json({
          msg: "Email already exists!"
        });
      }

      user.email = req.body.email;
    }

    /* ---------------- BASIC INFO ---------------- */

    if (req.body.first_name) user.first_name = req.body.first_name;
    if (req.body.middle_name) user.middle_name = req.body.middle_name;
    if (req.body.last_name) user.last_name = req.body.last_name;
    if (req.body.number) user.number = req.body.number;
    if (req.body.gender) user.gender = req.body.gender;
    if (req.body.dateOfBirth) user.dateOfBirth = req.body.dateOfBirth;
    if (req.body.profile) user.profile = req.body.profile;

    if (req.body.fullAddress) {

      if (!user.fullAddress) user.fullAddress = {};

      if (req.body.fullAddress.address)
        user.fullAddress.address = req.body.fullAddress.address;

      if (req.body.fullAddress.pincode)
        user.fullAddress.pincode = req.body.fullAddress.pincode;
    }

    /* ---------------- STUDENT PROFILE ---------------- */

    if (user.role === "student" && req.body.studentProfile) {

      const sp = req.body.studentProfile;

      if (sp.rollNumber) user.studentProfile.rollNumber = sp.rollNumber;

      /* -------- UIN CHECK -------- */

      if (sp.UIN) {

        const existingUIN = await User.findOne({ "studentProfile.UIN": sp.UIN });

        if (existingUIN && existingUIN._id.toString() !== user._id.toString()) {
          return res.status(400).json({ msg: "UIN already exists!" });
        }

        user.studentProfile.UIN = sp.UIN;
      }

      if (sp.department) user.studentProfile.department = sp.department;
      if (sp.year) user.studentProfile.year = sp.year;
      if (sp.addmissionYear) user.studentProfile.addmissionYear = sp.addmissionYear;

      if (sp.gap !== undefined) user.studentProfile.gap = sp.gap;
      if (sp.liveKT !== undefined) user.studentProfile.liveKT = sp.liveKT;

      /* ---------------- SGPA ---------------- */

      if (sp.SGPA) {

        const sgpa = sp.SGPA;

        user.studentProfile.SGPA.sem1 = sgpa.sem1 ?? user.studentProfile.SGPA.sem1;
        user.studentProfile.SGPA.sem2 = sgpa.sem2 ?? user.studentProfile.SGPA.sem2;
        user.studentProfile.SGPA.sem3 = sgpa.sem3 ?? user.studentProfile.SGPA.sem3;
        user.studentProfile.SGPA.sem4 = sgpa.sem4 ?? user.studentProfile.SGPA.sem4;
        user.studentProfile.SGPA.sem5 = sgpa.sem5 ?? user.studentProfile.SGPA.sem5;
        user.studentProfile.SGPA.sem6 = sgpa.sem6 ?? user.studentProfile.SGPA.sem6;
        user.studentProfile.SGPA.sem7 = sgpa.sem7 ?? user.studentProfile.SGPA.sem7;
        user.studentProfile.SGPA.sem8 = sgpa.sem8 ?? user.studentProfile.SGPA.sem8;
      }

      /* ---------------- PAST QUALIFICATION ---------------- */

      if (sp.pastQualification) {

        const pq = sp.pastQualification;

        if (pq.ssc) {
          if (!user.studentProfile.pastQualification.ssc)
            user.studentProfile.pastQualification.ssc = {};

          user.studentProfile.pastQualification.ssc.board = pq.ssc.board;
          user.studentProfile.pastQualification.ssc.year = pq.ssc.year;
          user.studentProfile.pastQualification.ssc.percentage = pq.ssc.percentage;
        }

        if (pq.hsc) {
          if (!user.studentProfile.pastQualification.hsc)
            user.studentProfile.pastQualification.hsc = {};

          user.studentProfile.pastQualification.hsc.board = pq.hsc.board;
          user.studentProfile.pastQualification.hsc.year = pq.hsc.year;
          user.studentProfile.pastQualification.hsc.percentage = pq.hsc.percentage;
        }

        if (pq.diploma) {
          if (!user.studentProfile.pastQualification.diploma)
            user.studentProfile.pastQualification.diploma = {};

          user.studentProfile.pastQualification.diploma.department = pq.diploma.department;
          user.studentProfile.pastQualification.diploma.year = pq.diploma.year;
          user.studentProfile.pastQualification.diploma.percentage = pq.diploma.percentage;
        }
      }
    }

    /* ---------------- PROFILE COMPLETE ---------------- */

    user.isProfileCompleted = true;

    await user.save();

    return res.status(200).json({
      msg: "Profile Saved Successfully!"
    });

  } catch (error) {

    console.log("UPDATE PROFILE ERROR:", error);

    return res.status(500).json({
      msg: "Internal Server Error",
      error: error.message
    });
  }
};

module.exports = UpdateProfile;