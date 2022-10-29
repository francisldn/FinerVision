import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user';
import {validateName, validateEmail, validateComment, validatePhoneNumber, validateGender, validateFullDob } from '../utils/validateField'

export const createUser = async (req: Request, res: Response) => {
    const id = uuidv4().toString();
    try {
        const user = req.body;
        if (!user || Object.keys(user).length === 0) throw new Error('no user details');
        const {firstName, surname, email, telephoneNumber, dateOfBirth,comment, gender } = user;
        // validate input
        if(!validateComment(comment as string)) {
            throw new Error('Invalid comment');
        }
        if(!validateName(firstName as string)) {
            throw new Error('Invalid firstName');
        }
        if(!validateName(surname as string)) {
            throw new Error('Invalid surname');
        }
        if(!validateEmail(email as string)) {
            throw new Error('Invalid email');
        }
        if(!validatePhoneNumber(telephoneNumber as number)) {
            throw new Error('Invalid telephoneNumber');
        }
        if(!validateGender(gender as string)) {
            throw new Error('Invalid gender');
        }
        if(!validateFullDob(new Date(dateOfBirth))){
            throw new Error('Invalid date of birth');
        }
        const checkUser = await User.findAll({
            where:{
                email
            }
        })
        // check if user has registered (by the same email address)
        if(Object.keys(checkUser).length > 0) throw new Error('User has already registered');
        
        const record = await User.create({ ...req.body, dateOfBirth: new Date(dateOfBirth) });
        if(Object.keys(record).length>0) {
            res.send({ error: null, data: 'User successfully created' });
        } else {
            throw new Error('Something went wrong.')
        }
    } catch (e) {
        if (e instanceof Error) {
            res.status(400).send({ error: e.message, data: null });
        }
    }
};
