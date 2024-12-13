const fetch = require('node-fetch');
require('dotenv').config();

const GIT_REPO = process.env.GIT_REPO; // z.B. https://your-git-server.com/api/v4/projects/PROJECT_ID/repository/files
const GIT_TOKEN = process.env.GIT_TOKEN;
const GIT_BRANCH = process.env.GIT_BRANCH; // z.B. 'main'

async function fetchRepositoryFiles() {
    try {
        const response = await fetch(`${GIT_REPO}?ref=${GIT_BRANCH}`, { // Hier wird der Branch angegeben
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${GIT_TOKEN}`, // Möglicherweise 'Bearer' anstelle von 'token'
                'Accept': 'application/json' // Möglicherweise 'application/json' anstelle von 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const files = await response.json();
        return files.map(file => file.name); // Gibt nur die Dateinamen zurück
    } catch (error) {
        console.error('Error fetching repository files:', error);
        return [];
    }
}

module.exports = { fetchRepositoryFiles };