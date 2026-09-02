/* =========================================================
   FANTASY ZANZIBAR SAFARIS — SHARED APP LOGIC
   Used by: index.html, booking.html, tracker.html, profile.html
   ========================================================= */

/* ---------------------------------------------------------
   1. IMAGE ASSETS
   Logo files are local (assets/img/). The destination photos
   are sourced from Wikimedia Commons (openly licensed) since
   this project ships as code rather than binary photo files.
   Swap any of these for your own photography at any time —
   just replace the URL/path, the rest of the site adapts.
--------------------------------------------------------- */
const IMG = {
  logoBadge: "assets/img/logo-badge.png",
  logoHorizontal: "assets/img/logo-horizontal.png",
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazing%20Zanzibar%20Sunset%20(15).jpg?width=1800",
  beach1: "https://commons.wikimedia.org/wiki/Special:FilePath/White%20sandy%20beach%20at%20Nungwi,%20Zanzibar.jpg?width=1200",
  beach2: "https://commons.wikimedia.org/wiki/Special:FilePath/Nungwi-Beach-Zanzibar.jpg?width=1000",
  kendwa: "https://commons.wikimedia.org/wiki/Special:FilePath/Kendwa%20Beach%20(Sunset%20Kendwa%20Hotel).JPG?width=1200",
  eastcoast: "https://commons.wikimedia.org/wiki/Special:FilePath/Zanzibar%20east%20coast%20pristine%20beach.JPG?width=1200",
  stonetown: "https://commons.wikimedia.org/wiki/Special:FilePath/Stone%20Town%20Zanzibar%202.jpeg?width=1200",
  stonetown2: "https://commons.wikimedia.org/wiki/Special:FilePath/Streets%20of%20Stone%20town,%20Zanzibar.jpg?width=1200",
  stonetown3: "https://commons.wikimedia.org/wiki/Special:FilePath/Streets%20of%20Stone%20Town%20(34603004541).jpg?width=1200",
  door: "https://commons.wikimedia.org/wiki/Special:FilePath/Detail%20of%20Carved%20Wooden%20Door%20-%20Stone%20Town%20-%20Zanzibar%20-%20Tanzania%20(8841700340).jpg?width=1200",
  fort: "https://commons.wikimedia.org/wiki/Special:FilePath/Fort%20Stone%20Town.jpg?width=1200",
  forodhani: "https://commons.wikimedia.org/wiki/Special:FilePath/Forodhani_jubilee_gardens_zanzinar.jpg?width=1200",
  market: "https://commons.wikimedia.org/wiki/Special:FilePath/People%20at%20the%20marketplace%20of%20the%20Stone%20Town%20-%20Zanzibar%20(22227853516).jpg?width=1200",
  wildlife: "https://commons.wikimedia.org/wiki/Special:FilePath/Zanzibar%20Red%20Colobus%20at%20Jozani%20Chwaka%20Bay%20National%20Park,%20Kusini%20DC,%20South%20Zanzibar,%20Tanzania.jpg?width=1200",
  pongwe: "https://commons.wikimedia.org/wiki/Special:FilePath/Pongwe%20Beach%20Zanzibar.jpg?width=1200",
  temple: "https://commons.wikimedia.org/wiki/Special:FilePath/Hindu%20temple,%20Stone%20Town,%20Zanzibar%20(28488193413).jpg?width=1200",
  spice1: "https://commons.wikimedia.org/wiki/Special:FilePath/Spice%20tour%201%20(14517564599).jpg?width=1200",
  spice2: "https://commons.wikimedia.org/wiki/Special:FilePath/Spice%20tour%202%20(14701047191).jpg?width=1200",
  spiceNutmeg: "https://commons.wikimedia.org/wiki/Special:FilePath/Guide%20Displays%20Nutmeg%20-%20Spice%20Plantation%20-%20Outside%20Stone%20Town%20-%20Zanzibar%20-%20Tanzania%20(8869268884).jpg?width=1200",
  cocoa: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocoa%20fruit%20growing%20at%20a%20spice%20farm%20in%20Zanzibar.jpg?width=1200"
};

/* ---------------------------------------------------------
   2. PACKAGE DATA (single source of truth for the whole site)
--------------------------------------------------------- */
const PACKAGES = [
  {
    id:"nungwi-kendwa",
    name:"Nungwi & Kendwa Beaches",
    category:"Beach",
    days:5, nights:4, price:850,
    image:IMG.beach1,
    images:[IMG.beach1, IMG.beach2, IMG.kendwa],
    hotelNames:["Nungwi Beach Resort","Kendwa Rock Zanzibar"],
    hotel:"Nungwi Beach Resort (4-star) — sea-view rooms, with the option to upgrade to Kendwa Rock Zanzibar (5-star) for a supplement.",
    desc:"Five days of relaxation on some of the finest beaches in the world. Nungwi and Kendwa are known for soft white sand, calm turquoise water, and spectacular west-facing sunsets.",
    includes:["Airport (ZNZ) pickup and hotel transfer","4 nights accommodation, Bed & Breakfast basis","Full-day dolphin swimming excursion at Kizimkazi","Sunset dhow sailing cruise","English/Swahili-speaking local guide","Drinking water on all excursions"],
    itinerary:[
      {title:"Arrival & Settling into Nungwi",desc:"Airport welcome, transfer to Nungwi, an easy evening on the beach followed by a welcome dinner."},
      {title:"Swimming with Dolphins, Kizimkazi",desc:"Morning boat excursion to Kizimkazi to swim with wild dolphins, followed by a fresh seafood lunch."},
      {title:"Free Day on the Beach",desc:"A full day to enjoy Nungwi beach — optional watersports (kitesurfing, diving) or simply relax in the sun."},
      {title:"Kendwa Sunset Cruise",desc:"Transfer to Kendwa in the afternoon; an evening sunset dhow cruise with drinks and snacks."},
      {title:"Souvenir Shopping & Departure",desc:"Final hours on the beach, souvenir shopping, then transfer back to the airport."}
    ]
  },
  {
    id:"stone-town-heritage",
    name:"Stone Town Heritage",
    category:"Culture",
    days:4, nights:3, price:620,
    image:IMG.stonetown,
    images:[IMG.stonetown, IMG.door, IMG.forodhani],
    hotelNames:["Zanzibar Serena Hotel"],
    hotel:"Zanzibar Serena Hotel (4-star), inside Stone Town, close to Forodhani Market.",
    desc:"Wander the narrow lanes of Stone Town, a UNESCO World Heritage Site. Discover carved Arabic doors, bustling markets, and the spice-trade history that shaped this island.",
    includes:["Airport pickup and hotel transfer","3 nights accommodation, Bed & Breakfast basis","Guided Stone Town walking heritage tour","Visit to the Slave Trade Exhibit Museum","Dinner at Forodhani Night Food Market","Entry tickets to historic sites"],
    itinerary:[
      {title:"Arrival in Stone Town",desc:"Airport welcome, check-in to a hotel in the heart of the old town, an evening stroll through Forodhani Market."},
      {title:"History of the Old Town",desc:"Full walking tour — the House of Wonders, the Old Fort, the former slave market, and the famous carved Arabic doors."},
      {title:"Art & Culture",desc:"Visit local art studios, a Tingatinga painting workshop, and a traditional Swahili lunch."},
      {title:"Free Time & Departure",desc:"A free morning for souvenir shopping in nearby markets, then transfer back to the airport."}
    ]
  },
  {
    id:"spice-jozani",
    name:"Spice Farms & Jozani Forest",
    category:"Nature",
    days:3, nights:2, price:480,
    image:IMG.wildlife,
    images:[IMG.spice1, IMG.spice2, IMG.wildlife],
    hotelNames:["Jozani Bwawani Lodge"],
    hotel:"Jozani Bwawani Lodge (3-star+) — eco-friendly lodging near the forest reserve.",
    desc:"A package for nature lovers — visit fragrant spice farms growing cloves, cardamom and cinnamon, then meet the rare Red Colobus monkeys in Jozani-Chwaka Bay Forest.",
    includes:["Round-trip hotel transfers","2 nights accommodation, half-board basis","Guided spice farm tour with tastings","Jozani National Park entry fee and guide","Mangrove boardwalk nature walk","Traditional Zanzibari lunch"],
    itinerary:[
      {title:"Spice Farm Tour",desc:"Morning tour of a working spice farm — taste fresh cloves, cardamom, cinnamon and vanilla straight from the source."},
      {title:"Jozani Forest",desc:"Travel to Jozani-Chwaka Bay National Park to see the Red Colobus monkeys found only in Zanzibar, plus a mangrove boardwalk walk."},
      {title:"Fishing Village & Departure",desc:"A short visit to a traditional fishing village on the east coast before the transfer back."}
    ]
  },
  {
    id:"honeymoon-luxury",
    name:"Luxury Honeymoon Escape",
    category:"Luxury",
    days:6, nights:5, price:1650,
    image:IMG.pongwe,
    images:[IMG.pongwe, IMG.eastcoast, IMG.hero],
    hotelNames:["Baraza Resort & Spa"],
    hotel:"Baraza Resort & Spa (5-star) — private suites, each with a private plunge pool.",
    desc:"A romantic package for couples — luxury suites with private pools, a private beachfront dinner, and spa treatments infused with Zanzibar's own spices.",
    includes:["VIP private-car airport transfer","5 nights in a luxury suite","Private romantic beachfront dinner (1 evening)","Two couples' spa treatments","Sunset cruise on a private dhow","Professional couple's photoshoot (digital album)"],
    itinerary:[
      {title:"Luxury Arrival",desc:"VIP welcome, check-in to a suite with a private plunge pool, romantic dinner on a private stretch of beach."},
      {title:"Spa & Relaxation Day",desc:"A free morning, followed by a couples' spa treatment using natural Zanzibari spice oils."},
      {title:"Couple's Photoshoot & Beach Time",desc:"Morning professional photoshoot, afternoon relaxing by the beach or pool."},
      {title:"Sunset Cruise",desc:"A romantic evening aboard a private luxury dhow with champagne and live music."},
      {title:"Free Day of Indulgence",desc:"A full day enjoying resort amenities — the private pool, international dining, and in-room service."},
      {title:"Relaxed Departure",desc:"A final beachfront breakfast before a VIP transfer back to the airport."}
    ]
  },
  {
    id:"full-island",
    name:"Complete Zanzibar — Beaches, Culture & Nature",
    category:"Combo",
    days:7, nights:6, price:1180,
    image:IMG.stonetown2,
    images:[IMG.stonetown2, IMG.wildlife, IMG.beach1],
    hotelNames:["Zanzibar Serena Hotel","Jozani Bwawani Lodge","Nungwi Beach Resort"],
    hotel:"A mix of three properties: Stone Town (4-star), Jozani Lodge (3-star+), and Nungwi Beach Resort (4-star).",
    desc:"Our most complete package — combining Stone Town's history, Jozani's nature experience, and beach days at Nungwi. The best way to see all of Zanzibar in a single trip.",
    includes:["All inter-island transfers","6 nights accommodation across three locations","Guided Stone Town heritage tour","Spice farm tour and Jozani Forest visit","Two full beach days at Nungwi","Daily breakfast plus 3 dinners"],
    itinerary:[
      {title:"Arrival & Stone Town",desc:"Airport welcome, check-in in the old town, an evening walk through Forodhani."},
      {title:"History of the Old Town",desc:"Full guided history tour of Stone Town and its markets."},
      {title:"Spices & Jozani",desc:"Excursion to a spice farm and Jozani Forest to see the Red Colobus monkeys."},
      {title:"Heading to Nungwi",desc:"Transfer north, check-in at Nungwi Beach Resort, a free evening on the beach."},
      {title:"Swimming with Dolphins",desc:"Boat excursion to Kizimkazi to swim with wild dolphins."},
      {title:"Free Beach Day",desc:"A full day to relax, optional watersports, or simply unwind."},
      {title:"Sunset Cruise & Departure",desc:"A final sunset dhow cruise before transferring back to the airport."}
    ]
  },
  {
    id:"family-adventure",
    name:"Zanzibar for Families",
    category:"Family",
    days:5, nights:4, price:990,
    image:IMG.market,
    images:[IMG.market, IMG.pongwe, IMG.eastcoast],
    hotelNames:["Family Resort Pongwe"],
    hotel:"Family Resort Pongwe (4-star) — family rooms and a dedicated kids' pool.",
    desc:"A package designed for families with children — activities for all ages, spacious accommodation, and a schedule balanced between rest and adventure.",
    includes:["Family-vehicle airport transfer","4 nights in family rooms","Visit to Mnarani Sea Turtle Aquarium","Spice garden day with kid-friendly activities","Daily breakfast and dinner","Family-experienced tour guide"],
    itinerary:[
      {title:"Arrival & Settling In",desc:"Airport welcome, hotel check-in, a fun family evening on the beach."},
      {title:"Mnarani Sea Turtles",desc:"Morning visit to Mnarani Natural Aquarium to see sea turtles, afternoon at the resort pool."},
      {title:"Spice Farm for Kids",desc:"A spice farm tour with hands-on activities designed to get children tasting and smelling."},
      {title:"Beach Day",desc:"A full day of beach games — volleyball, sandcastle building, and swimming."},
      {title:"Happy Departure",desc:"A final morning for family photos before the transfer back."}
    ]
  }
];

const GALLERY_IMAGES = [
  {src:IMG.hero, alt:"Sunset over traditional dhow boats, Zanzibar", cls:"g-wide g-tall"},
  {src:IMG.beach1, alt:"White sand beach at Nungwi"},
  {src:IMG.kendwa, alt:"Kendwa beach at sunset"},
  {src:IMG.stonetown, alt:"Historic streets of Stone Town"},
  {src:IMG.door, alt:"Traditional carved wooden door, Stone Town"},
  {src:IMG.wildlife, alt:"Red Colobus monkey, Jozani Forest"},
  {src:IMG.spice1, alt:"Guided spice farm tour"},
  {src:IMG.market, alt:"Stone Town marketplace"},
  {src:IMG.pongwe, alt:"Pongwe beach"},
  {src:IMG.forodhani, alt:"Forodhani Gardens, Stone Town", cls:"g-wide"},
  {src:IMG.fort, alt:"The Old Fort, Stone Town"},
  {src:IMG.eastcoast, alt:"Pristine beach on Zanzibar's east coast"},
  {src:IMG.cocoa, alt:"Cocoa growing at a Zanzibar spice farm"},
  {src:IMG.stonetown3, alt:"A quiet street in Stone Town"}
];

const ACTIVITIES = [
  {id:"kitesurf-paje", name:"Kitesurfing at Paje", icon:"🪁", image:IMG.eastcoast, desc:"Zanzibar's east coast winds make Paje one of Africa's top kitesurfing spots — lessons for beginners, gear for pros.", price:"From $80 / session", priceValue:80, unit:"session"},
  {id:"snorkel-mnemba", name:"Snorkeling & Diving, Mnemba Atoll", icon:"🤿", image:IMG.beach2, desc:"Explore one of the Indian Ocean's healthiest coral reefs, home to turtles, reef sharks and vivid tropical fish.", price:"From $70 / trip", priceValue:70, unit:"trip"},
  {id:"dolphins-kizimkazi", name:"Swimming with Dolphins, Kizimkazi", icon:"🐬", image:IMG.beach1, desc:"Join a sunrise boat trip to swim alongside wild spinner dolphins in their natural habitat.", price:"From $55 / trip", priceValue:55, unit:"trip"},
  {id:"sunset-dhow", name:"Sunset Dhow Cruise", icon:"⛵", image:IMG.hero, desc:"Sail on a traditional wooden dhow as the sun sets over the Indian Ocean, drinks and snacks included.", price:"From $45 / person", priceValue:45, unit:"person"},
  {id:"deep-sea-fishing", name:"Deep Sea Fishing", icon:"🎣", image:IMG.eastcoast, desc:"Half-day and full-day charters chasing marlin, tuna and kingfish off Zanzibar's western coast.", price:"From $150 / boat", priceValue:150, unit:"boat"},
  {id:"jetski-kendwa", name:"Jet Ski & Parasailing, Kendwa", icon:"🚤", image:IMG.kendwa, desc:"High-energy jet ski runs along Kendwa beach, or soar above the coastline on a parasail.", price:"From $110 / session", priceValue:110, unit:"session"}
];

const PARTNER_HOTELS = [
  {name:"Nungwi Beach Resort", location:"Nungwi, North Coast", stars:5, image:IMG.beach1},
  {name:"Kendwa Rock Zanzibar", location:"Kendwa Beach", stars:5, image:IMG.kendwa},
  {name:"Zanzibar Serena Hotel", location:"Stone Town Oceanfront", stars:4, image:IMG.fort},
  {name:"Baraza Resort & Spa", location:"Bwejuu — East Coast", stars:5, image:IMG.pongwe},
  {name:"Jozani Bwawani Lodge", location:"Near Jozani Forest", stars:3, image:IMG.wildlife},
  {name:"Family Resort Pongwe", location:"Pongwe Beach", stars:4, image:IMG.beach2}
];

const TRACK_STEPS = ["Confirmed","Paid","Preparation","On Holiday","Completed"];

/* ---------------------------------------------------------
   3. API CLIENT
   Talks to the real Node.js backend running as Netlify
   Functions (see /netlify/functions). Auth tokens (JWTs) are
   kept in localStorage only — never the user data itself —
   so a page reload or a jump between index.html, booking.html,
   tracker.html, profile.html and admin.html stays logged in.
--------------------------------------------------------- */
const API_BASE = "/api";
const TOKEN_KEY = "fzs_token";
const ADMIN_TOKEN_KEY = "fzs_admin_token";

function getToken(){ return localStorage.getItem(TOKEN_KEY); }
function setToken(t){ t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); }
function getAdminToken(){ return localStorage.getItem(ADMIN_TOKEN_KEY); }
function setAdminToken(t){ t ? localStorage.setItem(ADMIN_TOKEN_KEY, t) : localStorage.removeItem(ADMIN_TOKEN_KEY); }

async function apiFetch(path, options){
  options = options || {};
  const headers = Object.assign({ "Content-Type": "application/json" }, options.headers || {});
  if(options.token) headers["Authorization"] = "Bearer " + options.token;
  let res, data;
  try{
    res = await fetch(API_BASE + path, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });
  }catch(e){
    throw new Error("Could not reach the server. Please check your connection and try again.");
  }
  try{ data = await res.json(); }catch(e){ data = null; }
  if(!res.ok){
    throw new Error((data && data.error) || "Something went wrong. Please try again.");
  }
  return data;
}

let currentUser = null; // {name, email, phone, joined}
let currentAdmin = false;

async function loadSession(){
  const token = getToken();
  if(!token){ currentUser = null; return null; }
  try{
    const data = await apiFetch("/me", { method:"GET", token });
    currentUser = data.user;
  }catch(e){
    setToken(null);
    currentUser = null;
  }
  return currentUser;
}
async function clearSession(){
  currentUser = null;
  setToken(null);
}

async function loadAdminSession(){
  currentAdmin = !!getAdminToken();
  return currentAdmin;
}
async function adminLogin(email, password){
  try{
    const data = await apiFetch("/admin-login", { method:"POST", body:{email, password} });
    setAdminToken(data.token);
    currentAdmin = true;
    return true;
  }catch(e){
    return false;
  }
}
async function adminLogout(){
  currentAdmin = false;
  setAdminToken(null);
}

/* ---------- bookings (customer-scoped, server filters by token) ---------- */
async function getMyBookings(){
  const token = getToken();
  if(!token) return [];
  try{
    const data = await apiFetch("/bookings", { method:"GET", token });
    return data.bookings;
  }catch(e){ return []; }
}
async function createBooking(payload){
  const token = getToken();
  const data = await apiFetch("/bookings", { method:"POST", token, body: payload });
  return data.booking;
}

/* ---------- activity bookings (customer-scoped) ---------- */
async function getMyActivityBookings(){
  const token = getToken();
  if(!token) return [];
  try{
    const data = await apiFetch("/activity-bookings", { method:"GET", token });
    return data.activityBookings;
  }catch(e){ return []; }
}
async function createActivityBooking(payload){
  const token = getToken();
  const data = await apiFetch("/activity-bookings", { method:"POST", token, body: payload });
  return data.activityBooking;
}

/* ---------- admin data (all users + all bookings) ---------- */
async function adminFetchAll(){
  const token = getAdminToken();
  if(!token) return { users:[], bookings:[] };
  try{
    return await apiFetch("/admin-data", { method:"GET", token });
  }catch(e){
    return { users:[], bookings:[] };
  }
}
async function setBookingProgress(id, step){
  const token = getAdminToken();
  await apiFetch("/admin-bookings", { method:"PUT", token, body:{ id, progressStep: parseInt(step) } });
}
async function deleteBooking(id){
  const token = getAdminToken();
  await apiFetch("/admin-bookings", { method:"DELETE", token, body:{ id } });
}

/* ---------------------------------------------------------
   4. AUTH REQUIREMENT GUARD
   Call requireLogin() at the top of any page/section that
   must only be visible to a logged-in user (tracker, profile).
   Returns true if the user is logged in; otherwise shows the
   "please log in" gate and returns false.
--------------------------------------------------------- */
function requireLogin(gateElementId, redirectAfterLoginToSelf){
  if(currentUser) return true;
  const gate = document.getElementById(gateElementId);
  if(gate){
    gate.style.display = "block";
  }
  return false;
}

/* ---------------------------------------------------------
   5. SHARED UI HELPERS (nav, modals, toast, lightbox)
--------------------------------------------------------- */
function moneyFmt(n){ return "$" + n.toLocaleString(); }

function updateAuthUI(){
  const guest = document.getElementById("guestActions");
  const user = document.getElementById("userActions");
  if(!guest || !user) return;
  guest.style.display = currentUser ? "none" : "block";
  user.style.display = currentUser ? "flex" : "none";
  if(currentUser){
    const nameEl = document.getElementById("userChipName");
    if(nameEl) nameEl.textContent = currentUser.name.split(" ")[0];
  }
}

function openOverlay(id){ document.getElementById(id).classList.add("open"); document.body.style.overflow="hidden"; }
function closeOverlay(id){ document.getElementById(id).classList.remove("open"); document.body.style.overflow=""; }
function toggleMobileNav(){ document.getElementById("navLinks").classList.toggle("mobile-open"); }

function openLightbox(src,alt){
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = alt;
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox(){ document.getElementById("lightbox")?.classList.remove("open"); }

let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 3400);
}

document.addEventListener("click", (e)=>{
  if(e.target.classList && e.target.classList.contains("overlay")){
    e.target.classList.remove("open");
    document.body.style.overflow="";
  }
  if(e.target.id==="lightbox") closeLightbox();
});

/* ---------------------------------------------------------
   6. AUTH MODAL (login / register) — shared on every page
--------------------------------------------------------- */
let pendingRedirectAfterLogin = null; // e.g. {type:'booking', pkgId:'nungwi-kendwa'}

function openAuth(mode){
  const alertEl = document.getElementById("authAlert");
  if(alertEl) alertEl.classList.remove("show");
  switchAuth(mode);
  openOverlay("authOverlay");
}
function switchAuth(mode){
  document.getElementById("authTitle").textContent = mode==="login" ? "Welcome back" : "Create your account";
  document.getElementById("loginForm").style.display = mode==="login" ? "block":"none";
  document.getElementById("registerForm").style.display = mode==="register" ? "block":"none";
  document.getElementById("authAlert").classList.remove("show");
}
function showAuthError(msg){
  const el = document.getElementById("authAlert");
  el.textContent = msg; el.classList.add("show");
}

async function doRegister(){
  const name = document.getElementById("regName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value;
  if(!name || !email || password.length<6){
    showAuthError("Please fill in your name, a valid email, and a password of at least 6 characters.");
    return;
  }
  const btn = document.querySelector('#registerForm button[onclick="doRegister()"]');
  if(btn){ btn.disabled = true; btn.textContent = "Creating Account..."; }
  try{
    const data = await apiFetch("/register", { method:"POST", body:{name, phone, email, password} });
    setToken(data.token);
    currentUser = data.user;
    afterLogin();
  }catch(e){
    showAuthError(e.message);
  }finally{
    if(btn){ btn.disabled = false; btn.textContent = "Create Account"; }
  }
}

async function doLogin(){
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  if(!email || !password){
    showAuthError("Please enter your email and password.");
    return;
  }
  const btn = document.querySelector('#loginForm button[onclick="doLogin()"]');
  if(btn){ btn.disabled = true; btn.textContent = "Logging In..."; }
  try{
    const data = await apiFetch("/login", { method:"POST", body:{email, password} });
    setToken(data.token);
    currentUser = data.user;
    afterLogin();
  }catch(e){
    showAuthError(e.message);
  }finally{
    if(btn){ btn.disabled = false; btn.textContent = "Log In to Your Account"; }
  }
}

function afterLogin(){
  closeOverlay("authOverlay");
  updateAuthUI();
  showToast("Welcome, " + currentUser.name.split(" ")[0] + "!");
  if(typeof onAfterLogin === "function") onAfterLogin();
}

async function logout(){
  await clearSession();
  updateAuthUI();
  showToast("You have been logged out.");
  if(typeof onAfterLogout === "function") onAfterLogout();
  else window.location.href = "index.html";
}

/* ---------------------------------------------------------
   7. PACKAGE RENDERING (used on index.html)
--------------------------------------------------------- */
function sliderHtml(images, altText){
  const imgs = (images && images.length) ? images : [altText];
  const slides = imgs.map((src,i)=>`<img class="slide ${i===0?'active':''}" src="${src}" alt="${altText}" loading="lazy">`).join("");
  if(imgs.length<=1) return slides;
  const dots = `<div class="slide-dots">${imgs.map((_,i)=>`<span class="dot ${i===0?'active':''}"></span>`).join("")}</div>`;
  const btns = `
      <button class="slide-btn prev" onclick="event.stopPropagation();event.preventDefault();moveSlide(this,-1)" aria-label="Previous photo">&#10094;</button>
      <button class="slide-btn next" onclick="event.stopPropagation();event.preventDefault();moveSlide(this,1)" aria-label="Next photo">&#10095;</button>`;
  return slides + btns + dots;
}
function moveSlide(btn, dir){
  const wrap = btn.closest(".img-wrap");
  if(!wrap) return;
  const slides = Array.from(wrap.querySelectorAll(".slide"));
  const dots = Array.from(wrap.querySelectorAll(".slide-dots .dot"));
  let idx = slides.findIndex(s=>s.classList.contains("active"));
  if(idx<0) idx = 0;
  slides[idx].classList.remove("active");
  if(dots[idx]) dots[idx].classList.remove("active");
  idx = (idx + dir + slides.length) % slides.length;
  slides[idx].classList.add("active");
  if(dots[idx]) dots[idx].classList.add("active");
}

function packageCardHtml(p){
  return `
    <div class="pkg-card">
      <div class="img-wrap">
        ${sliderHtml(p.images, p.name)}
        <span class="pkg-badge">${p.category}</span>
        <span class="pkg-price">${moneyFmt(p.price)}<small>PER PERSON</small></span>
      </div>
      <div class="pkg-body">
        <h3>${p.name}</h3>
        <div class="pkg-meta"><span>${p.days} Days / ${p.nights} Nights</span></div>
        <p class="desc">${p.desc.slice(0,110)}...</p>
        <div class="pkg-hotel"><b>Hotel:</b> ${p.hotel.split("—")[0].split("(")[0]}</div>
        <div class="pkg-actions">
          <a class="btn btn-ghost" href="booking.html?pkg=${p.id}">View Details</a>
          <a class="btn btn-dark" href="booking.html?pkg=${p.id}#book">Book Now</a>
        </div>
      </div>
    </div>`;
}

function renderFilters(){
  const row = document.getElementById("filterRow");
  if(!row) return;
  const cats = ["All", ...new Set(PACKAGES.map(p=>p.category))];
  row.innerHTML = cats.map((c,i)=>`<button class="filter-chip ${i===0?'active':''}" onclick="filterPackages('${c}', this)">${c}</button>`).join("");
}
function filterPackages(cat, btn){
  document.querySelectorAll(".filter-chip").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  renderPackageGrid(cat);
}
function renderPackageGrid(cat){
  cat = cat || "All";
  const grid = document.getElementById("pkgGrid");
  if(!grid) return;
  const list = cat === "All" ? PACKAGES : PACKAGES.filter(p=>p.category===cat);
  grid.innerHTML = list.map(packageCardHtml).join("");
}
function renderFooterLinks(){
  const el = document.getElementById("footerPkgLinks");
  if(!el) return;
  el.innerHTML = PACKAGES.slice(0,5).map(p=>
    `<li><a href="booking.html?pkg=${p.id}">${p.name}</a></li>`
  ).join("");
}
function renderGallery(){
  const el = document.getElementById("galleryGrid");
  if(!el) return;
  el.innerHTML = GALLERY_IMAGES.map(g =>
    `<img class="${g.cls||''}" src="${g.src}" alt="${g.alt}" loading="lazy" onclick="openLightbox('${g.src}','${g.alt}')">`
  ).join("");
}

function renderActivities(){
  const el = document.getElementById("activityGrid");
  if(!el) return;
  el.innerHTML = ACTIVITIES.map(a => `
    <div class="activity-card">
      <img src="${a.image}" alt="${a.name}" loading="lazy">
      <div class="overlay-grad">
        <div class="ic-badge">${a.icon}</div>
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
        <span class="price-tag">${a.price}</span>
      </div>
    </div>`).join("");
}

function renderPartnerHotels(){
  const el = document.getElementById("partnerGrid");
  if(!el) return;
  el.innerHTML = PARTNER_HOTELS.map(h => `
    <div class="partner-card">
      <div class="img-wrap"><img src="${h.image}" alt="${h.name}" loading="lazy"></div>
      <div class="p-body">
        <h4>${h.name}</h4>
        <div class="p-loc">📍 ${h.location}</div>
        <div class="p-stars">${"★".repeat(h.stars)}${"☆".repeat(5-h.stars)}</div>
      </div>
    </div>`).join("");
}

/* ---------------------------------------------------------
   8. TRACKING RENDER (used on tracker.html + profile.html)
--------------------------------------------------------- */
async function renderTracking(containerSelectId, containerContentId, preselectId){
  const selectWrap = document.getElementById(containerSelectId);
  const content = document.getElementById(containerContentId);
  if(!selectWrap || !content) return;

  const bookings = await getMyBookings();
  if(bookings.length===0){
    selectWrap.innerHTML = "";
    content.innerHTML = `
      <div class="empty-state">
        <div class="ic-big">🧳</div>
        <h3>No trips booked yet</h3>
        <p>Choose a package and book it to start tracking your itinerary here.</p>
        <a href="index.html#packages" class="btn btn-dark">Browse Packages</a>
      </div>`;
    return;
  }
  bookings.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
  const selectedId = preselectId && bookings.some(b=>b.id===preselectId) ? preselectId : bookings[0].id;

  selectWrap.innerHTML = `
    <label style="font-size:.85rem;color:var(--teal-800);font-weight:500;">Select trip:</label>
    <select id="bookingSelect_${containerContentId}">
      ${bookings.map(b=>`<option value="${b.id}" ${b.id===selectedId?'selected':''}>${b.packageName} — ${b.date}</option>`).join("")}
    </select>
  `;
  document.getElementById(`bookingSelect_${containerContentId}`).addEventListener("change", (e)=>{
    renderTracking(containerSelectId, containerContentId, e.target.value);
  });

  const booking = bookings.find(b=>b.id===selectedId);
  const pkg = PACKAGES.find(p=>p.id===booking.packageId);
  const stayHotels = PARTNER_HOTELS.filter(h => (pkg.hotelNames||[]).includes(h.name));

  const stepsHtml = TRACK_STEPS.map((s,i)=>{
    const cls = i < booking.progressStep ? "done" : (i === booking.progressStep ? "current" : "");
    const icon = i < booking.progressStep ? "✓" : (i+1);
    return `<div class="step ${cls}"><div class="dot">${icon}</div><span>${s}</span></div>`;
  }).join("");

  const startDate = new Date(booking.date);
  const itinHtml = pkg.itinerary.map((d,i)=>{
    const dayDate = new Date(startDate); dayDate.setDate(startDate.getDate()+i);
    const dateStr = dayDate.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
    const isDone = booking.progressStep >= 4 || (booking.progressStep===3 && i===0);
    return `
      <div class="itin-item ${isDone?'done':''}">
        <div class="dchk">${isDone?'✓':(i+1)}</div>
        <div>
          <span class="day-date">DAY ${i+1} • ${dateStr}</span>
          <h5>${d.title}</h5>
          <p>${d.desc}</p>
        </div>
      </div>`;
  }).join("");

  const hotelCardsHtml = stayHotels.length ? `
    <h4 style="margin-bottom:16px;">${stayHotels.length>1 ? "Where You'll Stay" : "Your Hotel"}</h4>
    <div class="stay-hotel-grid">
      ${stayHotels.map(h=>`
        <div class="stay-hotel-card">
          <img src="${h.image}" alt="${h.name}" loading="lazy">
          <div class="shc-body">
            <h5>${h.name}</h5>
            <div class="shc-loc">📍 ${h.location}</div>
            <div class="shc-stars">${"★".repeat(h.stars)}${"☆".repeat(5-h.stars)}</div>
          </div>
        </div>`).join("")}
    </div>` : "";

  content.innerHTML = `
    <div class="steps">${stepsHtml}</div>
    <div class="track-summary">
      <div class="track-card">
        <h4>Booking Details</h4>
        <div class="kv"><span>Package</span><b>${pkg.name}</b></div>
        <div class="kv"><span>Start Date</span><b>${booking.date}</b></div>
        <div class="kv"><span>Duration</span><b>${pkg.days} Days / ${pkg.nights} Nights</b></div>
        <div class="kv"><span>Travelers</span><b>${booking.travelers}</b></div>
        <div class="kv"><span>Hotel</span><b>${pkg.hotel.split("—")[0].split("(")[0]}</b></div>
        <div class="kv"><span>Total Paid</span><b>${moneyFmt(booking.total)}</b></div>
        <div class="kv" style="border-bottom:none;"><span>Status</span><b style="color:var(--teal-700);">${booking.paid ? 'Fully Paid' : 'Awaiting Payment'}</b></div>
      </div>
      <div class="track-card">
        <h4>What's Next</h4>
        <p style="margin-bottom:14px;">${progressMessage(booking.progressStep)}</p>
        ${booking.progressStep < 4 ? `<div style="text-align:center;color:var(--teal-700);font-size:.85rem;">Our team updates this status as your trip progresses.</div>` : `<div style="text-align:center;color:var(--teal-700);font-weight:600;">🎉 Trip Completed</div>`}
      </div>
    </div>
    ${hotelCardsHtml}
    <h4 style="margin-bottom:16px;margin-top:30px;">Full Trip Itinerary</h4>
    <div class="itin-list">${itinHtml}</div>
  `;
}

function progressMessage(step){
  const msgs = [
    "Your booking is confirmed. Our team is arranging your accommodation and transfers.",
    "Payment received in full. We're now preparing your travel documents.",
    "All arrangements are complete — hotel and transfer vouchers are ready.",
    "You're on holiday! Enjoy every day of your Zanzibar itinerary.",
    "Your trip is complete. Thank you for traveling with Fantasy Zanzibar Safaris!"
  ];
  return msgs[step] || msgs[0];
}

/* ---------------------------------------------------------
   9. ADMIN STATS HELPERS (pure functions — no storage access;
      the raw data now comes from /api/admin-data)
--------------------------------------------------------- */
function computeAdminStats(bookings, users){
  const totalRevenue = bookings.reduce((sum,b)=>sum+b.total,0);
  const totalTravelers = bookings.reduce((sum,b)=>sum+b.travelers,0);
  const upcoming = bookings.filter(b=>b.progressStep < 4).length;
  const completed = bookings.filter(b=>b.progressStep >= 4).length;
  return {
    totalBookings: bookings.length,
    totalRevenue, totalTravelers, upcoming, completed,
    totalUsers: users.length
  };
}

function computePackagePopularity(bookings){
  const counts = {};
  PACKAGES.forEach(p=>counts[p.id]=0);
  bookings.forEach(b=>{ if(counts[b.packageId]!==undefined) counts[b.packageId]++; });
  const max = Math.max(1, ...Object.values(counts));
  return PACKAGES.map(p=>({ pkg:p, count:counts[p.id], pct: Math.round((counts[p.id]/max)*100) }))
    .sort((a,b)=>b.count-a.count);
}

/* ---------------------------------------------------------
   10. INIT: shared bits every page runs on load
--------------------------------------------------------- */
async function initShared(){
  await loadSession();
  updateAuthUI();
}
