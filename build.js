let categoryTitle = ['media', 'social', 'reddit', 'games', 'shop', 'banking', 'code', 'work', 'school', 'misc'];
let colors = ['font_pre01', 'font_pre02', 'font_pre03'];
let categoryLinks = [
    //media
    [
        ['https://login.mailbox.org', 'mail'],
        ['https://netflix.com', 'netflix'],
        ['https://youtube.com/feed/subscriptions', 'youtube'],
        ['https://soundcloud.com/jott_uh_be', 'soundcloud'],
        ['https://rocketbeans.tv/wochenplan/?details=1', 'rbtv'],
        ['http://crunchyroll.com', 'crunchy'],
        ['https://twitch.tv', 'twitch'],
        ['https://jott-uh-be.bandcamp.com', 'bandcamp']
    ],
    //social
    [
        ['https://pr0gramm.com', 'pr0'],
        ['https://discordapp.com/channels/@me', 'discord'],
        ['https://telegram.org/dl/webogram', 'telegram'],
        ['https://www.deviantart.com', 'deviantart'],
        ['https://stackexchange.com', 'stackexchange'],
        ['https://stackoverflow.com', 'stackoverflow'],
        ['http://hanfburg.de', 'hb'],
        ['https://twitter.com', 'twitter'],
        ['https://instagram.com', 'insta']
    ],
    //reddit
    [
        ['https://reddit.com/r/skateboarding/', 'shreddit'],
        ['https://reddit.com/r/unixporn/', 'unixporn'],
        ['https://reddit.com/r/MechanicalKeyboards/', 'mech keys'],
        ['https://reddit.com/r/startpages/', 'startpages'],
        ['https://reddit.com/r/LegionTD2/', 'ltd2'],
        ['https://reddit.com/r/BattleRite/', 'battlerite'],
        ['https://reddit.com/r/slaythespire/', 'slay the spire']
    ],
    //games
    [
        ['https://legiontd2.com', 'ltd2'],
        ['http://crea-turestudios.com/', 'session'],
        ['https://bungie.net', 'destiny2'],
        ['https://battlerite.com', 'battlerite'],
        ['https://mtgdecks.net//Standard', 'mtg a'],
        ['https://docs.google.com/spreadsheets/d/11yn0crhwmH9zs9sTb6vZyyjxF1sJXWyVeTY49c2lfSM/edit#gid=1575270165', 'rl pi'],
        ['https://humblebundle.com', 'humble bundle'],
        ['https://store.steampowered.com/', 'steam'],
        ['https://www.gog.com/', 'gog'],
        ['https://itch.io', 'itch'],
        ['http://opencritic.com/browse?page=0&sort=date&platforms=%5B27%5D&genres=%5B%5D&date=Released', 'opencritic']
    ],
    //shop
    [
        ['https://www.amazon.de/', 'amazon'],
        ['https://ebay-kleinanzeigen.de', 'kleinanzeigen'],
        ['https://www.ebay.de/', 'ebay'],
        ['https://www.massdrop.com/', 'massdrop'],
        ['https://www.discogs.com/', 'discogs'],
        ['https://www.thomann.de/de/index.html?permsel=1', 'thomann']
    ],
    //banking
    [
        ['https://banking.postbank.de/rai/login', 'postbank'],
        ['https://banking.postbank.de/rai/login?legacy=true', 'postbank-legacy'],
        ['https://paypal.com/signin', 'paypal'],
        ['https://dkb.de/banking', 'dkb']
    ],
    //code
    [
        ['https://github.com/bejlem', 'github'],
        ['https://codepen.io/jub/', 'codepen'],
        ['https://devdocs.io/', 'devdocs'],
        ['https://w3schools.com', 'w3schools'],
        ['https://fontawesome.com/', 'fontawesome']
    ],
    //work
    [
        ['https://wiki.bolde.de/wordpress/', 'bolde wiki'],
        ['https://kaseya.bolde.de', 'kaseya'],
        ['https://kaseya.bolde.de/Dashboard/DashboardView.aspx?id=1039&mode=view', 'dashboard'],
        ['https://secure10.datev.de/an-online', 'an-o'],
        ['https://customer.3cx.com', '3cx customer'],
        ['https://forum.acronis.com/user/login?a', 'acronis forum'],
        ['https://drive.terracloud.de/folderstable', 'terra cloud'],
        ['https://wortmann.de/de-de/profile/snsearch.aspx', 'wm sns'],
        ['https://www.catalog.update.microsoft.com/Home.aspx', 'muc'],
        ['https://cartridge-space.de/leergutankauf-toner.html', 'cartridge-space']
    ],
    //school
    [
        ['https://poly.webuntis.com/WebUntis/?school=rbz-technik#/basic/main', 'timetable'],
        ['https://moodle.rbz-technik.de/moodle/login/index.php', 'moodle'],
        ['http://moodle.rbz-technik.de:20010/users/sign_in', 'GitLab'],
        ['https://www.rbz-technik.de/fileadmin/user_upload/Inhalte/Formulare/EntschuldigungsFormular_BS_2017_07_11F.pdf', 'Entschuldigung'],
        ['http://vlsm-calc.net', 'vlsm-calc'],
        ['https://de.wikipedia.org/wiki/Nassi-Shneiderman-Diagramm', 'struktur diagram'],
        ['https://de.wikipedia.org/wiki/Netzplantechnik', 'netzplantechnik']
    ],
    //misc
    [
        ['http://strtpg.ddns.net', 'pi-web'],
        ['http://pi.hole/admin/', 'pi-hole'],
        ['http://coder.local/', 'pi-coder'],
        ['http://fritz.box', 'fritz box'],
        ['https://dict.leo.org/englisch-deutsch/', 'leo'],
        ['https://privnote.com', 'privnote'],
        ['http://everynoise.com', 'every noise'],
        ['https://icloud.com', 'icloud'],
        ['https://duckduckgo.com/bang', '!bangs'],
        ['http://colorhunt.co', 'color hunt'],
        ['https://www.colorhexa.com/', 'color hexa'],
        ['https://color.adobe.com/create/color-wheel/', 'color wheel'],
        ['http://qr-code-generator.com', 'qr-gen'],
        ['https://ipinfo.io/ip', 'ipinfo'],
        ['https://wikileaks.org/ciav7p1/cms/page_17760284.html', 'jap faces'],
        ['https://textfac.es', 'textfaces'],
        ['https://www.hiveworkshop.com/threads/beginning-jass-tutorial-series.30765/', 'jass tutorial'],
        ['https://www.hiveworkshop.com/threads/codeless-save-and-load-multiplayer-v2-0-0.278664/', 'codeless save load']
    ]
];

window.onload = function() {
    insertLinks();
};

function insertLinks() {
    let html = '';
    let numGroup = 0;
    let numCat = '01';
    for (let i = 0; i < categoryTitle.length; i++) {
        if (i === 0 || i === 3 || i === 6){
            if (i === 0) {
                //alert('first html appending');
                html += '<div id=\'cat_top\'>';
            }
            numGroup++;
            html += '<div id=\'grp_0' + numGroup + '\' class=\'cat_group\'>';
        }
        if (i > 8) {
            numCat = '02';
        }
        html += '<div class=\'cat_' + numCat + ' cat_' + categoryTitle[i] + '\'>';
        html += '<label class=\'catPreText font_bold\'>';
        html += '<span class=\'' + colors[0] + '\'> ~ </span>';
        html += '<span class=\'' + colors[1] + '\'> ❯ </span>';
        html += '[<span class=\'' + colors[2] + '\'>' + categoryTitle[i] + '</span>]<span class=\'' + colors[1] + '\'>: </span>ls';
        html += '</label>';
        html += '<div class=\'links\'>';
        for (let x in categoryLinks[i]) {
            html += '       <a href=\'' + categoryLinks[i][x][0] + '\'>' + categoryLinks[i][x][1] + '</a>';
        }
        html += '</div>';
        html += '</div>';
        if (i === 2 || i === 5 || i === 8) {
            if (i === 8) {
                html += '</div>';
            }
            html += '</div>';
        }
    }
    document.getElementById('content').innerHTML = html;
    let heightCatTop = 0;
    for (let i = 1; i <= numGroup; i++) {
        let heightCatGrp = document.getElementById('grp_0' + i).offsetHeight;
        if (heightCatGrp > heightCatTop)
            heightCatTop = heightCatGrp;
    }
    document.getElementById('cat_top').style.height = (heightCatTop + 10) + 'px';
}
