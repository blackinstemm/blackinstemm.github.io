/* ==========================================================================
   BlackInSTEMM — MAIN JAVASCRIPT FILE
   ==========================================================================
   This file is loaded once, at the bottom of index.html (this is a
   single-page site, so there's only one HTML file). It handles:

     1. The mobile nav menu (hamburger toggle)
     2. The Member Organizations data list + turning it into the logo/name/
        website/social-links grid under the hero section
     3. The ABRCMS Events data list + turning it into the session cards next
        to the roadmap image in the Events section
   ========================================================================== */


/* ==========================================================================
   1. MOBILE NAV TOGGLE
   ========================================================================== */
/* Finds the hamburger button (.nav-toggle) and the nav links list
   (.nav-links), and makes clicking the button show/hide the links.
   This only visually matters on small screens — see the ".nav-toggle" and
   ".nav-links" rules inside the "@media (max-width: 768px)" section of
   css/style.css. */

const navToggleButton = document.querySelector('.nav-toggle');
const navLinksList = document.querySelector('.nav-links');

if (navToggleButton && navLinksList) {
  navToggleButton.addEventListener('click', () => {
    navLinksList.classList.toggle('nav-links-open');
  });

  // Also close the mobile menu after tapping a link, since all nav links
  // now jump to a section on this same page rather than loading a new page
  // (which used to close the menu automatically).
  navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksList.classList.remove('nav-links-open');
    });
  });
}


/* ==========================================================================
   2. MEMBER ORGANIZATIONS GRID DATA
   ========================================================================== */
/* This powers the "Member Organizations" grid under the hero section — a
   logo, the full organization name, their website, and links to their
   social media.

   HOW TO ADD A NEW ONE:
   Copy the entire { ... } block below, paste it as a new entry, and fill
   in the details.

   Field guide:
     name        - the organization's full name, shown under their logo
     logo        - path to their logo image in images/organizations/
     website     - their website URL, or "" (empty quotes) if they don't
                   have one yet. The link shown on the card is the domain
                   name itself (e.g. "example.org"), not the word "website"
                   — that's computed automatically, you don't type it.
     socialLinks - a list of their social media pages: { platform, url }.
                   Add as many as they have, or an empty list ([]) if none. */

const memberOrganizations = [

  {
    name: "Black in Marine Science (BIMS)",
    logo: "images/organizations/bims-logo.png",
    website: "https://www.blackinmarinescience.org",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/bimscience/" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/bimscience/" },
      { platform: "TikTok", url: "https://www.tiktok.com/@bimscience" },
      { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=100063782273312" }
    ]
  },

  {
    // NOTE: no website in the spreadsheet for this one yet — add it here
    // once you have it.
    name: "BlackInEngineering",
    logo: "images/organizations/blackinengineering-logo.png",
    website: "",
    socialLinks: []
  },

  {
    // NOTE: the spreadsheet listed a LinkedIn label for this org but no
    // actual URL next to it — add it here once you have the link.
    name: "Partnering to Advance Imaging Research",
    logo: "images/organizations/pairup-logo.png",
    website: "https://www.pairupscience.org",
    socialLinks: [
      { platform: "Bluesky", url: "https://bsky.app/profile/pair-up.bsky.social" }
    ]
  },

  {
    name: "Black Microbiologists Association (BlackInMicro)",
    logo: "images/organizations/bma-logo.png",
    website: "https://blackinmicrobiology.org",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/blackinmicro" },
      { platform: "Bluesky", url: "https://bsky.app/profile/blackinmicro.bsky.social" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/black-in-microbiology" },
      { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=100063555306817" }
    ]
  },

  {
    // NOTE: the spreadsheet only said "X and BlueSky (@BlackInBiophys)" —
    // the X/Twitter link below was constructed from that handle. The
    // Bluesky handle wasn't in the standard "name.bsky.social" format, so
    // it was left out rather than guessed — add it here once confirmed.
    name: "Black In Biophysics (BIBPS)",
    logo: "images/organizations/blackinbiophysics-logo.jpg",
    website: "https://www.blackinbiophysics.org",
    socialLinks: [
      { platform: "X / Twitter", url: "https://x.com/BlackInBiophys" }
    ]
  },

  {
    name: "The Black Science Coalition and Institute (B-SCI)",
    logo: "images/organizations/bsci-logo.png",
    website: "https://www.b-sci.org",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/thebsci/" },
      { platform: "Bluesky", url: "https://bsky.app/profile/b-sci.bsky.social" },
      { platform: "YouTube", url: "https://www.youtube.com/@b-sci" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/b-sci/" }
    ]
  },

  {
    name: "BlackInCardio (BinCardio)",
    logo: "images/organizations/blackincardio-logo.png",
    website: "https://blackincardio.com",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/blackincardio/" }
    ]
  },

  {
    // NOTE: the spreadsheet's Bluesky handle was typed as
    // "blackingenetics.bksy.social" — "bksy" looks like a typo of "bsky",
    // so the URL below uses the corrected domain. Double-check this is
    // actually their handle.
    name: "Black In Genetics (BIG)",
    logo: "images/organizations/blackingenetics-logo.png",
    website: "https://www.blackingenetics.com",
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/BlackInGenetics" },
      { platform: "Instagram", url: "https://www.instagram.com/blackingenetics/" },
      { platform: "Bluesky", url: "https://bsky.app/profile/blackingenetics.bsky.social" },
      { platform: "X / Twitter", url: "https://x.com/blackingenetics" }
    ]
  },

  {
    name: "Black In Neuroscience",
    logo: "images/organizations/blackinneuro-logo.png",
    website: "https://www.blackinneuro.com",
    socialLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/blackinneuro/" },
      { platform: "Bluesky", url: "https://bsky.app/profile/blackinneuro.bsky.social" }
    ]
  },

  // Add more member organizations here — copy a block above and edit the values.

];


/* ==========================================================================
   3. ABRCMS EVENTS DATA (Events section)
   ========================================================================== */
/* These are the specific ABRCMS conference sessions BlackInSTEMM is
   hosting, shown as cards next to the roadmap image in the Events section.

   HOW TO ADD A NEW ONE:
   Copy the entire { ... } block below, paste it as a new entry, and fill
   in the details.

   Field guide:
     title        - the session title
     dateTime     - a plain text date/time line, e.g. "Wednesday, Nov 18 · 2:00–3:30 PM"
     host         - the name of the hosting organization (shown next to their logo)
     hostLogo     - path to that organization's logo in images/organizations/
                    (or images/logo/ for the collective's own logo)
     description  - the session summary. Can include a bulleted list — write
                    each bullet as its own line starting with "- " and it'll
                    be turned into a real list automatically. */

const abrcmsEvents = [

  {
    title: "Harm in the Water: A Film Screening Exploring Pollution, Health, and STEM Pathways",
    dateTime: "Wednesday, Nov 18 · 2:00–3:30 PM",
    host: "Black in Marine Science (BIMS)",
    hostLogo: "images/organizations/bims-logo.png",
    description: "Film screening featuring BIMS' award-winning documentary, Harm in the Water. The film explores how pollution along the Mississippi River disproportionately impacts Black communities, creating an opportunity to connect environmental justice with biomedical sciences, human health, and STEM career pathways."
  },

  {
    title: "Scientists as Changemakers: Turning Ideas Into Action",
    dateTime: "Wednesday, Nov 18 · 3:45–4:30 PM",
    host: "Black Microbiologists Association (BlackInMicro)",
    hostLogo: "images/organizations/bma-logo.png",
    description: `Do you want to get involved in STEM advocacy but don't know where to start? This session will provide a blueprint. Good science is driven by curiosity, courage, and the desire to create something new…just like nonprofit organizations. The leaders of Black Microbiologists Association (BlackInMicro) will share their story of starting a nonprofit during the early stages of their careers while providing practical advice on how to contribute to current advocacy efforts (or start your own!) Open to anyone who has ever asked "What impact can I have as a scientist to organize change?" You will discover how the transferable skills gained in your research can be leveraged to build a better future. In this session, you can expect to:
- Meet early career researchers who turned their ideas into transformative change
- Learn from the organization's journey: founding, growth, restructuring, progress
- Identify opportunities to get involved in grassroots STEM advocacy efforts`
  },

  {
    // NOTE: this is a collective-wide panel (BlackInCardio, BlackInGenetics,
    // BlackInMicro, and more all participate), so the BlackInSTEMM logo is
    // used here rather than crowding in every individual org's logo.
    title: "Staying true to yourself: Navigating your place in STEMM in a changing landscape",
    dateTime: "Saturday, Nov 21 · 2:00–4:00 PM",
    host: "BlackInSTEMM",
    hostLogo: "images/logo/blackinstemm-logo.png",
    description: `Recent scientific funding has posed serious challenges for investigators and trainees alike, highlighting needs for additional support. Meet leaders from BlackInCardio, BlackInGenetics, BlackInMicro, and more, as we discuss tips to build communities for everyone that increase our collective success. Explore how STEMM communities can provide support to scientists throughout their careers. In the first hour, a panel that includes early career researchers will discuss experiences cultivating STEMM communities and leveraging those networks to confront challenges posed by reductions in funding and career opportunities. This session will conclude with a social hour to provide attendees with an opportunity to broaden their own scientific networks and participate in discussions about how to further their career goals. In this session, participants can expect to:
- Learn how to build and cultivate a STEMM community
- Identify ways of leveraging STEMM communities to confront scientific career challenges
- Participate in a networking session to find STEMM community`
  },

  // Add more ABRCMS sessions here — copy a block above and edit the values.

];


/* ==========================================================================
   4. RENDERING (turns the data above into HTML — you shouldn't need to
      edit anything below this line)
   ========================================================================== */

/* Turns a URL like "https://www.example.org/" into the plain domain name
   "example.org" — used so organization cards show the readable site name
   instead of the word "Website". */
function getDisplayDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch (e) {
    return url;
  }
}

/* Simple hand-drawn icon badges for each social platform, so cards show a
   recognizable icon instead of spelling out the platform name. Plain inline
   SVG — no icon font or external library, so it still works with no build
   step. Add a new platform here (exact spelling must match the "platform"
   value used in memberOrganizations above) if you need one that isn't
   covered yet; anything without a matching icon here just won't render one. */
const socialIcons = {
  "Instagram": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
  "Facebook": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 8.5H17V5h-2.5C12.3 5 10.5 6.8 10.5 9v2H8v3.5h2.5V21h3.5v-6.5h2.6l.4-3.5h-3V9c0-.3.2-.5.5-.5z"/></svg>',
  "LinkedIn": '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" font-size="9" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">in</text></svg>',
  "TikTok": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.7 3.5h2c.2 1.7 1.4 3 3 3.3v2.1c-1.1 0-2.2-.3-3-.9v5.3a4.7 4.7 0 1 1-4.7-4.7c.2 0 .4 0 .6.03v2.1a2.6 2.6 0 1 0 2.1 2.57V3.5z"/></svg>',
  "Bluesky": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="12" y="14.5" font-size="6" font-weight="700" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif">BSKY</text></svg>',
  "YouTube": '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9.3l6 2.7-6 2.7z" fill="currentColor"/></svg>',
  "X / Twitter": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>'
};

function renderMemberOrganizations() {
  const container = document.querySelector('#member-orgs-grid');
  if (!container) return;

  memberOrganizations.forEach(org => {
    const card = document.createElement('div');
    card.className = 'org-card';

    const websiteRowHTML = org.website
      ? `<div class="org-website-row"><a href="${org.website}" target="_blank" rel="noopener" class="org-website-link">${getDisplayDomain(org.website)}</a></div>`
      : '';

    const socialIconsHTML = org.socialLinks.map(social => {
      const icon = socialIcons[social.platform] || '';
      return `<a href="${social.url}" target="_blank" rel="noopener" aria-label="${social.platform}" class="org-social-icon">${icon}</a>`;
    }).join('');

    card.innerHTML = `
      <img src="${org.logo}" alt="${org.name} logo" class="org-logo">
      <h3>${org.name}</h3>
      ${websiteRowHTML}
      ${socialIconsHTML ? `<div class="org-social-icons">${socialIconsHTML}</div>` : ''}
    `;

    container.appendChild(card);
  });
}

/* Turns "- bullet one\n- bullet two" lines inside a description into a
   real <ul><li> list; any text before the first "- " line is kept as a
   plain paragraph above the list. */
function formatEventDescription(description) {
  const lines = description.split('\n');
  const bulletStart = lines.findIndex(line => line.trim().startsWith('- '));

  if (bulletStart === -1) {
    return `<p>${description}</p>`;
  }

  const intro = lines.slice(0, bulletStart).join(' ').trim();
  const bullets = lines.slice(bulletStart).map(line => line.trim().replace(/^- /, ''));

  const introHTML = intro ? `<p>${intro}</p>` : '';
  const bulletsHTML = `<ul class="event-bullets">${bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;

  return introHTML + bulletsHTML;
}

function renderAbrcmsEvents() {
  const container = document.querySelector('#abrcms-events-list');
  if (!container) return;

  abrcmsEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'abrcms-event-card';
    card.innerHTML = `
      <div class="abrcms-event-header">
        <img src="${event.hostLogo}" alt="${event.host} logo" class="abrcms-event-logo">
        <div>
          <p class="event-date">${event.dateTime}</p>
          <h3>${event.title}</h3>
          <p class="abrcms-event-host">${event.host}</p>
        </div>
      </div>
      ${formatEventDescription(event.description)}
    `;
    container.appendChild(card);
  });
}

renderMemberOrganizations();
renderAbrcmsEvents();
