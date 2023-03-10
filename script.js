const title = document.getElementById('title');
const playerInfo = document.getElementById('playerInfo');

const MrNobady = document.getElementById('MrNobady');
const Avenito = document.getElementById('Avenito');
const VilaZ = document.getElementById('VilaZ');
const PoggersCZ = document.getElementById('PoggersCZ');
const Orbi = document.getElementById('Orbi');
const Fisskill = document.getElementById('Fisskill');
const Kaplan = document.getElementById('Kaplan');

const allPlayers = [MrNobady, Avenito, VilaZ, PoggersCZ, Orbi, Fisskill, Kaplan]

MrNobady.addEventListener('click', showMrNobady);
Avenito.addEventListener('click', showAvenito);
VilaZ.addEventListener('click', showVilaz);
PoggersCZ.addEventListener('click', showPoggersCZ);
Orbi.addEventListener('click', showOrbi);
Fisskill.addEventListener('click', showFisskill);
Kaplan.addEventListener('click', showKaplan);

function showMrNobady() {
    resetBorder();
    MrNobady.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'MrNobady';
    playerInfo.innerHTML = 'MrNobody je bez pochyby jeden z nejlepších hráčů v České republice, už dlouho drží #1 rank v českém leaderboardu. Všichni mu říkají Radek nebo Random.';
}

function showAvenito() {
    resetBorder();
    Avenito.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'Avenito';
    playerInfo.innerHTML = 'Avenito je jeden z nejlepších DT hráčů, několikrát členem českého týmu OWC. Má velice diverse skillset, hraje NM HR DT. Nejlepší speed hráč v ČR a 2x porazil Ryuka v 1v1.';
}

function showVilaz() {
    resetBorder();
    VilaZ.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'VilaZ';
    playerInfo.innerHTML = 'VilaZ je podobně jako Avenito velice dobrý DT hráč. Několik let po sobě členem týmu OWC. V komunitě znán jako osu! streamer.';
}

function showPoggersCZ() {
    resetBorder();
    PoggersCZ.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'PoggersCZ';
    playerInfo.innerHTML = 'PoggersCz je hráč, který boří české limity a to hlavně v turanjích, často poráží velice známe a high-ranking hráče v turnamentovém formátu. Nejspíše nejlepší tournament-player v ČR.';
}

function showOrbi() {
    resetBorder();
    Orbi.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'Orbi';
    playerInfo.innerHTML = 'Asi jediný opravdu dobrý HD hráč v ČR, dokáže zahrát cokoliv na mod Hidden a je nezbytnou součástí OWC týmu, díky jeho skillsetu.';
}

function showFisskill() {
    resetBorder();
    Fisskill.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'Fisskill';
    playerInfo.innerHTML = 'Fisskill je především osu! streamerem, stal se z něho v nedávné době dost high-ranking hráč a dost možná bude součástí dalšího OWC týmu. Hlavně hráč map typu NM2.';
}

function showKaplan() {
    resetBorder();
    Kaplan.style.border = "5px solid #DB4EBC"
    title.innerHTML = 'Kaplan';
    playerInfo.innerHTML = 'Kaplan je také velice dobrý hráč, ale komunitou je spíše znán jako pořadatel všech českých turnajů, především naše MČSR - Mistrostvý české a slovenské republiky';
}

function resetBorder() {
    for(let i = 0; i < allPlayers.length; i++) {
        allPlayers[i].style.border = "5px solid transparent";
    }
}

showMrNobady();


