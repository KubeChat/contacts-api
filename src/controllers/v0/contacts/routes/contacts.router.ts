import { Router, Request, Response } from 'express';

import { Contact } from '../models/Contact';
import { UserImage } from '../models/UserImage';

const router: Router = Router();

router.get('/:email', async (req: Request, res: Response) => {
    let { email } = req.params;
    const contacts: Contact[]= await Contact.findAll({
        where: {userEmail: email},
        include: [UserImage]
    });
    res.send(contacts.map(contact => contact.short()));
});

export const ContactsRouter: Router = router;