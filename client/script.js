const teamsWrapper = document.getElementById("teamsWrapper");

// get teams from from api
async function getTeams() {
    const response = await fetch(

    );
    const teams = await response.json();console.log(teams);

    // put the teams on the page
    teams.forEach(function (team) {
    // DOM  manipulation to put games onto html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = team.name;
    p.textContent = `Established in ${team.year}`;
    img.src = team.imgUrl;
    img.alt = team.name;

    teamsWrapper.appendChild(h2);
    teamsWrapper.appendChild(p);
    teamsWrapper.appendChild(img);
    });
}
getTeams();