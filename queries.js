//CRUD Operations
// Create
db.books.insertOne({
  title: "Thamsanqa's First MongoDB Book",
  author: "Thamsanqa",
  genre: "Technology",
  year: 2023
});

// Read
db.books.find({ genre: "Technology" });

// Update
db.books.updateOne({ title: "Thamsanqa's First MongoDB Book" }, { $set:  { year: 2025 } });



// Queries
// Filter 
db.books.find({ genre: "Fantasy" }, { title: 1, year: 1, _id: 0 });
db.books.find({ author: "Thamsanqa" });

// Sorting (by year descending)
db.books.find().sort({ year: -1 });


// Aggregation
// Group by genre and count
db.books.aggregate([
  { $group: { _id: "$genre", total: { $sum: 1 } } }
]);

// count books by author 
db.books.aggregate([
  {$group: {_id: "$author",totalBooks: { $sum: 1 }}},{ $sort: { totalBooks: -1 }}
]);


// Indexing
db.books.createIndex({ title: 1 });  
