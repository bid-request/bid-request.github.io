// Default values
const defaultData = {
    // Impression Object
    "imp-id": "1",              // Impression ID
    "imp-bidfloor": 0.1,        // Default bid floor price
    "imp-bidfloorcur": "USD",   // Default bid floor currency
    "imp-displaymanager": "supercool sdk", // Default display manager
    "imp-displaymanagerver": "1.1", // Default display manager version
    "imp-instl": 1,             // Default instl
    "imp-tagid": "12345",       // Default tag ID
    "imp-clickbrowser": 1,      // Default click browser
    "imp-secure": 1,            // Default secure
    "imp-exp": 3600,            // Default expiration
    "imp-iframebuster": ["vendor1.com", "vendor2.com"],      // Default iframebuster
    "imp-ext": {},              // Default ext

    // Impression Banner Object
    "imp-banner-w": 300,        // Default banner width
    "imp-banner-h": 250,        // Default banner height
    "imp-banner-wmax": 600,     // Default banner max width
    "imp-banner-hmax": 600,     // Default banner max height
    "imp-banner-wmin": 320,     // Default banner min width
    "imp-banner-hmin": 50,      // Default banner min height
    "imp-banner-pos": 1,        // Default banner position
    "imp-banner-api": [1, 2, 3, 4, 5, 6],    // Default banner API
    "imp-banner-mimes": ["image/gif", "image/jpeg", "image/png"],  // Default banner MIME types
    "imp-banner-topframe": 0,   // Default banner top frame
    "imp-banner-expdir": [1, 2, 3],   // Default banner expdir
    "imp-banner-battr": [10, 11],   // Default banner battr
    "imp-banner-btype": [3],   // Default banner btype
    "imp-banner-id": "12345",   // Default banner ID
    "imp-banner-vcm": 0,   // Default banner vcm
    "imp-banner-ext": {},   // Default banner ext

    // Impression Banner Format Object
    "imp-banner-format-w": 300,        // Default banner format width
    "imp-banner-format-h": 250,        // Default banner format height
    "imp-banner-format-wratio": 3,     // Default banner format width ratio
    "imp-banner-format-hratio": 2,     // Default banner format height ratio
    "imp-banner-format-wmin": 100,     // Default banner format min width
    "imp-banner-format-ext": {},       // Default banner format ext

    // Impression Metrics Object
    "imp-metric-type": "cpm",      // Default metrics type
    "imp-metric-value": 1.5,      // Default metrics value
    "imp-metric-vendor": "openrtb.com",  // Default metrics vendor

    // Impression Video Object
    "imp-video-mimes": ["video/mp4", "video/x-flv", "video/x-ms-wmv"],    // Default video MIME types
    "imp-video-minduration": 5,             // Default video min duration
    "imp-video-maxduration": 60,            // Default video max duration
    "imp-video-protocols": [1, 2, 3],     // Default video protocols
    "imp-video-protocol": 1,                // Default video protocol
    "imp-video-w": 640,                     // Default video width
    "imp-video-h": 480,                     // Default video height
    "imp-video-startdelay": 0,              // Default video start delay
    "imp-video-placement": 1,                // Default video placement
    "imp-video-linearity": 1,               // Default video linearity
    "imp-video-skip": 0,                    // Default video skip
    "imp-video-skipmin": 0,                // Default video skip min
    "imp-video-skipafter": 0,               // Default video skip after
    "imp-video-sequence": 1,                // Default video sequence
    "imp-video-battr": [1, 2],            // Default video battr
    "imp-video-maxextensions": 0,           // Default video max extensions
    "imp-video-minbitrate": 300,              // Default video min bitrate
    "imp-video-maxbitrate": 1500,              // Default video max bitrate
    "imp-video-boxingallowed": 1,           // Default video boxing allowed
    "imp-video-playbackmethod": [1],          // Default video playback method
    "imp-video-playbackend": 1,          // Default video play backend
    "imp-video-delivery": [1],            // Default video delivery
    "imp-video-api": [1, 2],              // Default video API
    "imp-video-btype": [1],               // Default video btype
    "imp-video-pos": 1,                     // Default video position
    "imp-video-ext": {},                   // Default video ext

    // Impression Audio Object
    "imp-audio-mimes": ["audio/mp3", "audio/mp4"],  // Default audio MIME types
    "imp-audio-minduration": 5,             // Default audio min duration
    "imp-audio-maxduration": 60,            // Default audio max duration
    "imp-audio-protocols": [1, 2, 3],     // Default audio protocols
    "imp-audio-startdelay": 0,              // Default audio start delay
    "imp-audio-sequence": 1,                // Default audio sequence
    "imp-audio-maxextended": 0,             // Default audio max extended
    "imp-audio-minbitrate": 128,              // Default audio min bitrate
    "imp-audio-maxbitrate": 3200,              // Default audio max bitrate
    "imp-audio-delivery": [1],            // Default audio delivery
    "imp-audio-battr": [1, 2],            // Default audio battr
    "imp-audio-api": [1, 2],              // Default audio API
    "imp-audio-maxseq": 1,                 // Default audio max sequence
    "imp-audio-feed": 1,                   // Default audio feed
    "imp-audio-stitched": 0,               // Default audio stitched
    "imp-audio-nvol": 0,                   // Default audio nvol
    "imp-audio-ext": {},                   // Default audio ext
    // Add more impression attributes as needed

    // Site Object
    "site-id": "12345",         // Site ID
    "site-name": "OpenRTB",   // Site name
    "site-domain": "openrtb.com", // Site domain
    "site-cat": ["IAB3-1"], // Site category
    "site-sectioncat": ["IAB3-1"], // Site section category
    "site-pagecat": ["IAB3-1"], // Site page category
    "site-page": "openrtb.com/home",       // Site page
    "site-ref": "https://openrtb.com", // Site ref
    "site-search": "openrtb",          // Site search
    "site-mobile": 0,          // Site mobile
    "site-privacypolicy": 1,   // Site privacy policy
    "site-keywords": ["openrtb", "advertising"], // Site keywords
    "site-ext": {},            // Site ext
    // Add more site attributes as needed

    // Content Object
    "site-content-id": "1234567",
    "site-content-episode": 1,
    "site-content-title": "Mordern Family - Season 1 Episode 1",
    "site-content-series": "Mondern Family",
    "site-content-season": "Season 1",
    "site-content-artist": "Ty burrell",
    "site-content-genre": "comedy",
    "site-content-album": "Original Soundtrack",
    "site-content-isrc": "1234567890",
    "site-content-url": "https://abc.com/",
    "site-content-cat": ["IAB1-7"],
    "site-content-prodq": 1,
    "site-content-videoquality": 1,
    "site-content-context": 1,
    "site-content-contentrating": "MPAA",
    "site-content-userrating": "Great",
    "site-content-keywords": "Mordern Family",
    "site-content-livestream": 0,
    "site-content-sourcerelationship": 0,
    "site-content-len": 1800,
    "site-content-language": "en",
    "site-content-embeddable": 0,
    "site-context-ext": {},
    
    "app-content-id": "1234567",
    "app-content-episode": 1,
    "app-content-title": "Mordern Family - Season 1 Episode 1",
    "app-content-series": "Mondern Family",
    "app-content-season": "Season 1",
    "app-content-artist": "Ty burrell",
    "app-content-genre": "comedy",
    "app-content-album": "Original Soundtrack",
    "app-content-isrc": "1234567890",
    "app-content-url": "https://abc.com/",
    "app-content-cat": ["IAB1-7"],
    "app-content-prodq": 1,
    "app-content-videoquality": 1,
    "app-content-context": 1,
    "app-content-contentrating": "MPAA",
    "app-content-userrating": "Great",
    "app-content-keywords": "Mordern Family",
    "app-content-livestream": 0,
    "app-content-sourcerelationship": 0,
    "app-content-len": 1800,
    "app-content-language": "en",
    "app-content-embeddable": 0,
    "app-context-ext": {},

    // Publisher Object
    "site-publisher-id": "12345",         // Publisher ID
    "site-publisher-name": "ABC.com",   // Publisher name
    "site-publisher-domain": "abc.com", // Publisher domain
    "site-publisher-cat": ["IAB1-7"], // Publisher category
    "site-publisher-ext": {}, // Publisher ext

    "app-publisher-id": "12345",         // Publisher ID
    "app-publisher-name": "ABC.com",   // Publisher name
    "app-publisher-domain": "abc.com", // Publisher domain
    "app-publisher-cat": ["IAB1-7"], // Publisher category
    "app-publisher-ext": {}, // Publisher ext
    // Add more publisher attributes as needed

    // App Object
    "app-id": "54321",          // App ID
    "app-name": "OpenRTB App", // App name
    "app-bundle": "com.openrtb.app", // App bundle (for mobile apps)
    "app-domain": "openrtb.com", // App domain
    "app-storeurl": "https://openrtb.com", // App store URL
    "app-cat": ["IAB3-1"], // App category
    "app-sectioncat": ["IAB3-1"], // App section category
    "app-pagecat": ["IAB3-1"], // App page category
    "app-ver": "1.2",          // App version
    "app-privacypolicy": 1,    // App privacy policy
    "app-paid": 0,
    "app-keywords": ["openrtb", "advertising"], // App keywords
    "app-ext": {}, // App ext
    // Add more app attributes as needed

    // Device Object
    "device-ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/124.0.2478.89 Version/15.0 Mobile/15E148 Safari/604.1",  // User agent
    "ddevice-dnt": 0,           // Do not track
    "device-lmt": 0,            // Limited ads
    "device-ip": "1.2.3.4",     // IP address
    "device-ipv6": "5be8:dde9:7f0b:d5a7:bd11:b3be:9c67:573a", // IPv6 address
    "device-devicetype": 1,           // Device type (1 = mobile, 2 = tablet, 3 = desktop)
    "device-make": "Apple",    // Device make
    "device-os": "iOS",         // Operating system
    "device-model": "iPhone",   // Device model
    "device-osv": "15.8",       // Operating system version
    "device-hwv": "5S",       // Hardware version
    "device-h": 320,            // Screen height
    "device-w": 480,            // Screen width
    "device-ppi": 0,            // Pixel ratio
    "device-pxratio": 0,        // Pixel ratio
    "device-js": 1,             // Javascript enabled
    "device-geofetch": 0,          // Flash enabled
    "device-flashver": "237.84.2.178", // Flash version
    "device-language": "en",    // Language
    "device-carrier": "AT&T",   // Carrier
    "device-mccmnc": "310-005",  // Mobile country code and mobile network code
    "device-connectiontype": 1, // Connection type
    "device-ifa": "12345678901234567890", // IFA
    "device-didsha1": "12345678901234567890", // Device ID
    "device-didmd5": "12345678901234567890", // Device ID
    "device-dpidsha1": "12345678901234567890", // Device ID
    "device-dpidmd5": "12345678901234567890", // Device ID
    "device-macsha1": "12345678901234567890", // Device ID
    "device-macmd5": "12345678901234567890", // Device ID
    "device-ext": {}, // Device ext
    // Add more device attributes as needed

    // Device.Geo Object
    "device-geo-lat": 35.012345, // Latitude
    "device-geo-lon": -115.12345, // Longitude
    "device-geo-type": 1,      // Type
    "device-geo-accuracy": 0,  // Accuracy
    "device-geo-lastfix": 0,   // Last fix
    "device-geo-ipservice": 0, // IP service
    "device-geo-country": "USA", // Country
    "device-geo-region": "CA", // Region
    "device-geo-regionfips104": "AT-1", // Region FIPS 104
    "device-geo-metro": "803", // Metro
    "device-geo-city": "Los Ageles", // City
    "device-geo-zip": "90049", // Zip
    "device-geo-utcoffset": -7, // UTC offset
    "device-geo-ext": {}, // Geo ext

    // User Object
    "user-id": "55816b39711f9b5acf3b90e313ed29e51665623f",    // User ID
    "user-buyeruid": "545678765467876567898765678987654", // Buyer ID
    "user-yob": 1980,           // Year of birth
    "user-gender": "M",         // User gender
    "user-keywords": "sports",    // User keywords
    "user-customdata": "randomdata",   // User custom data
    "user-ext": {}, // User geo

    // User.Geo Object
    "user-geo-lat": 35.012345, // Latitude
    "user-geo-lon": -115.12345, // Longitude
    "user-geo-lat": 35.012345, // Latitude
    "user-geo-lon": -115.12345, // Longitude
    "user-geo-type": 1,      // Type
    "user-geo-accuracy": 0,  // Accuracy
    "user-geo-lastfix": 0,   // Last fix
    "user-geo-ipservice": 0, // IP service
    "user-geo-country": "USA", // Country
    "user-geo-region": "CA", // Region
    "user-geo-regionfips104": "AT-1", // Region FIPS 104
    "user-geo-metro": "803", // Metro
    "user-geo-city": "Los Ageles", // City
    "user-geo-zip": "90049", // Zip
    "user-geo-utcoffset": -7, // UTC offset
    "user-geo-ext": {}, // Geo ext
    // Add more user attributes as needed

    // Bid Request Object
    "id": "80ce30c53c16e6ede735f123ef6e32361bfc7b22",     // Bid request ID
    "cur": ["USD"],             // Currency
    "bcat": ["IAB1-1"],         // Blocked categories
    "badv": ["apple.com", "go-text.me", "heywire.com"], // Blocked advertisers
    "bseat": ["seat3", "seat4"], // Blocked seats
    "bapp": ["app1", "app2"],   // Blocked apps
    "at": 1,                    // Auction type
    "tmax": 5000,               // Max timeout
    "wseat": ["seat1", "seat2"], // Whitelisted seats
    "allimps": 0,            // Enable all impressions
    "test": 0,                  // Test mode
    "ext": {},                  // Bid request ext
    // Add more bid request attributes as needed

    // PMP Object
    "imp-pmp-private-auction": 1, // Private auction
    "imp-pmp-private-auction-deal-id": "openrtb-test-deal", // Deal ID
    "imp-pmp-private-auction-deal-bidfloor": 0.01, // Deal bid floor
    "imp-pmp-private-auction-deal-bidfloorcur": "USD", // Deal bid floor currency
    "imp-pmp-private-auction-deal-at": 1, // Deal at
    "imp-pmp-private-auction-deal-wseat": ['seat1', 'seat2'], // Deal whitelisted seats
    "imp-pmp-private-auction-deal-wadomain": ['www.happybidder.com', 'www.happybuyer.com'], // Deal whitelisted ad servers
    "imp-pmp-private-auction-deal-ext": {}, // Deal ext

    // Source Object
    "source-fd": 0,             // Exchange
    "source-tid": "sic-3kdpacmpdsads1o9fjd8espe",
    "source-pchain": "pchain-3kdpacmpdsads1o9fjd8espe",
    "source-ext": {},

    // Regs Object
    "regs-coppa": 0,           // COPPA consent
    "regs-ext": {},

    // GDPR-related attributes
    "gdpr": 0,                  // GDPR consent status (0 = no consent, 1 = consent)
    "gdpr-consent": "BOEFEAyOEFEAyAHABDENAI4AAAB9vABAASA", // GDPR consent string
    // Add more GDPR attributes as needed

    // Additional Objects and Attributes
    // Add more attributes for video, native, PMP (private marketplace), etc.
};
// User input
const inputData = {}

class BidRequest {
    constructor(id, imp, site, app, device, user, test, at, tmax, wseat, allimps, cur, bcat, badv, regs) {
        this.id = id;
        this.imp = imp; // Array of Imp objects
        this.site = site; // Site object
        this.app = app; // App object
        this.device = device; // Device object
        this.user = user; // User object
        this.test = test;
        this.at = at;
        this.tmax = tmax;
        this.wseat = wseat;
        this.allimps = allimps;
        this.cur = cur;
        this.bcat = bcat;
        this.badv = badv;
        this.regs = regs; // Regs object
    }
}

class Imp {
    constructor(id, banner, video, native, pmp, displaymanager, displaymanagerver, instl, tagid, bidfloor, bidfloorcur, clickbrowser, secure, iframebuster, exp, metric, ext) {
        this.id = id;
        this.banner = banner; // Banner object
        this.video = video; // Video object
        this.native = native; // Native object
        this.pmp = pmp; // PMP object
        this.displaymanager = displaymanager; // Display manager
        this.displaymanagerver = displaymanagerver; // Display manager version
        this.instl = instl; // Instl
        this.tagid = tagid; // Tag ID
        this.bidfloor = bidfloor; // Bid floor
        this.bidfloorcur = bidfloorcur; // Bid floor currency
        this.clickbrowser = clickbrowser; // Click browser
        this.secure = secure; // Secure
        this.iframebuster = iframebuster; // Iframebuster
        this.exp = exp; // Exp
        this.metric = metric;
        this.ext = ext; // Ext
    }
}

class Metric {
    constructor(type, value, vendor, ext) {
        this.type = type;
        this.value = value;
        this.vendor = vendor;
        this.ext = ext;
    }
}

class Deal {
    constructor(id, bidfloor, bidfloorcur, at, wseats, wadomains, ext) {
        this.id = id;
        this.bidfloor = bidfloor;
        this.bidfloorcur = bidfloorcur;
        this.at = at;
        this.wseats = wseats;
        this.wadomains = wadomains;
        this.ext = ext;
    }
}

class Pmp {
    constructor(private_auction, deals, ext) {
        this.private_auction = private_auction;
        this.deals = deals;
        this.ext = ext;
    }
}

class Banner {
    constructor(
        format,
        w,
        h,
        wmax,
        hmax,
        wmin,
        hmin,
        btype,
        battr,
        pos,
        mimes,
        topframe,
        expdir,
        api,
        id,
        vcm,
        ext
    ) {
        this.format = format;
        this.w = w;
        this.h = h;
        this.wmax = wmax;
        this.hmax = hmax;
        this.wmin = wmin;
        this.hmin = hmin;
        this.btype = btype;
        this.battr = battr;
        this.pos = pos;
        this.mimes = mimes;
        this.topframe = topframe;
        this.expdir = expdir;
        this.api = api;
        this.id = id;
        this.vcm = vcm; 
        this.ext = ext;
    }
}

class Format {
    constructor(w, h, wratio, hratio, wmin, ext) {
        this.w = w;
        this.h = h;
        this.wratio = wratio;
        this.hratio = hratio;
        this.wmin = wmin;
        this.ext = ext;
    }
}

class Video {
    constructor(
        mimes,
        minduration,
        maxduration,
        protocols,
        protocol,
        w,
        h,
        wmin,
        hmin,
        wmax,
        hmax,
        battr,
        maxbitrate,
        minbitrate,
        boxingallowed,
        playbackmethod,
        delivery,
        pos,
        companionad,
        api,
        companiontype,
        ext
    ) {
        this.mimes = mimes;
        this.minduration = minduration;
        this.maxduration = maxduration;
        this.protocols = protocols;
        this.protocol = protocol;
        this.w = w;
        this.h = h;
        this.wmin = wmin;
        this.hmin = hmin;
        this.wmax = wmax;
        this.hmax = hmax;
        this.battr = battr;
        this.maxbitrate = maxbitrate;
        this.minbitrate = minbitrate;
        this.boxingallowed = boxingallowed;
        this.playbackmethod = playbackmethod;
        this.delivery = delivery;
        this.pos = pos;
        this.companionad = companionad;
        this.companiontype = companiontype;
        this.api = api;
        this.ext = ext;
    }
}

class Audio {
    constructor(
        mimes,
        minduration,
        maxduration,
        protocols,
        startdelay,
        sequence,
        battr,
        maxextended,
        minbitrate,
        maxbitrate,
        delivery,
        companionad,
        api,
        companiontype,
        maxseq,
        feed,
        stitched,
        nvol,
        ext
    ) {
        this.mimes = mimes;
        this.minduration = minduration;
        this.maxduration = maxduration;
        this.protocols = protocols;
        this.startdelay = startdelay;
        this.sequence = sequence;
        this.battr = battr;
        this.maxextended = maxextended;
        this.minbitrate = minbitrate;
        this.maxbitrate = maxbitrate;
        this.delivery = delivery;
        this.companionad = companionad;
        this.api = api;
        this.companiontype = companiontype;
        this.maxseq = maxseq;
        this.feed = feed;
        this.stitched = stitched;
        this.nvol = nvol;
        this.ext = ext;
    }
}

class Site {
    constructor(id, name, domain, cat, sectioncat, pagecat, page, ref, search, mobile, privacypolicy, publisher, content, keywords) {
        this.id = id;
        this.name = name;
        this.domain = domain;
        this.cat = cat;
        this.sectioncat = sectioncat;
        this.pagecat = pagecat;
        this.page = page;
        this.ref = ref;
        this.search = search;
        this.mobile = mobile;
        this.privacypolicy = privacypolicy;
        this.publisher = publisher; // Publisher object
        this.content = content; // Content object
        this.keywords = keywords;
    }
}

class App {
    constructor(
        id,
        name,
        bundle,
        domain,
        storeurl,
        cat,
        sectioncat,
        pagecat,
        ver,
        privacypolicy,
        paid,
        publisher,
        content,
        keywords,
        ext
    ) {
        this.id = id;
        this.name = name;
        this.bundle = bundle;
        this.domain = domain;
        this.storeurl = storeurl;
        this.cat = cat;
        this.sectioncat = sectioncat;
        this.pagecat = pagecat;
        this.ver = ver;
        this.privacypolicy = privacypolicy;
        this.paid = paid;
        this.publisher = publisher; // Publisher object
        this.content = content; // Content object
        this.keywords = keywords;
        this.ext = ext;
    }
}

class Publisher {
    constructor(id, name, domain, cat, ext) {
        this.id = id;
        this.name = name;
        this.domain = domain;
        this.cat = cat;
        this.ext = ext;
    }
}

class Content {
    constructor() {
        this.id = null;
        this.episode = null;
        this.title = null;
        this.series = null;
        this.season = null;
        this.artist = null;
        this.genre = null;
        this.album = null;
        this.isrc = null;
        this.producer = null;
        this.url = null;
        this.cat = null;
        this.videoquality = null;
        this.context = null;
        this.contentrating = null;
        this.userrating = null;
        this.keywords = null;
        this.livestream = null;
        this.sourcerelationship = null;
        this.len = null;
        this.language = null;
        this.embeddable = null;
        this.data = null;
        this.ext = null;
    }
}

class Device {
    constructor(ua, geo, dnt, lmt, ip, ipv6, devicetype, make, model, os, osv, hwv, h, w, ppi, pxratio, js, flashver, language, carrier, connectiontype, ifa, didsha1, didmd5, dpidsha1, dpidmd5, macsha1, macmd5) {
        this.ua = ua;
        this.geo = geo; // Geo object
        this.dnt = dnt;
        this.lmt = lmt;
        this.ip = ip;
        this.ipv6 = ipv6;
        this.devicetype = devicetype;
        this.make = make;
        this.model = model;
        this.os = os;
        this.osv = osv;
        this.hwv = hwv;
        this.h = h;
        this.w = w;
        this.ppi = ppi;
        this.pxratio = pxratio;
        this.js = js;
        this.flashver = flashver;
        this.language = language;
        this.carrier = carrier;
        this.connectiontype = connectiontype;
        this.ifa = ifa;
        this.didsha1 = didsha1;
        this.didmd5 = didmd5;
        this.dpidsha1 = dpidsha1;
        this.dpidmd5 = dpidmd5;
        this.macsha1 = macsha1;
        this.macmd5 = macmd5;
    }
}

class User {
    constructor(id, buyeruid, yob, gender, keywords, customdata, geo, data) {
        this.id = id;
        this.buyeruid = buyeruid;
        this.yob = yob;
        this.gender = gender;
        this.keywords = keywords;
        this.customdata = customdata;
        this.geo = geo; // Geo object
        this.data = data; // Array of Data objects
    }
}

class Geo {
    constructor(lat, lon, type, accuracy, lastfix, ipservice, country, region, regionfips104, metro, city, zip, utcoffset) {
        this.lat = lat;
        this.lon = lon;
        this.type = type;
        this.accuracy = accuracy;
        this.lastfix = lastfix;
        this.ipservice = ipservice;
        this.country = country;
        this.region = region;
        this.regionfips104 = regionfips104;
        this.metro = metro;
        this.city = city;
        this.zip = zip;
        this.utcoffset = utcoffset;
    }
}

class Source {
    constructor() {
        this.fd = null;
        this.tid = null;
        this.pchain = null;
        this.ext = null;
    }
}

class Regs {
    constructor() {
        this.coppa = null;
        this.ext = null;
    }   
}

function createImpObject() {
    // Imp is required.
    const imps = [new Imp('1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)]
    const imp = imps[0]
    
    // Basic Attributes
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('imp') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                imp[field] = inputData[key];
            }
        }

        // metric
        if (key.startsWith('imp-metric')) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                imp.metric = [new Metric()];
                const [, , field] = key.split('-');
                imp.metric[0][field] = inputData[key];
            }
        }

        // pmp
        if (document.getElementById('imp-pmp').checked) {
            imp.pmp = new Pmp(true, null, null);
            imp.pmp.private_auction = document.getElementById('imp-pmp-private-auction').checked ? 1 : 0;
            imp.pmp.deals = [new Deal()];
            deal = imp.pmp.deals[0]
            Object.keys(inputData).forEach(key => {
                if (key.startsWith('imp-pmp-private-auction-deal-')) {
                    const element = document.getElementById(key);
                    if (element && element.type === 'checkbox' && element.checked) {
                        const [ ,field] = key.split('deal-');
                        deal[field] = inputData[key];
                    }
                }
            })
        }
    });

    // Banner/Video/Audio Attributes
    const selectedType = document.getElementById('impTypeSelect').value;
    if (!selectedType) {
        return imps;
    }
    switch (selectedType) {
        case 'banner':
            imp.banner = new Banner();
            Object.keys(inputData).forEach(key => {
                if (key.startsWith('imp-banner') && key.split('-').length === 3) {
                    const element = document.getElementById(key);
                    if (element && element.type === 'checkbox' && element.checked) {
                        const [, second, third] = key.split('-');
                        imp.banner[third] = inputData[key];
                    }
                }
                if (key.startsWith('imp-banner-format')) {
                    const element = document.getElementById(key);
                    if (element && element.type === 'checkbox' && element.checked) {
                        if (!imp.banner.format) {
                            imp.banner.format = [];
                            imp.banner.format[0] = new Format();
                        }
                        const [, , , field] = key.split('-');
                        imp.banner.format[0][field] = inputData[key];
                    }
                }
            });
            break;
        case 'video':
            imp.video = new Video();
            Object.keys(inputData).forEach(key => {
                if (key.startsWith('imp-video') && key.split('-').length === 3) {
                    const element = document.getElementById(key);
                    if (element && element.type === 'checkbox' && element.checked) {
                        const [, second, third] = key.split('-');
                        imp.video[third] = inputData[key];
                    }
                }
            })
            break;
        case 'audio':
            imp.audio = new Audio();
            Object.keys(inputData).forEach(key => {
                if (key.startsWith('imp-audio') && key.split('-').length === 3) {
                    const element = document.getElementById(key);
                    if (element && element.type === 'checkbox' && element.checked) {
                        const [, second, third] = key.split('-');
                        imp.audio[third] = inputData[key];
                    }
                }
            })
            break;
        default:
            break;
    }

    return imps;
}

function createSiteObject() {
    const site = new Site();
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('site') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                site[field] = inputData[key];
            }
        }
    })

    // site.publisher
    if (document.getElementById('site-publisher').checked) {
        site.publisher = new Publisher();
        Object.keys(inputData).forEach(key => {
            if (key.startsWith('site-publisher-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('pubslisher-');
                    site.publisher[field] = inputData[key];
                }
            }
        })
    }

    // site.content
    if (document.getElementById('site-content').checked) {
        site.content = new Content();
        Object.keys(inputData).forEach(key => {
            if (key.startsWith('site-content-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('content-');
                    site.content[field] = inputData[key];
                }
            }
        })
    }
    return site;
}

function createAppObject() {
    const app = new App();
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('app') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                app[field] = inputData[key];
            }
        }
    })

    // app.publisher
    if (document.getElementById('app-publisher').checked) {
        app.publisher = new Publisher();
        Object.keys(inputData).forEach(key => {
            if (key.startsWith('app-publisher-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('publisher-');
                    app.publisher[field] = inputData[key];
                }
            }
        })
    }
    
    // app.content
    if (document.getElementById('app-content').checked) {
        app.content = new Content();
        Object.keys(inputData).forEach(key => {
            if (key.startsWith('app-content-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('content-');
                    app.content[field] = inputData[key];
                }
            }
        })
    }
    return app;
}

function createDeviceObject() {
    const device = new Device();
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('device') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                device[field] = inputData[key];
            }
        }

        // geo
        if (key.startsWith('device-geo')) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                if (!device.geo) {
                    device.geo = new Geo();
                }
                const [, ,field] = key.split('-');
                device.geo[field] = inputData[key];
            }
        }
    })
    return device;
}

function createUserObject() {
    const user = new User();
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('user') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                user[field] = inputData[key];
            }
        }
        // geo
        if (key.startsWith('user-geo')) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                if (!user.geo) {
                    user.geo = new Geo();
                }
                const [, ,field] = key.split('-');
                user.geo[field] = inputData[key];
            }
        }
    })
    return user;
}

function createSourceObject() {
    const source = new Source();
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('source') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                source[field] = inputData[key];
            }
        }
    })
    return source;
}

function createRegsObject() {
    const regs = new Regs();
    Object.keys(inputData).forEach(key => {
        if (key.startsWith('regs') && key.split('-').length === 2) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-');
                regs[field] = inputData[key];
            }
        }
    })
    return regs;
}

function createBidRequest() {
    // valid Imp
    const impTypeSelect = document.getElementById('impTypeSelect');
    if (!['banner', 'video', 'audio'].includes(impTypeSelect.value)) {
        impTypeSelect.focus();
        alert('Please select a valid imp type');
        return
    }

    // valid App/Site
    const selectedApp = document.getElementById('app').checked;
    const selectedSite = document.getElementById('site').checked;
    
    if (selectedApp && selectedSite) {
        document.getElementById('site').focus();
        alert('Only one of `App` or `Site` element can be selected');
        return;
    }
    
    if (!selectedApp && !selectedSite) {
        document.getElementById('site').focus();
        alert('One of `App` or `Site` element must be selected');
        return;
    }
    
    const includeSite = document.getElementById('site').checked;
    const includeApp = document.getElementById('app').checked;
    const includeDevice = document.getElementById('device').checked;
    const includeUser = document.getElementById('user').checked;
    const includeRegs = document.getElementById('regs').checked;
    const includeSource = document.getElementById('source').checked;

    // Imp is required.
    const imp = createImpObject();

    const site = includeSite ? createSiteObject() : null;
    const app = includeApp ? createAppObject() : null;
    const device = includeDevice ? createDeviceObject() : null;
    const user = includeUser ? createUserObject() : null;
    const regs = includeRegs ? createRegsObject() : null;
    const source = includeSource ? createSourceObject() : null;

    const bidRequest = new BidRequest();
    bidRequest.imp = imp;
    bidRequest.site = site;
    bidRequest.app = app;
    bidRequest.device = device;
    bidRequest.user = user;
    bidRequest.regs = regs;
    bidRequest.source = source;

    // Apply top level attributes
    Object.keys(inputData).forEach(key => {
        if (!key.includes('-')) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                bidRequest[key] = inputData[key];
            }
        }
    })

    // Populate
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').value = JSON.stringify(bidRequest, (key, value) => value === null ? undefined : value, 2);
    document.getElementById('output').style.height = 'auto';
    document.getElementById('output').style.height = document.getElementById('output').scrollHeight + 'px';
    document.getElementById('output').style.width = document.getElementById('bidRequestForm').offsetWidth + 'px';
    document.getElementById('output').focus();
    navigator.clipboard.writeText(JSON.stringify(bidRequest, (key, value) => value === null ? undefined : value, 2));
    
    const notice = document.createElement('div');
    notice.style.position = 'fixed';
    notice.style.top = '50%';
    notice.style.left = '50%';
    notice.style.transform = 'translate(-50%, -50%)';
    notice.style.zIndex = 9999;
    notice.style.padding = '10px';
    notice.style.borderRadius = '5px';
    notice.style.background = 'green';
    notice.style.color = '#fff';
    notice.style.opacity = 1;
    notice.style.transition = 'opacity 0.5s ease-out';
    notice.textContent = 'Bid Request Clipped!';
    document.body.appendChild(notice);
    setTimeout(function() {
        notice.style.opacity = 0;
        setTimeout(function() {
            document.body.removeChild(notice);
        }, 500);
    }, 2000);

    document.getElementById('output-json-prettify-button').style.display = 'block';
    
}
