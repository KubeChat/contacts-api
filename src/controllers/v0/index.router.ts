import { Router, Request, Response } from 'express';
import { ContactsRouter } from './contacts/routes/contacts.router';

const router: Router = Router();

router.use('/contacts', ContactsRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;