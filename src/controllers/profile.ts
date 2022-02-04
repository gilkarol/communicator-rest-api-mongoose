import { NextFunction, Response } from 'express'

import User from '../models/user'
import { Err } from '../util/classes'
import { Req } from '../util/interfaces'

export const getProfile = async (
	req: Req,
	res: Response,
	next: NextFunction
) => {
	const userId = req.params.userId

	try {
		const user = await User.findById(userId)
		if (!user) throw new Err(404, 'Thgis user does not exist!')

		res.status(200).json({ message: 'User has been found!', user: user })
	} catch (err) {
		next(err)
	}
}

export const postInviteToFriends = async (
	req: Req,
	res: Response,
	next: NextFunction
) => {
	const userId: string = req.params.userId
	const loggedUserId: string = req.userId!

	try {
		const isFriend = User.findById(loggedUserId)
	} catch (err) {
		next(err)
	}
}
