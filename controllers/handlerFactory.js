const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // to allow for nested GET reviews on tour
    let filter;
    console.log(res);
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    // const features = new APIFeatures(Model.find(filter), req.query)
    //   .filter()
    //   .sorting()
    //   .limiting()
    //   .paginating();

    // // const document = await features.query.explain();
    // const document = await features.query;

    res.status(200).json({
      status: "success",
      //   results: document.length,
      //   data: {
      //     document,
      //   },
    });
  });
