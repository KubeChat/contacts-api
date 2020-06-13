import { Router, Response } from 'express';

import { Contact } from '../models/Contact';
import { UserImage } from '../models/UserImage';
import { verifyToken } from '../../../../middlewares/jwt';

const router: Router = Router();

router.get('/', verifyToken, async (req: any, res: Response) => {
    const { email } = req.user;

    const contacts: Contact[]= await Contact.findAll({
        where: {userEmail: email},
        include: [UserImage]
    });
    res.send(contacts.map(contact => contact.short()));
});

export const ContactsRouter: Router = router;