"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllProduct: 'Select * from products',
  addNewProduct: 'insert into products (name, description ,quantity) values (@name, @description , @quantity)',
  getProductById: 'select * from products where id = @Id',
  deleteProduct: 'delete from products where id = @id',
  getProductCount: 'select count(*)  from products',
  updatePorduct: 'update products set name = @name, description = @description , quantity = @quantity where Id = @id'
};
exports.queries = queries;