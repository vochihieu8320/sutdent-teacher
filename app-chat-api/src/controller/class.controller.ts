import classModel from '../model/class.model'
class classes{

    async createClass(req: any, res: any)
    {
        if(res.locals.userType === 1)
        {
            res.sendStatus(400)

        }
        else
        {
            const body = {
                ...req.body
            }
            try {
                 await classModel.create(body);
                 res.json(body)
            } catch (error) {
                res.sendStatus(500);
            }
        }
       
    }

    async getClass(req: any, res: any)
    {
        try {
            const result = await classModel.find();
            res.json(result);
        } catch (error) {
            res.sendStatus(500);
        }
    }
}


export default new classes