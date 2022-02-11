import { Router } from 'express'
import { deleteDeclineRequestToJoin, deletePost, deletePostAsAdmin, deleteRemoveProfileFromGroup, deleteRequestToJoin, getGroupChat, getGroupInfo, getGroupPosts, getRequestsToJoin, patchPost, postAcceptRequestToJoin, postCreateGroup, postGiveAdmin, postPost, postRequestToJoin } from '../controllers/group'

import isAuth from '../middleware/is-auth'

const router = Router()

// ------------------------- MEMBERS --------------------------------

router.get('/:groupId', isAuth, getGroupInfo)

router.get('/:groupId/posts', isAuth, getGroupPosts)

router.post('/:groupId/post', isAuth, postPost)

router.delete('/:groupId/post/:postId', isAuth, deletePost)

router.patch('/:groupId/post/:postId',isAuth, patchPost)

router.get('/chat/:groupId', isAuth, getGroupChat)

router.post('/requestToJoin/:groupId', isAuth, postRequestToJoin)

router.delete('/requestToJoin/:groupId', isAuth, deleteRequestToJoin)

// ------------------------- ADMIN --------------------------------

router.post('/create', isAuth, postCreateGroup)

router.post('/:groupId/giveAdmin/:profileId', isAuth, postGiveAdmin)

router.get('/:groupId/joinRequests', isAuth, getRequestsToJoin)

router.post('/:groupId/accept/:profileId', isAuth, postAcceptRequestToJoin)

router.delete('/:groupId/decline/:profileId', isAuth, deleteDeclineRequestToJoin)

router.delete('/:groupId/remove/:profileId', isAuth, deleteRemoveProfileFromGroup)

router.delete('/:groupId/delete/:postId', isAuth, deletePostAsAdmin)

export default router
