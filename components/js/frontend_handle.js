const HomeType= {
    Home: 1,
    Push: 2,
    Settings: 3
}

function handleDayChange() {
    selectedDay = document.getElementById('day-dropdown').value;
    console.log('Selected day:', selectedDay);
}

function handleAdd() {
    if (!day || !type || !role || !shortInput || !longInput) {
        alert('Please fill in all fields!');
        return;
    }

    day = document.getElementById('day-dropdown').value;
    type = document.getElementById('type-dropdown').value;
    role = document.getElementById('role-dropdown').value;
    shortInput = document.getElementById('short-input').value;
    longInput = document.getElementById('long-input').value;

    newRow.innerHTML = `
            <td class="px-4 py-2 border border-gray-300 dark:text-gray-200">${type}</td>
            <td class="px-4 py-2 border border-gray-300 dark:text-gray-200">${role}</td>
            <td class="px-4 py-2 border border-gray-300 dark:text-gray-200">${shortInput}</td>
        `;

    tableBody.appendChild(newRow);

    console.log('Added task:', { day, type, role, shortInput, longInput });
}

function ChangeSite(mimetype){
    console.log(mimetype);
    if (mimetype === HomeType.Home){
        homeDiv.style.display = 'block';
        pushDiv.style.display = 'none';
        settingsDiv.style.display = 'none';
    } else if (mimetype === HomeType.Push){
        homeDiv.style.display = 'none';
        pushDiv.style.display = 'block';
        settingsDiv.style.display = 'none';
    } else if (mimetype === HomeType.Settings){
        homeDiv.style.display = 'none';
        pushDiv.style.display = 'none';
        settingsDiv.style.display = 'block';
    }
}


