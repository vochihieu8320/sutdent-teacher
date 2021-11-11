import userRouter from './user.route';
import uploadRouter from './uploadfile.route'
import pingRouter from './ping.route'
import classRouter from './class.route';
function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/upload', uploadRouter);
    app.use('/', pingRouter )
    app.use('/class', classRouter);
}

export default route;