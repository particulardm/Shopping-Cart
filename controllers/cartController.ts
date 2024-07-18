import { Request, Response } from 'express';

interface CartItem {
    userID: number;
    itemID: string;
    name: string;
    price: number;
}

const carts: CartItem[][] = new Array(1001).fill(0);

// const firstItem: CartItem = {
//     userID: 1,
//     itemID: 'abc1',
//     name: 'food',
//     price: 3.50
// }
// const itemsMap: Map<string, CartItem> = new Map();

export const getCart = function(req: Request, res: Response) {
    const { userID } = req.body;
    if (userID < 0 || userID > 1000) {
        res.json({ message: 'Invalid user ID'});
    }

    const userCart = carts[userID];
    console.log(userCart);
    res.json(userCart);
}