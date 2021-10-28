// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// {"name": "andreas", "password": "haha"}
const verySafeStorage = []

export default function handler(req, res) {

    if (req.method === "POST") {
        const user = {
            "name": req.body.name,
            "password": req.body.password
        }

        if (verySafeStorage.filter(entry => entry.name === user.name).length > 0) {
            res.status(403).json({"Error": "User Already Exists"}) // Not handled
        }
        else {
            verySafeStorage.push(user)
            res.status(201).json(user)
        }
    }
    else if (req.method === "GET") {
        res.status(200).json(verySafeStorage)
    }
}
