## Mongoose Cheat Sheet
Mongoose is a Node.js library for interacting with MongoDB. Here are some useful guides / tutorials:

* [Schemas](https://mongoosejs.com/docs/guide.html): The rules that each *document* in your collection must follow. 
* [SchemaTypes](https://mongoosejs.com/docs/schematypes.html): The rules that each *property* in your document must follow.
* [Models](https://mongoosejs.com/docs/models.html): The (typed) documents themselves; *instances* of a schema.
* [Making Queries](https://mongoosejs.com/docs/queries.html). Here are some particularly useful ones:
  * [query operators](https://docs.mongodb.com/manual/reference/operator/query/)
  * [find](https://mongoosejs.com/docs/api.html#model_Model.find) (retrieve a collection of documents by a filter condition)
  * [findById](https://mongoosejs.com/docs/api.html#model_Model.findById) (retrieve a document by its id)
  * [findOneAndUpdate](https://mongoosejs.com/docs/api/query.html#query_Query-findOneAndUpdate) (update an existing document)
  * [findOneAndDelete](https://mongoosejs.com/docs/api/query.html#query_Query-findOneAndDelete) (delete an existing document)