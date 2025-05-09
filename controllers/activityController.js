const Activity = require("../models/Activity");

exports.listActivities = async (req, res) => {

    console.log("Im in listactivities")

  const activities = await Activity.find();
  res.json(activities);
};


//to just add dummy Activity list to test 

exports.seedActivities = async (req, res) => {
    await Activity.insertMany([
      {
        title: "Cricket Match",
        description: "Local tournament match",
        location: "Ground A",
        date: new Date("2025-05-15T15:00:00")
      },
      {
        title: "Movie Night",
        description: "Action movie premiere",
        location: "Downtown Theater",
        date: new Date("2025-05-18T19:00:00")
      },
      {
        title: "Football Match",
        description: "Friendly match between clubs",
        location: "Stadium B",
        date: new Date("2025-05-25T17:30:00")
      }
    ]);
    res.send("Seed data inserted");
  };
  
