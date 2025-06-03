## 📦 How to Run

### 1. **Install Dependencies**

Make sure you're in the project folder, then run:

npm install mongodb

If npm install fails due to PowerShell policy, run:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

2. Populate the Database

Run the provided script to insert sample book data:

node insert_books.js

This connects to your MongoDB database and populates the books collection.

## Assignment Tasks
All required MongoDB queries are located in:

queries.js

 This file contains:

Basic CRUD operations

Filtered queries using $gte, $regex, etc.

Projections (.find({}, { title: 1 }))

Sorting queries

Aggregation pipelines for analysis

Index creation commands

## Screenshot
A screenshot showing the book documents in the database is included in:

image.png

## Notes
Database used: plp_bookstore

Collection: books

Populated via insert_books.js 

All queries tested in mongosh and Compass

All queries in queries.js