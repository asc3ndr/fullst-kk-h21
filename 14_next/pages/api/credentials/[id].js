export default function handler(req, res) {
    const name = req?.query?.id
    res.status(200).json({"name": name, "password": "Not Implemented"})
}

// Not implemented. Making state global seems too fiddly without database???
// Just return the name input