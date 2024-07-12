// script.js

document.getElementById('job-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search-input').value;
    searchJobs(searchQuery);
});

function searchJobs(query) {
    const jobs = [
        { title: 'Frontend Developer', company: 'Company A' },
        { title: 'Backend Developer', company: 'Company B' },
        { title: 'Fullstack Developer', company: 'Company C' },
        // Add more jobs here
    ];

    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(query.toLowerCase()));
    const jobsList = document.getElementById('jobs-list');
    jobsList.innerHTML = '';

    filteredJobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <button>Apply</button>
            <span class="favorite-icon">&#9825;</span>
        `;
        jobsList.appendChild(jobItem);
    });
}

// Toggle favorite icon color
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('favorite-icon')) {
        event.target.classList.toggle('favorite');
    }
});

// Load more jobs
document.getElementById('view-more-btn').addEventListener('click', function() {
    // Load more jobs logic here
});
