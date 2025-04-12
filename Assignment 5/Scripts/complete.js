
function updateDate()
{
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options).split(" ");

    document.getElementById("weekday").textContent = formattedDate[0];
    document.getElementById("month-day").textContent = formattedDate[1] + " " + formattedDate[2];
    document.getElementById("year").textContent = formattedDate[3];
}

updateDate();


// Changing the Background color

function getRandomColor()
{
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Clock Design

function updateClock()
{
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: true });
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();


document.getElementById("changebackground").addEventListener("click", function () {
    
    document.body.classList.remove("bg-[#F4F7FF]");
    document.body.style.backgroundColor = getRandomColor();
})

let faki_deya_jabe_na = 0;

// Mobile Button
document.getElementById("btn-1").addEventListener("click", 
        function (event)
        {
            
            event.preventDefault();
            alert("Board is updated successfully..");

            // Task Counter
            const count = document.getElementById("taskCounter").innerText;
            const newCount = parseInt(count) - 1;
            document.getElementById("taskCounter").innerText = newCount;

            // NavBar Task incrementer
            const nav_count = document.getElementById("nav-task-counter").innerText;
            const nav_newCount = parseInt(nav_count) + 1;
            document.getElementById("nav-task-counter").innerText = nav_newCount;

            // Show message
            document.getElementById("mobile-button").style.display = "block";
            document.getElementById("btn-1").style.backgroundColor = "#B2BCF9";
            document.getElementById("activity").style.flexGrow = "0";
            // Update Time
                
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour12: true });
            document.getElementById("time-1").textContent = timeString;
            
            this.disabled = true;
            
            faki_deya_jabe_na++;

        }
)

// Add Dark Mode
document.getElementById("btn-2").addEventListener("click", 
    function (event)
    {
        event.preventDefault();
        alert("Board is updated successfully..");

        // Task Counter
        const count = document.getElementById("taskCounter").innerText;
        const newCount = parseInt(count) - 1;
        document.getElementById("taskCounter").innerText = newCount;

        // NavBar Task incrementer
        const nav_count = document.getElementById("nav-task-counter").innerText;
        const nav_newCount = parseInt(nav_count) + 1;
        document.getElementById("nav-task-counter").innerText = nav_newCount;

        // Show message
        document.getElementById("dark-mode").style.display = "block";
        document.getElementById("btn-2").style.backgroundColor = "#B2BCF9";
        document.getElementById("activity").style.flexGrow = "0";

        // Update Time
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById("time-2").textContent = timeString;

        this.disabled = true;

        faki_deya_jabe_na++;

    }
)

// Optimizsed Home Page
document.getElementById("btn-3").addEventListener("click", 
    function (event)
    {
        event.preventDefault();
        alert("Board is updated successfully..");

        // Task Counter
        const count = document.getElementById("taskCounter").innerText;
        const newCount = parseInt(count) - 1;
        document.getElementById("taskCounter").innerText = newCount;

        // NavBar Task incrementer
        const nav_count = document.getElementById("nav-task-counter").innerText;
        const nav_newCount = parseInt(nav_count) + 1;
        document.getElementById("nav-task-counter").innerText = nav_newCount;

        // Show message
        document.getElementById("home-page").style.display = "block";
        document.getElementById("btn-3").style.backgroundColor = "#B2BCF9";
        document.getElementById("activity").style.flexGrow = "0";

        // Update Time
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById("time-3").textContent = timeString;

        this.disabled = true;

        faki_deya_jabe_na++;

    }
)

// Add New Emoji
document.getElementById("btn-4").addEventListener("click", 
    function (event)
    {
        event.preventDefault();
        alert("Board is updated successfully..");

        // Task Counter
        const count = document.getElementById("taskCounter").innerText;
        const newCount = parseInt(count) - 1;
        document.getElementById("taskCounter").innerText = newCount;

        // NavBar Task incrementer
        const nav_count = document.getElementById("nav-task-counter").innerText;
        const nav_newCount = parseInt(nav_count) + 1;
        document.getElementById("nav-task-counter").innerText = nav_newCount;

        // Show message
        document.getElementById("new-emoji").style.display = "block";
        document.getElementById("btn-4").style.backgroundColor = "#B2BCF9";
        document.getElementById("activity").style.flexGrow = "0";

        // Update Time
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById("time-4").textContent = timeString;

        this.disabled = true;

        faki_deya_jabe_na++;

    }
)

// Integrate OpenAI
document.getElementById("btn-5").addEventListener("click", 
    function (event)
    {
        event.preventDefault();
        alert("Board is updated successfully..");

        // Task Counter
        const count = document.getElementById("taskCounter").innerText;
        const newCount = parseInt(count) - 1;
        document.getElementById("taskCounter").innerText = newCount;

        // NavBar Task incrementer
        const nav_count = document.getElementById("nav-task-counter").innerText;
        const nav_newCount = parseInt(nav_count) + 1;
        document.getElementById("nav-task-counter").innerText = nav_newCount;

        // Show message
        document.getElementById("OpenAI").style.display = "block";
        document.getElementById("btn-5").style.backgroundColor = "#B2BCF9";
        document.getElementById("activity").style.flexGrow = "0";

        // Update Time
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById("time-5").textContent = timeString;

        this.disabled = true;

        faki_deya_jabe_na++;

    }
)

// Job Search
document.getElementById("btn-6").addEventListener("click", 
    function (event)
    {
        event.preventDefault();
        alert("Board is updated successfully..");

        if (faki_deya_jabe_na == 5)
            alert("Congrat!! You have completed all the current tasks successfully!");
        else
            alert("Please complete the previous tasks also..");

        // Task Counter
        const count = document.getElementById("taskCounter").innerText;
        const newCount = parseInt(count) - 1;
        document.getElementById("taskCounter").innerText = newCount;

        // NavBar Task incrementer
        const nav_count = document.getElementById("nav-task-counter").innerText;
        const nav_newCount = parseInt(nav_count) + 1;
        document.getElementById("nav-task-counter").innerText = nav_newCount;

        // Show message
        document.getElementById("job-search").style.display = "block";
        document.getElementById("btn-6").style.backgroundColor = "#B2BCF9";
        document.getElementById("activity").style.flexGrow = "0";

        // Update Time
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: true });
        document.getElementById("time-6").textContent = timeString;

        this.disabled = true;

    }
)

// Clear History

document.getElementById("clear-btn").addEventListener("click", 
    function (event)
    {
        event.preventDefault();
        alert("History cleared successfully..");
        document.getElementById("history").style.display = "none";
        document.getElementById("activity").style.flexGrow = "1";
    }
)
// discover Part
document.getElementById("discover").addEventListener("click",
    function (event)
    {
        event.preventDefault();
        window.location.href = "blogs.html";
    })



// Date in Table


