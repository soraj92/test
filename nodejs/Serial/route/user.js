const check = function(req, res) {

    const logger = req.app.get('logger');

    const serial_IN = req.query.serial;
    const model_IN = req.query.model;
    const company_IN = req.query.company;

    const database = req.app.get('database');

    let error = 'N';
    let check = 0;
    if(database.db) {
        database.SerialModel.serialcheck(serial_IN, function(err, result) {
            if(err){
                console.log('db에러');
                return;
            }
            if(result.length > 0) {

                if(result.length > 1) {
                    res.writeHead('200', {'Content-Type': 'text/html;charset=utf-8'});
                    res.write('result.length Error');
                    res.end();
                }
                const serial_RS = result[0]._doc.serial;
                const model_RS = result[0]._doc.model;
                const company_RS = result[0]._doc.company;


                if(company_RS.toLowerCase() == company_IN.toLowerCase() || company_RS == 'test') {

                    if(model_RS.toLowerCase() == model_IN.toLowerCase() || company_RS == 'test')
                        check++;
                    else
                        error = 'M0';
                } else
                    error = 'C0';
            } else {
                error = 'S0';
            }
        
        logger.info("company : " + company_IN + "  /  model : " + model_IN + "  /  serial : " + serial_IN + "  /  결과 : " + check + "  /  error : " + error);
        res.writeHead('200', {'Content-Type': 'text/html;charset=utf-8'});
        res.write(check+"");
        res.end();
        });
    } else {
        logger.error('DBERROR');
        res.writeHead('200', {'Content-Type': 'text/html;charset=utf-8'});
        res.write('DBCERROR');
        res.end(); 
    }

};

module.exports.check = check;