const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// username: coffee_store
// password: pABlahrGaSkQalIn

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.p3w4bpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeesCollection = client.db("coffeeDB").collection("coffee");

    app.get("/coffees", async (req, res) => {
      const result = await coffeesCollection.find().toArray();
      res.send(result);
    });

    app.post("/coffees", async (req, res) => {
      console.log("data pass successful", req.body);
      const newCoffee = req.body;
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result);
    });

    app.put("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateCoffee = req.body;
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          updateCoffee,
        },
      };
      const result = await coffeesCollection.updateOne(
        query,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/coffees/:id", async (req, res) => {
      try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ error: "Invalid ID format" });
        }

        const query = { _id: new ObjectId(id) };
        const result = await coffeesCollection.findOne(query);

        if (!result) {
          return res.status(404).send({ error: "Item Not Found!" });
        }

        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server Error" });
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee-store-application");
});

app.listen(port, () => {
  console.log(`Server running on this ${port} port`);
});
