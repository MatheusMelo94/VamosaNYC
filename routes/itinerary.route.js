/**
 * @swagger
 * tags:
 *   name: Itineraries
 *   description: Itinerary management endpoints
 */

const express = require('express');
const router = express.Router();
const { getItineraries, createItinerary, getItinerary, deleteItinerary, updateItineary } = require('../controllers/itinerary.controller.js');
const verifyToken = require('../middlewares/verifyToken.js');

/**
 * @swagger
 * /api/itineraries:
 *   get:
 *     summary: Get all itineraries
 *     tags: [Itineraries]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of itineraries
 *       500:
 *         description: Server error
 */
router.get('/', verifyToken, getItineraries); // Protected

/**
 * @swagger
 * /api/itineraries:
 *   post:
 *     summary: Create a new itinerary
 *     tags: [Itineraries]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New York Trip"
 *               description:
 *                 type: string
 *                 example: "A 7-day itinerary to explore New York City."
 *     responses:
 *       201:
 *         description: Itinerary successfully created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/', verifyToken, createItinerary); // Protected

/**
 * @swagger
 * /api/itineraries/{id}:
 *   get:
 *     summary: Get a specific itinerary by ID
 *     tags: [Itineraries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Itinerary details
 *       404:
 *         description: Itinerary not found
 *       500:
 *         description: Server error
 */
router.get('/:id', verifyToken, getItinerary); // Protected

/**
 * @swagger
 * /api/itineraries/{id}:
 *   delete:
 *     summary: Delete an itinerary by ID
 *     tags: [Itineraries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Itinerary successfully deleted
 *       404:
 *         description: Itinerary not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', verifyToken, deleteItinerary); // Protected

/**
 * @swagger
 * /api/itineraries/{id}:
 *   put:
 *     summary: Update an itinerary by ID
 *     tags: [Itineraries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated New York Trip"
 *               description:
 *                 type: string
 *                 example: "A new plan to explore New York City."
 *     responses:
 *       200:
 *         description: Itinerary successfully updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Itinerary not found
 *       500:
 *         description: Server error
 */
router.put('/:id', verifyToken, updateItineary); // Protected

module.exports = router;
