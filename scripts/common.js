function checkUserData() {
    const url = new URL(location.href);
    const name = url.searchParams.get('name');
    const lastName = url.searchParams.get('lastName');
    const email = url.searchParams.get('email');

    if (!name || !lastName || !email) {
        location.href = 'index.html';
    }
}

function checkUserResult() {
    const url = new URL(location.href);
    const score = url.searchParams.get('score');
    const total = url.searchParams.get('total');
    const id = url.searchParams.get('id');

    if (!score|| !total || !id) {
        location.href = 'index.html';
    }
}
