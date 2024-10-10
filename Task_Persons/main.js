async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users)
    }
    catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const containerElement = document.getElementById("userProfile");
    users.forEach(users => {
        const usercard = document.createElement('div');
        usercard.className = 'userClass';
        const roboImages = `https://robohash.org/${users.id} ?set=set4 `;

        usercard.innerHTML = `<img src = "${roboImages}" alt = "roboavatars">
        <h3>${users.name}</h3>
        <p>${users.username}</p>
        <p><i>${users.email}</i></p>`;

        containerElement.appendChild(usercard)
    });

}
window.onload = fetchUsers();
