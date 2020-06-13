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
    res.status(200).send(contacts.map(contact => contact.short()));
});


router.post('/', verifyToken, async (req: any, res: Response) => {
    const { email } = req.user;
    const { contactEmail, contactName } = req.body;

    if (!contactEmail || !contactName) {
        return res.status(400).send({message: 'contact name and email must be provided.'});
    }

    const user = await UserImage.findByPk(contactEmail);
    if (!user) {
        await UserImage.create({email: contactEmail});
    }

    await Contact.create({userEmail: email, contactEmail, contactName});
    res.sendStatus(201);
});


router.put('/image', verifyToken, async (req: any, res: Response) => {
    const { email, picture } = req.user;

    const user: UserImage = await UserImage.findByPk(email);
    if (!user) {
        await UserImage.create({email, imageUrl: picture});
    } else {
        await UserImage.update({imageUrl: picture}, {where: {email}});
    }
    
    res.sendStatus(204);
});

export const ContactsRouter: Router = router;