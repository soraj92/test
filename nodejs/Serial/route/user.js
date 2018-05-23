const check = function(req, res) {
    console.log('serial cheack');

    const serial_IN = req.query.serial;
    const model_IN = req.query.model;
    const company_IN = req.query.company;

    console.log(serial_IN);
    console.log(model_IN);
    console.log(company_IN);

};

module.exports.check = check;