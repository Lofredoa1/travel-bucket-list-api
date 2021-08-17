// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Location = require("../models/Location");

// SEED DATA FOR SEED ROUTE
const LocationSeed = [
  {
    activity: "The Grand Canyon",
    location: "Arizona, USA",
    img: "https://www.outsideonline.com/wp-content/uploads/2018/11/20/outside-guide-grand-canyon_h.jpg",
    description: "The canyon measures over 270 miles long, up to 18 miles wide and a mile deep, making it one of the biggest canyons in the world. This natural landmark formed about five to six million years as erosion from the Colorado River cut a deep channel through layers of rock.",
  },
  {
    activity: "View the Northen Lights",
    location: "Tromso, Norway",
    img: "https://d19lgisewk9l6l.cloudfront.net/assetbank/Northern_Lights_over_Tromso_Norway_Credit_Truls_Tiller_3248136.jpg",
    description: "Based in the heart of the aurora zone in the Norwegian Arctic, the city is widely regarded as one of the world’s best places to see the Northern Lights. Easily accessed from the UK – with a direct flight from London taking just 3.5 hours – Tromso serves as a popular destination year after year and offers excellent aurora views from September all the way until April. The city itself is a lively affair, with more pubs and bars per capita than anywhere else in Norway.",
  },
  {
    activity: "Pyramids of Giza",
    location: "Egypt",
    img: "https://www.al-monitor.com/sites/default/files/styles/social_media_share/public/almpics/2020/08/GettyImages-1223812377.jpg/GettyImages-1223812377.jpg?h=a5ae579a&itok=Kzc6o3p4",
    description: "The Giza Pyramid Complex, also called the Giza Necropolis, is the site on the Giza Plateau in Greater Cairo, Egypt that includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx of Giza. All were built during the Fourth Dynasty of the Old Kingdom of Ancient Egypt, between 2600 and 2500 BC.",
  },
];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all places from database
    await Location.remove({});
    // add the seed data to the database
    await Location.create(LocationSeed);
    // get full list of places to confirm seeding worked
    const locations = await Location.find({});
    // return full list of places as JSON
    res.json(locations);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

//INDEX ROUTE
router.get("/", async (req, res) => {
    try {
        const locations = await Location.find({});
        res.json(locations);
      } catch (error) {
        res.status(400).json(error);
      }
});

//CREATE ROUTE
router.post("/", async (req, res) => {
    try {
      const newLocation = await Location.create(req.body);
      res.json(newLocation);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //UPDATE ROUTE 
  router.put("/:id", async (req, res) => {
    try {
      const updatedLocation = await Location.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedLocation);
    } catch (error) {
      res.status(400).json(error);
    }
  });

//DESTROY ROUTE
router.delete("/:id", async (req, res) => {
    try {
      const deletedLocation = await Location.findByIdAndRemove(req.params.id);
      res.json(deletedLocation);
    } catch (error) {
      res.status(400).json(error);
    }
  });


// export the router which has all our routes registered to it
module.exports = router;