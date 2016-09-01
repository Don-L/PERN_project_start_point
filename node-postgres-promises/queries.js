const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/database_name';
const db = pgp(connectionString);

function getAllItems(req, res, next) {
  db.any('select * from table_name')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all items'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//can't vouch for all the following code working in it's current form - some debugging may be required

// function getSingleItem(req, res, next) {
//   let itemID = parseInt(req.params.id);
//   db.one('select * from table_name where id = $1', itemID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved one item'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function createItem(req, res, next) {
//   req.body.sample_column = parseInt(req.body.sample_column);
//   db.none('insert into table_name (sample_column)' +
//       `values(${req.body.sample_column})`,
//     req.body)
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Inserted item'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function removeItem(req, res, next) {
//   let itemID = parseInt(req.params.id);
//   db.result('delete from table_name where id = $1', itemID)
//     .then(function (result) {
//       /* jshint ignore:start */
//       res.status(200)
//         .json({
//           status: 'success',
//           message: `Removed ${result.rowCount} item`
//         });
//       /* jshint ignore:end */
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function updateItem(req, res, next) {
//   db.none('update table_name set sample_column=$1 where id=$5',
//     [req.body.sample_column])
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Updated item'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }



module.exports = {
  getAllItems: getAllItems //,
  // getSingleItem: getSingleItem,
  // createItem: createItem,
  // updateItem: updateItem,
  // removeItem: removeItem
};
