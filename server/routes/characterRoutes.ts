import express from 'express'
import {
    createCharacter,
    getAllCharacters,
    getOneCharacter,
    updateCharacter,
    deleteCharacter,
} from './../controllers/characterController.js'

const router = express.Router();

router.post('/', createCharacter);

router.get('/', getAllCharacters);

router.get('/:id', getOneCharacter);

router.put('/:id', updateCharacter);

router.delete('/:id', deleteCharacter)

export { router as characterRouter }