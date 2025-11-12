import { Request, Response } from 'express';
import { Character } from './../models/index.js'
import { CharacterCreation } from './../models/character.js'



//Create * Read * Update * Delete

//create
export const createCharacter = async (req: Request, res: Response) => {
    const characterData: CharacterCreation = req.body
    try {
        const newCharacter = await Character.create(characterData)
        return res.status(200).json(newCharacter);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
};

//read all
export const getAllCharacters = async (_req: Request, res: Response) => {
    try {
        const characters = await Character.findAll()
        return res.status(200).json(characters)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
};

//read by id
export const getOneCharacter = async (req: Request, res: Response) => {
    const characterId = req.params.id;
    try {
        const characterData = await Character.findByPk(characterId);

        if (!characterData) {
            return res.status(404).json({ message: 'character not found' });
        }
        return res.status(200).json(characterData)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
};

//update
export const updateCharacter = async (req: Request, res: Response) => {
    const characterId = req.params.id;
    const updatedCharacter: Partial<CharacterCreation> = req.body

    try {
        const characterData = await Character.findByPk(characterId);

        if (!characterData) {
            return res.status(404).json({ message: 'character not found' });
        }

        await characterData.update(updatedCharacter)

        return res.status(200).json(characterData);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
};

//delete
export const deleteCharacter = async (req: Request, res: Response) => {
    const characterId = req.params.id;

    try {
        const characterData = await Character.findByPk(characterId);

        if (!characterData) {
            return res.status(404).json({ message: 'character not found' });
        } else {
            await characterData.destroy();
        }

        return res.status(200).json({ message: 'character deleted successfully' })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
};