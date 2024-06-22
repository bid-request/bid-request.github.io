// Default values
/*
    key: name for the key, a key can be matched to a input's id in the html file.
    value: an array of 4 elements: [type, required (bool), default value, OpenRTB description, predefined values]
*/
const defaultData = {
    // Bid Request Object
    "req-id": ["string", true, "96652i7d1g8w79545y0469e2qe81ib4zf3jevqxm", "string; required | Unique ID of the bid request, provided by the exchange"],
    "req-cur": ["string array", false, ["USD"], "string array | Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes. Recommended only if the exchange accepts multiple currencies."],
    "req-bcat": ["string array", false, ["IAB7-1", "IAB7-2"], "string array | Blocked advertiser categories using the IAB content categories."],
    "req-badv": ["string array", false, ["ford.com", "apple.com"], "string array | Block list of advertisers by their domains."],
    "req-bseat": ["string array", false, ["seat1", "seat2"], "string array | Block list of buyer seats (e.g., advertisers, agencies) restricted from bidding on this impression. IDs of seats and knowledge of the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori. At most, only one of wseat and bseat should be used in the same request. Omission of both implies no seat restrictions."],
    "req-bapp": ["string array", false, ["app1", "app2"], "string array | Block list of applications by their platform-specific exchange-independent application identifiers. On Android, these should be bundle or package names (e.g., com.foo.mygame). On iOS, these are numeric IDs."],
    "req-at": ["integer", false, 2, "integer | Auction type. 1 = First Price, 2 = Second Price Plus, Exchange-specific auction types can be defined using values greater than 500. "],
    "req-tmax": ["integer", false, 1000, "integer | Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout. This value supersedes any a priori guidance from the exchange."],
    "req-wseat": ["string array", false, ["seat1", "seat2"], "string array | White list of buyer seats (e.g., advertisers, agencies) allowed to bid on this impression. IDs of seats and knowledge of the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori. At most, only one of wseat and bseat should be used in the same request. Omission of both implies no seat restrictions."],
    "req-allimps": ["integer", false, 0, "integer; default 0 | Flag to indicate if Exchange can verify that the impressions offered represent all of the impressions available in context to support road-blocking."],
    "req-test": ["integer", false, 0, "integer; default 0 | Indicator of test mode in which auctions are not billable, where 0 = live mode, 1 = test mode"],
    "req-ext": [ , , {}, ],
    
    // Impression Object
    "req-imp-id": ["string", true, "1", "string; required | Unique ID of the impression, provided by the exchange"],
    "req-imp-bidfloor": ["float", false, 0.01, "float | Minimum bid for this impression expressed in CPM"],
    "req-imp-bidfloorcur": ["string", false, "USD", "string | Currency specified using ISO-4217 alpha codes. This may be different from bid currency returned by bidder if this is allowed by the exchange."],
    "req-imp-displaymanager": ["string", false, "Supercool SDK", "string | Name of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code by partner. Recommended for video and/or apps."],
    "req-imp-displaymanagerver": ["string", false, "1.0", "string | Version of ad mediation partner or SDK. Recommended for video and/or apps."],
    "req-imp-instl": ["integer", false, 1, "integer | 1 = the ad is interstitial or full screen, 0 = not interstitial."],
    "req-imp-tagid": ["string", false, "t39588", "string | Identifier for specific ad placement or ad tag that was used to initiate the auction."],
    "req-imp-clickbrowser": ["integer", false, 0, "integer; default 0 | Indicates the type of browser opened upon clicking the creative in an app, where false = embedded, true = native. Note that the Safari View Controller in iOS 9.x devices is considered a native browser for purposes of this attribute."],
    "req-imp-secure": ["integer", false, 0, "integer; default 0 | 0 = non-secure (HTTP), 1 = secure (HTTPS)."],
    "req-imp-exp": ["integer", false, 300, "integer | Advisory as to the number of seconds that may elapse between the auction and the actual impression."],
    "req-imp-iframebuster": ["string array", false, ["b1", "b2"], "string array | Array of exchange-specific names of supported iframe busters."],
    "req-imp-ext": [ , , {}, ],

    // Impression Banner Object
    "req-imp-banner-w": ["integer", false, 300, "integer | Width of banner in device independent pixels (DIPS)."],
    "req-imp-banner-h": ["integer", false, 250, "integer | Height of banner in device independent pixels (DIPS)."],
    "req-imp-banner-wmax": ["integer", false, 300, "integer; DEPRECATED | Maximum width of banner in device independent pixels (DIPS). Deprecated in favor of the `format` array"],
    "req-imp-banner-hmax": ["integer", false, 250, "integer; DEPRECATED | Maximum height of banner in device independent pixels (DIPS). Deprecated in favor of the `format` array"],
    "req-imp-banner-wmin": ["integer", false, 320, "integer; DEPRECATED | Minimum width of banner in device independent pixels (DIPS). Deprecated in favor of the `format` array"],
    "req-imp-banner-hmin": ["integer", false, 50, "integer; DEPRECATED | Minimum height of banner in device independent pixels (DIPS). Deprecated in favor of the `format` array"],
    "req-imp-banner-pos": ["integer", false, 1, "integer | Ad position on screen. Default is 1 (above the fold). Can be 0 (unknown) or 3 (below the fold)."],
    "req-imp-banner-api": ["integer array", false, [1, 2, 3, 4, 5, 6], "integer array; default [1, 2, 3, 4, 5, 6] | List of supported API frameworks for this impression. If an API is not explicitly listed, it is assumed not to be supported."],
    "req-imp-banner-mimes": ["string array", false, ["image/gif", "image/jpeg", "image/png"], "string array | Allowlist of content MIME types supported. Popular MIME types include, but are not limited to \"image/jpg\", \"image/gif\" and \"application/x-shockwave-flash\"."],
    "req-imp-banner-topframe": ["integer", false, 0, "integer | Specify if the banner is delivered in the top frame (true) or in an iframe (false). Default is 0 (false)."],
    "req-imp-banner-expdir": ["integer array", false, [1, 2, 3], "integer array; default [1, 2, 3] | Directions in which the banner may expand. Allowed values are: 1 - Right, 2 - Down, 3 - Left."],
    "req-imp-banner-battr": ["integer array", false, [10, 11], "integer array; default [10, 11] | Blocked creative attributes. Allowed values are: 10 - Expandable, 11 - In-banner video ads."],
    "req-imp-banner-btype": ["integer array", false, [3], "integer array; default [3] | Blocked banner ad types. Allowed values are: 3 - Expandable ads."],
    "req-imp-banner-id": ["string", false, "12345", "string | Unique identifier for this banner object. Recommended when Banner objects are used with a Video object (Section 3.2.4) to represent an array of companion ads. Values usually start at 1 and increase with each object; should be unique within an impression."],
    "req-imp-banner-vcm": ["integer", false, 0, "integer | Specifies the video minimum duration that the player must have played before the ad tag can be served. Default is 0 (no minimum)."],
    "req-imp-banner-ext": [ , , {}, ],

    // Impression Banner Format Object
    "req-imp-banner-format-w": ["integer", false, 300, "integer | Width of banner format in device independent pixels (DIPS)."],
    "req-imp-banner-format-h": ["integer", false, 250, "integer | Height of banner format in device independent pixels (DIPS)."],
    "req-imp-banner-format-wratio": ["integer", false, 3, "integer | Relative width when expressing banner format size as a ratio."],
    "req-imp-banner-format-hratio": ["integer", false, 2, "integer | Relative height when expressing banner format size as a ratio."],
    "req-imp-banner-format-wmin": ["integer", false, 100, "integer | Minimum width of banner format in device independent pixels (DIPS)."],
    "req-imp-banner-format-ext": [ , , {}, ],

    // Impression Metrics Object
    "req-imp-metric-type": ["string", true, "cpm", "string; required | Type of metric being presented using exchange curated string names which should be published to bidders a priori."],
    "req-imp-metric-value": ["float", true, 1.5, "float; required | Number representing the value of the metric. Probabilities must be in the range 0.0 - 1.0."],
    "req-imp-metric-vendor": ["string", false, "openrtb.com", "string; recommended | Source of the value using exchange curated string names which should be published to bidders a priori. If the exchange itself is the source versus a third party, 'EXCHANGE' is recommended."],
    "req-imp-metric-ext": [ , , {}, ],

    // Impression Video Object
    "req-imp-video-mimes": [ "string array", true, ["video/mp4", "video/x-flv", "video/x-ms-wmv"], "string array; required | List of supported video MIME types." ],
    "req-imp-video-minduration": [ "integer", false, 5, "integer | Minimum video ad duration in seconds." ],
    "req-imp-video-maxduration": [ "integer", false, 60, "integer | Maximum video ad duration in seconds." ],
    "req-imp-video-protocols": [ "integer array", false, [1, 2, 3], "integer array | Array of supported video bid response protocols." ],
    "req-imp-video-protocol": [ "integer", false, 1, "integer | Specifies the protocol of the delivered video (e.g., VAST 2.0, VAST 3.0, VAST 4.0, VAST 4.1, DAAST 1.0, MRAID 1.0, MRAID 2.0, MRAID 3.0)." ],
    "req-imp-video-w": [ "integer", false, 640, "integer | Width of the video player in device independent pixels (DIPS)." ],
    "req-imp-video-h": [ "integer", false, 480, "integer | Height of the video player in device independent pixels (DIPS)." ],
    "req-imp-video-startdelay": [ "integer", false, 0, "integer | Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements." ],
    "req-imp-video-placement": [ "integer", false, 1, "integer | Placement type for the impression." ],
    "req-imp-video-linearity": [ "integer", false, 1, "integer | Indicates if the impression must be linear, nonlinear, etc." ],
    "req-imp-video-skip": [ "integer", false, 0, "integer | Indicates if the player will allow the video to be skipped." ],
    "req-imp-video-skipmin": [ "integer", false, 0, "integer | Videos of total duration greater than this number of seconds can be skippable; only applicable if the ad is skippable." ],
    "req-imp-video-skipafter": [ "integer", false, 0, "integer | Number of seconds a video must play before skipping is enabled; only applicable if the ad is skippable." ],
    "req-imp-video-sequence": [ "integer", false, 1, "integer | If multiple ad impressions are offered in the same bid request, the sequence number will allow for the coordinated delivery of multiple creatives." ],
    "req-imp-video-battr": [ "integer array", false, [1, 2], "integer array | Blocked creative attributes." ],
    "req-imp-video-maxextensions": [ "integer", false, 0, "integer | Maximum extended video ad duration, if extension is allowed." ],
    "req-imp-video-minbitrate": [ "integer", false, 300, "integer | Minimum bit rate in Kbps." ],
    "req-imp-video-maxbitrate": [ "integer", false, 1500, "integer | Maximum bit rate in Kbps." ],
    "req-imp-video-boxingallowed": [ "integer", false, 1, "integer | Indicates if the player allows the video to be boxed." ],
    "req-imp-video-playbackmethod": [ "integer array", false, [1], "integer array | Array of supported playback methods." ],
    "req-imp-video-playbackend": [ "integer", false, 1, "integer | Specifies the playback backend of the delivered video." ],
    "req-imp-video-delivery": [ "integer array", false, [1], "integer array | Array of supported delivery methods." ],
    "req-imp-video-api": [ "integer array", false, [1, 2], "integer array | Array of supported API frameworks for this impression." ],
    "req-imp-video-btype": [ "integer array", false, [1], "integer array | Blocked banner ad types." ],
    "req-imp-video-pos": [ "integer", false, 1, "integer | Position of the impression, which can be used by buyers to indicate the desired position of the ad." ],
    "req-imp-video-ext": [ , , {}, ],

    // Impression Audio Object
    "req-imp-audio-mimes": [ "array", false, ["audio/mp3", "audio/mp4"], "array | Content MIME types supported (e.g., \"audio/mp4\")." ],
    "req-imp-audio-minduration": [ "integer", false, 5, "integer | Minimum audio ad duration in seconds." ],
    "req-imp-audio-maxduration": [ "integer", false, 60, "integer | Maximum audio ad duration in seconds." ],
    "req-imp-audio-protocols": [ "integer array", false, [1, 2, 3], "integer array | Array of supported audio protocols." ],
    "req-imp-audio-startdelay": [ "integer", false, 0, "integer | Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements." ],
    "req-imp-audio-sequence": [ "integer", false, 1, "integer | If multiple ad impressions are offered in the same bid request, the sequence number will allow for the coordinated delivery of multiple creatives." ],
    "req-imp-audio-maxextended": [ "integer", false, 0, "integer | Maximum extended video ad duration, if extension is allowed." ],
    "req-imp-audio-minbitrate": [ "integer", false, 128, "integer | Minimum bit rate in Kbps." ],
    "req-imp-audio-maxbitrate": [ "integer", false, 3200, "integer | Maximum bit rate in Kbps." ],
    "req-imp-audio-delivery": [ "integer array", false, [1], "integer array | Array of supported delivery methods." ],
    "req-imp-audio-battr": [ "integer array", false, [1, 2], "integer array | Blocked creative attributes." ],
    "req-imp-audio-api": [ "integer array", false, [1, 2], "integer array | Array of supported API frameworks for this impression." ],
    "req-imp-audio-maxseq": [ "integer", false, 1, "integer | The maximum number of ads that can be played in an ad pod." ],
    "req-imp-audio-feed": [ "integer", false, 1, "integer | Type of audio feed." ],
    "req-imp-audio-stitched": [ "integer", false, 0, "integer | Indicates if the ad is stitched with audio content or delivered independently." ],
    "req-imp-audio-nvol": [ "integer", false, 0, "integer | Volume normalization mode." ],
    "req-imp-audio-ext": [ , , {}, ],
    // Add more impression attributes as needed

    // Site Object
    "req-site-id": [ "string", false, "12345", "string | Site ID on the exchange." ],
    "req-site-name": [ "string", false, "OpenRTB", "string | Site name (may be masked at publisher's request)." ],
    "req-site-domain": [ "string", false, "openrtb.com", "string | Domain of the site, used for advertiser side blocking. For example, \"foo.com\"." ],
    "req-site-cat": [ "string array", false, ["IAB3-1"], "string array | Array of IAB content categories of the site. See enum ContentCategory." ],
    "req-site-sectioncat": [ "string array", false, ["IAB3-1"], "string array | Array of IAB content categories that describe the current section of the site. See enum ContentCategory." ],
    "req-site-pagecat": [ "string array", false, ["IAB3-1"], "string array | Array of IAB content categories that describe the current page or view of the site. See enum ContentCategory." ],
    "req-site-page": [ "string", false, "openrtb.com/home", "string | URL of the page where the impression will be shown." ],
    "req-site-ref": [ "string", false, "https://openrtb.com", "string | Referrer URL that caused navigation to the current page." ],
    "req-site-search": [ "string", false, "openrtb", "string | Search string that caused navigation to the current page." ],
    "req-site-mobile": [ "integer", false, 0, "integer | Indicates if the site has been programmed to optimize layout when viewed on mobile devices, where 0 = no, 1 = yes" ],
    "req-site-privacypolicy": [ "integer", false, 0, "integer | Indicates if the site has a privacy policy." ],
    "req-site-keywords": [ "string array", false, ["openrtb", "advertising"], "string array | Comma separated list of keywords about this site." ],
    "req-site-ext": [ , , {}, ],
    // Add more site attributes as needed

    // Content Object under Site
    "req-site-content-id": [ "string", false, "1234567", "string | Content ID." ],
    "req-site-content-episode": [ "integer", false, 1, "integer | Episode number." ],
    "req-site-content-title": [ "string", false, "Mordern Family - Season 1 Episode 1", "string | Content title." ],
    "req-site-content-series": [ "string", false, "Mondern Family", "string | Series name." ],
    "req-site-content-season": [ "string", false, "Season 1", "string | Season name." ],
    "req-site-content-artist": [ "string", false, "Ty burrell", "string | Artist name." ],
    "req-site-content-genre": [ "string", false, "comedy", "string | Genre name." ],
    "req-site-content-album": [ "string", false, "Original Soundtrack", "string | Album name." ],
    "req-site-content-isrc": [ "string", false, "1234567890", "string | ISRC code." ],
    "req-site-content-url": [ "string", false, "https://abc.com/", "string | Content URL." ],
    "req-site-content-cat": [ "string array", false, ["IAB1-7"], "string array | Array of IAB content categories. See enum ContentCategory." ],
    "req-site-content-prodq": [ "integer", false, 1, "integer | Production quality. See enum ProductionQuality." ],
    "req-site-content-videoquality": [ "integer", false, 1, "integer | Video quality. See enum VideoQuality." ],
    "req-site-content-context": [ "integer", false, 1, "integer | Content context. See enum ContentContext." ],
    "req-site-content-contentrating": [ "string", false, "MPAA", "string | Content rating." ],
    "req-site-content-userrating": [ "string", false, "Great", "string | User rating of the content." ],
    "req-site-content-qagmediarating": [ "integer", false, 1, "integer | Media rating per QAG guidelines. See enum QAGMediaRating." ],
    "req-site-content-keywords": [ "string array", false, ["Mordern Family"], "string array | Array of keywords describing the content." ],
    "req-site-content-livestream": [ "integer", false, 0, "integer | 0 = not live, 1 = content is live." ],
    "req-site-content-sourcerelationship": [ "integer", false, 0, "integer | Indicates the source relationship. 0 = indirect, 1 = direct." ],
    "req-site-content-len": [ "integer", false, 1800, "integer | Length of content in seconds." ],
    "req-site-content-language": [ "string", false, "en", "string | Content language using ISO-639-1-alpha-2." ],
    "req-site-content-embeddable": [ "integer", false, 0, "integer | Indicates if content is embeddable." ],
    "req-site-content-data": [ "object", false, {}, "object | Content data. See enum ContentType." ],
    "req-site-context-ext": [ , , {}, ],
    // Content Object under App
    "req-app-content-id": [ "string", false, "1234567", "string | Content ID." ],
    "req-app-content-episode": [ "integer", false, 1, "integer | Episode number." ],
    "req-app-content-title": [ "string", false, "Mordern Family - Season 1 Episode 1", "string | Content title." ],
    "req-app-content-series": [ "string", false, "Mondern Family", "string | Series name." ],
    "req-app-content-season": [ "string", false, "Season 1", "string | Season name." ],
    "req-app-content-artist": [ "string", false, "Ty burrell", "string | Artist name." ],
    "req-app-content-genre": [ "string", false, "comedy", "string | Genre name." ],
    "req-app-content-album": [ "string", false, "Original Soundtrack", "string | Album name." ],
    "req-app-content-isrc": [ "string", false, "1234567890", "string | ISRC code." ],
    "req-app-content-url": [ "string", false, "https://abc.com/", "string | Content URL." ],
    "req-app-content-cat": [ "string array", false, ["IAB1-7"], "string array | Array of IAB content categories. See enum ContentCategory." ],
    "req-app-content-prodq": [ "integer", false, 1, "integer | Production quality. See enum ProductionQuality." ],
    "req-app-content-videoquality": [ "integer", false, 1, "integer | Video quality. See enum VideoQuality." ],
    "req-app-content-context": [ "integer", false, 1, "integer | Content context. See enum ContentContext." ],
    "req-app-content-contentrating": [ "string", false, "MPAA", "string | Content rating." ],
    "req-app-content-userrating": [ "string", false, "Great", "string | User rating of the content." ],
    "req-app-content-qagmediarating": [ "integer", false, 1, "integer | Media rating per QAG guidelines. See enum QAGMediaRating." ],
    "req-app-content-keywords": [ "string array", false, ["Mordern Family"], "string array | Array of keywords describing the content." ],
    "req-app-content-livestream": [ "integer", false, 0, "integer | 0 = not live, 1 = content is live." ],
    "req-app-content-sourcerelationship": [ "integer", false, 0, "integer | Indicates the source relationship. 0 = indirect, 1 = direct." ],
    "req-app-content-len": [ "integer", false, 1800, "integer | Length of content in seconds." ],
    "req-app-content-language": [ "string", false, "en", "string | Content language using ISO-639-1-alpha-2." ],
    "req-app-content-embeddable": [ "integer", false, 0, "integer | Indicator of whether or not the content is embeddable." ],
    "req-app-context-ext": [ , , {}, ],

    // Producer Object
    "req-site-content-producer-id": ["string", false, "12345", "string | Exchange-specific producer ID."],
    "req-site-content-producer-name": ["string", false, "Warner Bros", "string | Producer name."],
    "req-site-content-producer-domain": ["string", false, "hbo.com", "string | Producer domain."],
    "req-site-content-producer-cat": ["string array", false, ["IAB1-7"], "string array | Array of IAB content categories."],
    "req-site-content-producer-ext": [ , , {}, ],

    "req-app-content-producer-id": ["string", false, "12345", "string | Exchange-specific producer ID."],
    "req-app-content-producer-name": ["string", false, "Warner Bros", "string | Producer name."],
    "req-app-content-producer-domain": ["string", false, "hbo.com", "string | Producer domain."],
    "req-app-content-producer-cat": ["string array", false, ["IAB1-7"], "string array | Array of IAB content categories."],
    "req-app-content-producer-ext": [ , , {}, ],

    // Publisher Object
    "req-site-publisher-id": ["string", false, "12345", "string | Exchange-specific publisher ID."],
    "req-site-publisher-name": ["string", false, "ABC", "string | Publisher name."],
    "req-site-publisher-domain": ["string", false, "abc.com", "string | Publisher domain."],
    "req-site-publisher-cat": ["string array", false, ["IAB1-7"], "string array | Array of IAB content categories."],
    "req-site-publisher-ext": [ , , {}, ],

    "req-app-publisher-id": ["string", false, "12345", "string | Exchange-specific publisher ID."],
    "req-app-publisher-name": ["string", false, "ABC.com", "string | Publisher name."],
    "req-app-publisher-domain": ["string", false, "abc.com", "string | Publisher domain."],
    "req-app-publisher-cat": ["string array", false, ["IAB1-7"], "string array | Array of IAB content categories."],
    "req-app-publisher-ext": [ , , {}, ],

    // App Object
    "req-app-id": ["string", false, "54321", "string; recommended | Exchange-specific app ID."],
    "req-app-name": ["string", false, "OpenRTB App", "string | Application name."],
    "req-app-bundle": ["string", false, "com.openrtb.app", "string | Application bundle."],
    "req-app-domain": ["string", false, "openrtb.com", "string | Application domain."],
    "req-app-storeurl": ["string", false, "https://openrtb.com", "string | Application store URL."],
    "req-app-cat": ["string array", false, ["IAB3-1", "IAB3-2"], "string array | Array of IAB content categories."],
    "req-app-sectioncat": ["string array", false, ["IAB7-1"], "string array | Array of section IAB content categories."],
    "req-app-pagecat": ["string array", false, ["IAB3-1"], "string array | Array of page IAB content categories."],
    "req-app-ver": ["string", false, "1.2", "string | Application version."],
    "req-app-privacypolicy": ["integer", false, 1, "integer | Indicator of application privacy policy."],
    "req-app-paid": ["integer", false, 0, "integer | Indicator of whether the application is paid."],
    "req-app-keywords": ["string array", false, ["openrtb", "advertising"], "string array | Array of application keywords."],
    "req-app-ext": [ , , {}, ],

    // Device Object
    "req-device-ua": ["string", false, "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1", "string; recommended | Browser user agent string."],
    "req-device-dnt": ["integer", false, 0, "integer; recommended | Indicator of whether tracking is restricted."],
    "req-device-lmt": ["integer", false, 0, "integer; recommended | Indicator of whether ad tracking is limited."],
    "req-device-ip": ["string", false, "107.0.21.0", "string; recommended | IPv4 address closest to the device."],
    "req-device-ipv6": ["string", false, "5be8:dde9:7f0b:d5a7:bd11:b3be:9c67:573a", "string | IPv6 address closest to the device as IPv6."],
    "req-device-devicetype": ["integer", false, 1, "integer | Device type."],
    "req-device-make": ["string", false, "Apple", "string | Device make."],
    "req-device-os": ["string", false, "iOS", "string | Operating system."],
    "req-device-model": ["string", false, "iPhone", "string | Device model."],
    "req-device-osv": ["string", false, "15.8", "string | Operating system version."],
    "req-device-hwv": ["string", false, "iPhone14,2", "string | Hardware version."],
    "req-device-h": ["integer", false, 2532, "integer | Physical height of the screen in pixels."],
    "req-device-w": ["integer", false, 1170, "integer | Physical width of the screen in pixels."],
    "req-device-ppi": ["integer", false, 458, "integer | Sreen size as pixels per linear inch."],
    "req-device-pxratio": ["integer", false, 0, "integer | The ratio of physical pixels to device independent pixels."],
    "req-device-js": ["integer", false, 1, "integer | Support for JavaScript, where 0 = no, 1 = yes."],
    "req-device-geofetch": ["integer", false, 0, "integer | Indicates if the geolocation API will be available to JavaScript code running in the banner, where 0 = no, 1 = yes."],
    "req-device-flashver": ["string", false, "237.84.2.178", "string | Flash version."],
    "req-device-language": ["string", false, "en", "string | Language."],
    "req-device-carrier": ["string", false, "AT&T", "string | Carrier name."],
    "req-device-mccmnc": ["string", false, "310-005", "string | Mobile country code and mobile network code."],
    "req-device-connectiontype": ["integer", false, 1, "integer | Connection type."],
    "req-device-ifa": ["string", false, "12345678901234567890", "string | IMEI."],
    "req-device-didsha1": ["string", false, "12345678901234567890", "string | IMEI hashed via SHA1."],
    "req-device-didmd5": ["string", false, "12345678901234567890", "string | IMEI hashed via MD5."],
    "req-device-dpidsha1": ["string", false, "12345678901234567890", "string | Platform device ID hashed via SHA1."],
    "req-device-dpidmd5": ["string", false, "12345678901234567890", "string | Platform device ID hashed via MD5."],
    "req-device-macsha1": ["string", false, "12345678901234567890", "string | MAC address hashed via SHA1."],
    "req-device-macmd5": ["string", false, "12345678901234567890", "string | MAC address hashed via MD5."],
    "req-device-ext": [ , , {}, ],

    // Device.Geo Object
    "req-device-geo-lat": ["float", false, 37.2295, "float | Latitude."],
    "req-device-geo-lon": ["float", false, -121.9865, "float | Longitude."],
    "req-device-geo-type": ["integer", false, 1, "integer | Location type."],
    "req-device-geo-accuracy": ["integer", false, 0, "integer | Location accuracy."],
    "req-device-geo-lastfix": ["integer", false, 0, "integer | Location timestamp."],
    "req-device-geo-ipservice": ["integer", false, 3, "integer | IP service."],
    "req-device-geo-country": ["string", false, "USA", "string | Country."],
    "req-device-geo-region": ["string", false, "CA", "string | Region."],
    "req-device-geo-regionfips104": ["string", false, "AT-1", "string | Region FIPS 104."],
    "req-device-geo-metro": ["string", false, "408", "string | Metro."],
    "req-device-geo-city": ["string", false, "Los Gatos", "string | City."],
    "req-device-geo-zip": ["string", false, "95030", "string | Zip."],
    "req-device-geo-utcoffset": ["integer", false, -7, "integer | UTC offset."],
    "req-device-geo-ext": [ , , {}, ],

    // User Object
    "req-user-id": ["string", false, "55816b39711f9b5acf3b90e313ed29e51665623f", "string; recommended | Exchange-specific ID for the user. At least one of id or buyeruid is recommended"],
    "req-user-buyeruid": ["string", false, "o04gl0441i0wmu1c6333q4vpsb668jzl59gk6b42", "string; recommmended | Buyer-specific ID for the user as mapped by the exchange. At least one of id or buyeruid is recommended"],
    "req-user-yob": ["integer", false, 1980, "integer | Year of birth."],
    "req-user-gender": ["string", false, "M", "string | User gender. 'M' or 'F'."],
    "req-user-keywords": ["string", false, "sports", "string | User keywords."],
    "req-user-customdata": ["string", false, "randomdata", "string | Custom data."],
    "req-user-ext": [ , , {}, ],

    // User.Geo Object
    "req-user-geo-lat": ["float", false, 35.012345, "float | Latitude."],
    "req-user-geo-lon": ["float", false, -115.012345, "float | Longitude."],
    "req-user-geo-type": ["integer", false, 1, "integer | Location type."],
    "req-user-geo-accuracy": ["integer", false, 0, "integer | Location accuracy."],
    "req-user-geo-lastfix": ["integer", false, 0, "integer | Location timestamp."],
    "req-user-geo-ipservice": ["integer", false, 3, "integer | IP service providers."],
    "req-user-geo-country": ["string", false, "USA", "string | Country."],
    "req-user-geo-region": ["string", false, "CA", "string | Region."],
    "req-user-geo-regionfips104": ["string", false, "AT-1", "string | Region FIPS 104."],
    "req-user-geo-metro": ["string", false, "803", "string | Metro."],
    "req-user-geo-city": ["string", false, "Los Angeles", "string | City."],
    "req-user-geo-zip": ["string", false, "90049", "string | Zip."],
    "req-user-geo-utcoffset": ["integer", false, -7, "integer | UTC offset."],
    "req-user-geo-ext": [ , , {}, ],

    // PMP Object
    "req-imp-pmp-private_auction": ["integer", false, 1, "integer | Indicator of auction eligibility to seats named in the Direct Deals object, where 0 = all bids are accepted, 1 = bids are restricted to the deals specified and the terms thereof."], 
    "req-imp-pmp-ext": [ , , {}, ],
    // Direct Deal Object
    "req-imp-pmp-deal-id": ["string", true, "openrtb-test-deal", "string; required | A unique identifier for the direct deal."],
    "req-imp-pmp-deal-bidfloor": ["float", false, 0.01, "float | Minimum bid for this impression expressed in CPM."],
    "req-imp-pmp-deal-bidfloorcur": ["string", false, "USD", "string | Currency specified using ISO-4217 alpha codes."],
    "req-imp-pmp-deal-at": ["integer", false, 1, "integer | Optional override of the overall auction type of the bid request."],
    "req-imp-pmp-deal-wseat": ["string array", false, ['seat1', 'seat2'], "string array | Allowlist of buyer seats allowed to bid on this deal."],
    "req-imp-pmp-deal-wadomain": ["string array", false, ['www.happybidder.com', 'www.happybuyer.com'], "string array | Array of advertiser domains allowed to bid on this deal."],
    "req-imp-pmp-deal-ext": [ , , {}, ],

    // Source Object
    "req-source-fd": ["integer", false, 0, "integer; recommended | Entity responsible for the final impression sale decision, where false = exchange, true = upstream source."],
    "req-source-tid": ["string", false, "sic-3kdpacmpdsads1o9fjd8espe", "string; recommended | Transaction ID that must be common across all participants in this bid request."],
    "req-source-pchain": ["string", false, "pchain-3kdpacmpdsads1o9fjd8espe", "string; recommended | Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0."],
    "req-source-ext": [ , , {}, ],

    // Regs Object
    "req-regs-coppa": ["integer", false, 0, "integer; recommended | COPPA compliance status (0 = no, 1 = yes)."],
    "req-regs-ext": [ , , {}, ],

    // GDPR-related attributes
    // TODO
};
// User input
const inputData = {}

function checkboxOnChange(id) {
    const checkbox = document.getElementById(id);
    if (!checkbox) {
        return;
    }
    const dataKey = checkbox.id.toString();
    const parent = checkbox.parentNode;
    // remove any existing inputbox
    let existingInputbox = parent.querySelectorAll('.input-value-box');
    existingInputbox.forEach(box => box.remove());
    if (!checkbox.checked) {
        // attribute not selected. clear inputData's attribute
        delete inputData[dataKey];
    } else {
        // attribute selected. 
        // 1. check if inputData has the attribute:
        //    - if yes, apply it to the inputbox
        //    - if not, apply the default value
        let inputDataValue = inputData.hasOwnProperty(dataKey) ? inputData[dataKey] : null;
        if (!inputDataValue) {
            // if defaultData also has no such attribute, return
            // as this is not part of openRTB. Or it's not supported by this app yet.
            let defaultKey = dataKey.replace(/-idx-\d+-/g, '-');
            if (!defaultData.hasOwnProperty(defaultKey)) {
                return;
            } else {
                inputDataValue = defaultData[defaultKey][2];
                inputData[dataKey] = inputDataValue;
            }
        }
        // 2. apply the value to inputbox
        // create new inputbox containing the data from above
        let newInputbox = document.createElement('input');
        // logic to support dropdown for predefined attributes
        if (checkbox.getAttribute('pre-defined-options')) {
            const optionsAttr = checkbox.getAttribute('pre-defined-options');
            const optionsArray = optionsAttr.split(',');
            newInputbox = document.createElement('select');
            maxwidth = 0;
            for (let i = 0; i < optionsArray.length; i++) {
                let newOption = document.createElement('option');
                newOption.value = optionsArray[i];
                newOption.text = optionsArray[i];
                newInputbox.appendChild(newOption);
                if (inputDataValue === optionsArray[i]) {
                    newInputbox.selectedIndex = i;
                }
                maxwidth = Math.max(maxwidth, optionsArray[i].length);
            }
            if (newInputbox.selectedIndex === -1) {
                newInputbox.selectedIndex = 0;
            }
            newInputbox.style.width = maxwidth + 3 + 'ch';
        }

        newInputbox.className = 'input-value-box';
        newInputbox.value = inputDataValue;
        newInputbox.addEventListener('input', function() {
            // convert the input value to the correct data type
            applyToInputData(checkbox.id);
        });
        parent.appendChild(newInputbox);
    }
}

function createNodeFromString(macros, idxes, template) {
    let length = macros.length;
    if (idxes.length !== length) {
        console.error('macro and index arrays should be of same length');
        return;
    }
    str = template;
    for (let i = 0; i < length; i++) {
        str = str.replace(new RegExp(macros[i], 'g'), idxes[i]);
    }
    var temp = document.createElement('template');
    temp.innerHTML = str.trim();
    return temp.content;
}

function applyDefaultData(id) {
    const node = document.getElementById(id);
    if (!node) return;
    // apply listerns to checkboxes
    const checkboxes = node.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkboxOnChange(checkbox.id);
        checkbox.addEventListener('change', function() {
            checkboxOnChange(this.id);
        });
    });
}
// Array Objects Indexes
let impObjectLastIndex = 1;
let impBannerFormatObjectLastIndex = 0; // start from 0

// templates
const impBannerFormatTemplate =
`               <fieldset id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-fieldset">
                <legend>Format Attributes</legend>
                    <label><input type="checkbox" name="w" value="w" id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-w"> w</label><br>
                    <label><input type="checkbox" name="h" value="h" id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-h"> h</label><br>
                    <label><input type="checkbox" name="wmax" value="wmax" id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-wratio"> wratio</label><br>
                    <label><input type="checkbox" name="hmax" value="hmax" id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-hratio"> hratio</label><br>
                    <label><input type="checkbox" name="wmin" value="wmin" id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-wmin"> wmin</label><br>
                    <label><input type="checkbox" name="hmin" value="hmin" id="req-imp-idx-{{IMP-INDEX}}-banner-format-idx-{{FORMAT-INDEX}}-ext"> ext</label><br>
                </fieldset>
`
const impTemplate = 
`
    <!-- Imp Object -->
    <fieldset id="req-imp-idx-{{INDEX}}">
        <legend> Imp <img src="assets/circle-xmark-regular.svg" class="field-removal-btn" onclick="this.parentNode.parentNode.remove();"></legend>
        <fieldset id="req-imp-idx-{{INDEX}}-type-fieldset">
            <legend>Select Type</legend>
            <select id="req-imp-idx-{{INDEX}}-type-selection">
                <option value="">Select Type</option>
                <option value="banner">Banner</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
                <option value="native" disabled>Native</option>
            </select>
            <fieldset id="req-imp-idx-{{INDEX}}-banner-fieldset" style="display:none">
                <legend>Banner Attributes</legend>
                <!-- Banner Format Object-->
                <label><input type="checkbox" name="format" value="format" id="req-imp-idx-{{INDEX}}-banner-format"> Format</label><br>
                <fieldset id="req-imp-idx-{{INDEX}}-banner-format-fieldset" style="display:none">
                    <legend>Formats</legend>
                    <button id="add-fmt" type="button" onclick="addFormatHTML({{INDEX}})" class="general-btn">Add Format</button>
                </fieldset>
                <!-- End of Banner Format Object-->
                <label><input type="checkbox" name="w" value="w" checked id="req-imp-idx-{{INDEX}}-banner-w"> w</label><br>
                <label><input type="checkbox" name="h" value="h" checked id="req-imp-idx-{{INDEX}}-banner-h"> h</label><br>
                <label><input type="checkbox" name="wmax" value="wmax" id="req-imp-idx-{{INDEX}}-banner-wmax"> wmax (deprecated)</label><br>
                <label><input type="checkbox" name="hmax" value="hmax" id="req-imp-idx-{{INDEX}}-banner-hmax"> hmax (deprecated)</label><br>
                <label><input type="checkbox" name="wmin" value="wmin" id="req-imp-idx-{{INDEX}}-banner-wmin"> wmin (deprecated)</label><br>
                <label><input type="checkbox" name="hmin" value="hmin" id="req-imp-idx-{{INDEX}}-banner-hmin"> hmin (deprecated)</label><br>
                <label><input type="checkbox" name="btype" value="btype" id="req-imp-idx-{{INDEX}}-banner-btype"> btype</label><br>
                <label><input type="checkbox" name="battr" value="battr" id="req-imp-idx-{{INDEX}}-banner-battr" id="req-imp-idx-{{INDEX}}-banner-battr-id"> battr</label><br>
                <label><input type="checkbox" name="pos" value="pos" id="req-imp-idx-{{INDEX}}-banner-pos" pre-defined-options="0,1,2,3,4,5,6,7"> pos</label><br>
                <label><input type="checkbox" name="mimes" value="mimes" id="req-imp-idx-{{INDEX}}-banner-mimes"> mimes</label><br>
                <label><input type="checkbox" name="topframe" value="topframe" id="req-imp-idx-{{INDEX}}-banner-topframe" pre-defined-options="0,1"> topframe</label><br>
                <label><input type="checkbox" name="expdir" value="expdir" id="req-imp-idx-{{INDEX}}-banner-expdir"> expdir</label><br>
                <label><input type="checkbox" name="api" value="api" id="req-imp-idx-{{INDEX}}-banner-api"> api</label><br>
                <label><input type="checkbox" name="id" value="id" id="req-imp-idx-{{INDEX}}-banner-id"> id</label><br>
                <label><input type="checkbox" name="vcm" value="vcm" id="req-imp-idx-{{INDEX}}-banner-vcm" pre-defined-options="0,1"> vcm</label><br>
                <label><input type="checkbox" name="ext" value="ext" id="req-imp-idx-{{INDEX}}-banner-ext"> ext</label><br>
            </fieldset>
            <fieldset id="req-imp-idx-{{INDEX}}-video-fieldset" style="display:none">
                <legend>Video Attributes</legend>
                <label><input type="checkbox" name="mimes" id="req-imp-idx-{{INDEX}}-video-mimes" checked disabled> mimes</label><br>
                <label><input type="checkbox" name="minduration" checked id="req-imp-idx-{{INDEX}}-video-minduration"> minduration</label><br>
                <label><input type="checkbox" name="maxduration" checked id="req-imp-idx-{{INDEX}}-video-maxduration"> maxduration</label><br>
                <label><input type="checkbox" name="protocols" id="req-imp-idx-{{INDEX}}-video-protocols"> protocols</label><br>
                <label><input type="checkbox" name="protocol" id="req-imp-idx-{{INDEX}}-video-protocol"> protocol (deprecated)</label><br>
                <label><input type="checkbox" name="w" checked id="req-imp-idx-{{INDEX}}-video-w"> w</label><br>
                <label><input type="checkbox" name="h" checked id="req-imp-idx-{{INDEX}}-video-h"> h</label><br>
                <label><input type="checkbox" name="startdelay" id="req-imp-idx-{{INDEX}}-video-startdelay"> startdelay</label><br>
                <label><input type="checkbox" name="placement" id="req-imp-idx-{{INDEX}}-video-placement" pre-defined-options="1,2,3,4,5"> placement</label><br>
                <label><input type="checkbox" name="linearity" id="req-imp-idx-{{INDEX}}-video-linearity" pre-defined-options="1,2"> linearity</label><br>
                <label><input type="checkbox" name="skip" id="req-imp-idx-{{INDEX}}-video-skip" pre-defined-options="0,1"> skip</label><br>
                <label><input type="checkbox" name="skipmin" id="req-imp-idx-{{INDEX}}-video-skipmin"> skipmin</label><br>
                <label><input type="checkbox" name="skipafter" id="req-imp-idx-{{INDEX}}-video-skipafter"> skipafter</label><br>
                <label><input type="checkbox" name="sequence" id="req-imp-idx-{{INDEX}}-video-sequence"> sequence</label><br>
                <label><input type="checkbox" name="battr" id="req-imp-idx-{{INDEX}}-video-battr"> battr</label><br>
                <label><input type="checkbox" name="maxextended" id="req-imp-idx-{{INDEX}}-video-maxextended"> maxextended</label><br>
                <label><input type="checkbox" name="minbitrate" id="req-imp-idx-{{INDEX}}-video-minbitrate"> minbitrate</label><br>
                <label><input type="checkbox" name="maxbitrate" id="req-imp-idx-{{INDEX}}-video-maxbitrate"> maxbitrate</label><br>
                <label><input type="checkbox" name="boxingallowed" id="req-imp-idx-{{INDEX}}-video-boxingallowed" pre-defined-options="0,1"> boxingallowed</label><br>
                <label><input type="checkbox" name="playbackmethod" id="req-imp-idx-{{INDEX}}-video-playbackmethod"> playbackmethod</label><br>
                <label><input type="checkbox" name="playbackend" id="req-imp-idx-{{INDEX}}-video-playbackend" pre-defined-options="1,2,3"> playbackend</label><br>
                <label><input type="checkbox" name="delivery" id="req-imp-idx-{{INDEX}}-video-delivery"> delivery</label><br>
                <label><input type="checkbox" name="pos" id="req-imp-idx-{{INDEX}}-video-pos" pre-defined-options="1,2,3,4,5,6,7"> pos</label><br>
                <label><input type="checkbox" name="companionad" id="req-imp-idx-{{INDEX}}-video-companionad" class="feature-unsupported"> companionad</label><br>
                <label><input type="checkbox" name="api" id="req-imp-idx-{{INDEX}}-video-api"> api</label><br>
                <label><input type="checkbox" name="companiontype" id="req-imp-idx-{{INDEX}}-video-companiontype"> companiontype</label><br>
                <label><input type="checkbox" name="ext" id="req-imp-idx-{{INDEX}}-video-ext"> ext</label><br>
            </fieldset>
            <fieldset id="req-imp-idx-{{INDEX}}-audio-fieldset" style="display:none">
                <legend>Audio Attributes</legend>
                <label><input type="checkbox" name="mimes" id="req-imp-idx-{{INDEX}}-audio-mimes"> mimes</label><br>
                <label><input type="checkbox" name="minduration" id="req-imp-idx-{{INDEX}}-audio-minduration"> minduration</label><br>
                <label><input type="checkbox" name="maxduration" id="req-imp-idx-{{INDEX}}-audio-maxduration"> maxduration</label><br>
                <label><input type="checkbox" name="protocols" id="req-imp-idx-{{INDEX}}-audio-protocols"> protocols</label><br>
                <label><input type="checkbox" name="startdelay" id="req-imp-idx-{{INDEX}}-audio-startdelay"> startdelay</label><br>
                <label><input type="checkbox" name="sequence" id="req-imp-idx-{{INDEX}}-audio-sequence"> sequence</label><br>
                <label><input type="checkbox" name="battr" id="req-imp-idx-{{INDEX}}-audio-battr"> battr</label><br>
                <label><input type="checkbox" name="maxextended" id="req-imp-idx-{{INDEX}}-audio-maxextended"> maxextended</label><br>
                <label><input type="checkbox" name="minbitrate" id="req-imp-idx-{{INDEX}}-audio-minbitrate"> minbitrate</label><br>
                <label><input type="checkbox" name="maxbitrate" id="req-imp-idx-{{INDEX}}-audio-maxbitrate"> maxbitrate</label><br>
                <label><input type="checkbox" name="delivery" id="req-imp-idx-{{INDEX}}-audio-delivery"> delivery</label><br>
                <label><input type="checkbox" name="companionad" id="req-imp-idx-{{INDEX}}-audio-companionad"> companionad</label><br>
                <label><input type="checkbox" name="api" id="req-imp-idx-{{INDEX}}-audio-api"> api</label><br>
                <label><input type="checkbox" name="companiontype" id="req-imp-idx-{{INDEX}}-audio-companiontype"> companiontype</label><br>
                <label><input type="checkbox" name="maxseq" id="req-imp-idx-{{INDEX}}-audio-maxseq"> maxseq</label><br>
                <label><input type="checkbox" name="feed" id="req-imp-idx-{{INDEX}}-audio-feed"> feed</label><br>
                <label><input type="checkbox" name="stitched" id="req-imp-idx-{{INDEX}}-audio-stitched" pre-defined-options="0,1"> stitched</label><br>
                <label><input type="checkbox" name="nvol" id="req-imp-idx-{{INDEX}}-audio-nvol"> nvol</label><br>
                <label><input type="checkbox" name="ext" id="req-imp-idx-{{INDEX}}-audio-ext"> ext</label><br>
            </fieldset>
        </fieldset>
        <fieldset id="req-imp-idx-{{INDEX}}-fieldset">
            <legend>Imp Attributes</legend>
            <label><input type="checkbox" name="id" checked disabled id="req-imp-idx-{{INDEX}}-id"> id</label><br>
            <!-- Metric Object-->
            <label><input type="checkbox" name="metric" id="req-imp-idx-{{INDEX}}-metric" class="rtb-object"> Metric</label><br>
            <fieldset id="req-imp-idx-{{INDEX}}-metric-fieldset" style="display: none;">
                <legend>Metric Attributes</legend>
                <label><input type="checkbox" name="type" id="req-imp-idx-{{INDEX}}-metric-type" checked disabled> type</label><br>
                <label><input type="checkbox" name="value" id="req-imp-idx-{{INDEX}}-metric-value" checked disabled> value</label><br>
                <label><input type="checkbox" name="event" id="req-imp-idx-{{INDEX}}-metric-vendor"> vendor</label><br>
                <label><input type="checkbox" name="ext" id="req-imp-idx-{{INDEX}}-metric-ext"> ext</label><br>
            </fieldset>
            <!-- End of Metric Object-->
            <label><input type="checkbox" name="pmp" id="req-imp-idx-{{INDEX}}-pmp"> Pmp</label><br>
            <!-- Pmp Object-->
            <fieldset id="req-imp-idx-{{INDEX}}-pmp-fieldset" style="display: none;">
                <legend>Pmp Attributes</legend>
                <label><input type="checkbox" name="private_auction" id="req-imp-idx-{{INDEX}}-pmp-private_auction" pre-defined-options="0,1"> private_auction</label><br>
                <fieldset id="req-imp-idx-{{INDEX}}-pmp-deal-fieldset">
                    <legend>Deal</legend>
                    <label><input type="checkbox" name="id" id="req-imp-idx-{{INDEX}}-pmp-deal-id" checked disabled> id</label><br>
                    <label><input type="checkbox" name="bidfloor" id="req-imp-idx-{{INDEX}}-pmp-deal-bidfloor"> bidfloor</label><br>
                    <label><input type="checkbox" name="bidfloorcur" id="req-imp-idx-{{INDEX}}-pmp-deal-bidfloorcur"> bidfloorcur</label><br>
                    <label><input type="checkbox" name="at" id="req-imp-idx-{{INDEX}}-pmp-deal-at" pre-defined-options="1,2,3"> at</label><br>
                    <label><input type="checkbox" name="wseat" id="req-imp-idx-{{INDEX}}-pmp-deal-wseat"> wseat</label><br>
                    <label><input type="checkbox" name="wadomain" id="req-imp-idx-{{INDEX}}-pmp-deal-wadomain"> wadomain</label><br>
                    <label><input type="checkbox" name="ext" id="req-imp-idx-{{INDEX}}-pmp-deal-ext"> ext</label><br>
                </fieldset>
                <label><input type="checkbox" name="ext" id="req-imp-idx-{{INDEX}}-pmp-ext"> ext</label><br>
            </fieldset>
            <!-- End of Pmp Object-->
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-displaymanager" name="displaymanager"> displaymanager</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-displaymanagerver" name="displaymanagerver"> displaymanagerver</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-instl" name="instl" pre-defined-options="0,1"> instl</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-tagid" name="tagid"> tagid</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-bidfloor" name="bidfloor"> bidfloor</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-bidfloorcur" name="bidfloorcur"> bidfloorcur</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-clickbrowser" name="clickbrowser" pre-defined-options="0,1"> clickbrowser</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-secure" name="secure" pre-defined-options="0,1"> secure</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-iframebuster" name="iframebuster"> iframebuster</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-exp" name="exp"> exp</label><br>
            <label><input type="checkbox" id="req-imp-idx-{{INDEX}}-ext" name="ext"> ext</label><br>
        </fieldset>
        <!-- End of Imp Object-->
    </fieldset>
    <!-- End of Imp Object -->
`
function addImpHTML() {
    const newImpIndex = impObjectLastIndex;
    impObjectLastIndex++;
    const newImp = createNodeFromString(['{{INDEX}}'], [newImpIndex], impTemplate);
    const addImpButton = document.getElementById('add-imp');
    addImpButton.classList.add('general-btn');
    addImpButton.parentNode.insertBefore(newImp, addImpButton);
    // change the imp.id in inputData, this will be picked up by applyDefaultData
    inputData['req-imp-idx-' + newImpIndex + '-id'] = newImpIndex;
    applyDefaultData('req-imp-idx-' + newImpIndex);
    // listen to Imp type selection
    document.getElementById('req-imp-idx-' + newImpIndex + '-type-selection').addEventListener('change', function() {
        const selectedValue = this.value;
        const bannerFieldset = document.getElementById('req-imp-idx-' + newImpIndex + '-banner-fieldset');
        const videoFieldset = document.getElementById('req-imp-idx-' + newImpIndex + '-video-fieldset');
        const audioFieldset = document.getElementById('req-imp-idx-' + newImpIndex + '-audio-fieldset');

        bannerFieldset.style.display = selectedValue === 'banner' ? 'block' : 'none';
        videoFieldset.style.display = selectedValue === 'video' ? 'block' : 'none';
        audioFieldset.style.display = selectedValue === 'audio' ? 'block' : 'none';

        if (selectedValue) {
            // mark imp object active
            document.getElementById('req-imp-idx-' + newImpIndex).setAttribute('active', 1);
        }
    });

    // listen to Banner format check
    document.getElementById('req-imp-idx-' + newImpIndex + '-banner-format').addEventListener('change', function() {
        document.getElementById('req-imp-idx-' + newImpIndex + '-banner-format-fieldset').style.display = this.checked ? 'block' : 'none';
    });

    // listen to Pmp check
    document.getElementById('req-imp-idx-' + newImpIndex + '-pmp').addEventListener("change", function() {
        if (this.checked) {
            document.getElementById('req-imp-idx-' + newImpIndex + '-pmp-fieldset').style.display = "block";
        } else {
            document.getElementById('req-imp-idx-' + newImpIndex + '-pmp-fieldset').style.display = "none";
        }
    });

    // listen to Metric check
    document.getElementById('req-imp-idx-' + newImpIndex + '-metric').addEventListener("change", function() {
        if (this.checked) {
            document.getElementById('req-imp-idx-' + newImpIndex + '-metric-fieldset').style.display = "block";
        } else {
            document.getElementById('req-imp-idx-' + newImpIndex + '-metric-fieldset').style.display = "none";
        }
    });

    applyDefaultData('req-imp-' + newImpIndex);
}

function addFormatHTML(impIndex) {
    const newFormatIdx = impBannerFormatObjectLastIndex;
    impBannerFormatObjectLastIndex++;
    const newFormat = createNodeFromString(['{{IMP-INDEX}}', '{{FORMAT-INDEX}}'], [impIndex, newFormatIdx], impBannerFormatTemplate);
    document.getElementById('req-imp-idx-' + impIndex + '-banner-format-fieldset').insertBefore(newFormat, document.getElementById('add-fmt'));
    // add listener to input checkbox to parent and apply checkboxOnChange
    document.getElementById('req-imp-idx-' + impIndex + '-banner-format-fieldset').querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            checkboxOnChange(this.id);
        });  
    });
}

// Helper function, random string generator
function stringRandom(id, length) {
    let result = '';
    const weightedCharacters = '01234567890123456789012345678901234567890123456789012345678901234567890123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    const weightedCharactersLength = weightedCharacters.length;
    for (let i = 0; i < length; i++) {
        result += weightedCharacters.charAt(Math.floor(Math.random() * weightedCharactersLength));
    }
    document.getElementById(id).value = result;
    inputData[id] = result;
    checkboxOnChange(id);
}

function integerRandom(id, length) {
    let result = '';
    const weightedCharacters = '0123456789';
    const weightedCharactersLength = weightedCharacters.length;
    for (let i = 0; i < length; i++) {
        result += weightedCharacters.charAt(Math.floor(Math.random() * weightedCharactersLength));
    }
    result = parseInt(result);
    document.getElementById(id).value = result;
    inputData[id] = result;
    checkboxOnChange(id);
}

function createImpsObject() {
    let imps = []; // imps is an array
    for (let i = 0; i <= impObjectLastIndex; i++) {
        const impElement = document.getElementById('req-imp-idx-' + i);
        if (!impElement || impElement.getAttribute('active') != 1) {
            // ignore inactive imp
            continue;
        }
        let imp = {};
        // Basic Attributes
        Object.keys(defaultData).forEach(key => {
            if (key.startsWith('req-imp') && key.split('-').length === 3) {
                const inputDataKey = key.replace('req-imp', 'req-imp-idx-' + i);
                const element = document.getElementById(inputDataKey);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('-imp-');
                    // rebuild the inputData key
                    // the defaultData's key looks like req-imp-secure
                    // the inputData's key looks like req-imp-idx-1-secure
                    imp[field] = inputData[inputDataKey];
                }
            }

            // metric
            if (key.startsWith('req-imp-metric') && document.getElementById('req-imp-idx-' + i + '-metric').checked) {
                const inputDataKey = key.replace('req-imp-metric', 'req-imp-idx-' + i + '-metric');
                const element = document.getElementById(inputDataKey);
                if (element && element.type === 'checkbox' && element.checked) {
                    imp["metric"] = [];
                    let metric = {};
                    imp["metric"][0] = metric; // currently support 1 metric only
                    const [, field] = key.split('imp-metric-');
                    metric[field] = inputData[key];
                }
            }
            // pmp
            if (document.getElementById('req-imp-idx-'+ i + '-pmp').checked) {
                imp["pmp"] = {}
                let pmp = imp["pmp"]
                if (document.getElementById('req-imp-idx-' + i + '-pmp-private_auction').checked) {
                    pmp['private_auction'] = inputData['req-imp-idx-' + i + '-pmp-private_auction'];
                }
                pmp["deals"] = [{}]; // currently only support 1 deal
                // TODO: support multiple deals
                deal = pmp["deals"][0];
                Object.keys(defaultData).forEach(key => {
                    if (key.startsWith('req-imp-pmp-deal-')) {
                        const inputDataKey = key.replace('req-imp-pmp-deal-', 'req-imp-idx-' + i + '-pmp-deal-');
                        const element = document.getElementById(inputDataKey);
                        if (element && element.type === 'checkbox' && element.checked) {
                            const [ ,field] = key.split('deal-');
                            deal[field] = inputData[inputDataKey];
                        }
                    }
                })
            }
        });
        // Banner/Video/Audio Attributes
        const selectedType = document.getElementById('req-imp-idx-' + i + '-type-selection').value;
        if (!selectedType) {
            return imps;
        }
        switch (selectedType) {
            case 'banner':
                imp["banner"] = {};
                Object.keys(defaultData).forEach(key => {
                    if (key.startsWith('req-imp-banner') && key.split('-').length === 4) { // banner top leve lattributes
                        const inputDataKey = key.replace('req-imp-banner', 'req-imp-idx-' + i + '-banner');
                        const element = document.getElementById(inputDataKey);
                        if (element && element.type === 'checkbox' && element.checked) {
                            const [, field] = key.split('-banner-');
                            imp["banner"][field] = inputData[inputDataKey];
                        }
                    }
                    // format
                    if (key.startsWith('req-imp-banner-format') && impBannerFormatObjectLastIndex > 0) {
                        for (let fidx = 0; fidx <= impBannerFormatObjectLastIndex; fidx++) {
                            const inputDataKey = key.replace('req-imp-banner-format', 'req-imp-idx-' + i + '-banner-format').replace('format-', 'format-idx-' + fidx + '-');
                            const element = document.getElementById(inputDataKey);
                            if (element && element.type === 'checkbox' && element.checked) {
                                if (!imp["banner"]["format"]) {
                                    imp["banner"]["format"] = [];
                                }
                                if (!imp["banner"]["format"][fidx]) {
                                    imp["banner"]["format"][fidx] = {};
                                }
                                const [, field] = key.split('-format-');
                                imp["banner"]["format"][fidx][field] = inputData[inputDataKey];
                            }
                        }
                    }
                });
                break;
            case 'video':
                imp["video"] = {};
                Object.keys(defaultData).forEach(key => {
                    if (key.startsWith('req-imp-video') && key.split('-').length === 4) { // video top leve lattributes
                        const inputDataKey = key.replace('req-imp-video', 'req-imp-idx-' + i + '-video');
                        const element = document.getElementById(inputDataKey);
                        if (element && element.type === 'checkbox' && element.checked) {
                            const [, field] = key.split('-video-');
                            imp["video"][field] = inputData[inputDataKey];
                        }
                    }
                })
                break;
            case 'audio':
                imp["audio"] = {};
                Object.keys(defaultData).forEach(key => {
                    if (key.startsWith('req-imp-audio') && key.split('-').length === 4) { // audio top leve lattributes
                        const inputDataKey = key.replace('req-imp-audio', 'req-imp-idx-' + i + '-audio');
                        const element = document.getElementById(inputDataKey);
                        if (element && element.type === 'checkbox' && element.checked) {
                            const [, field] = key.split('-audio-');
                            imp["audio"][field] = inputData[inputDataKey];
                        }
                    }
                })
                break;
            default:
                break;
        }

        imps.push(imp);
    }
    
    return imps;
}

function createSiteObject() {
    const site = {};
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req-site') && key.split('-').length === 3) { // top level attributes of site, as the key looks like req-site-name
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-site-');
                site[field] = inputData[key];
            }
        }
    })

    // site.publisher
    if (document.getElementById('req-site-publisher').checked) {
        site["publisher"] = {};
        Object.keys(defaultData).forEach(key => {
            if (key.startsWith('req-site-publisher-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('-pubslisher-');
                    site["publisher"][field] = inputData[key];
                }
            }
        })
    }

    // site.content
    if (document.getElementById('req-site-content').checked) {
        site["content"] = {};
        Object.keys(defaultData).forEach(key => {
            if (key.startsWith('req-site-content-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('-content-');
                    site["content"][field] = inputData[key];
                }
            }
        })
    }
    return site;
}

function createAppObject() {
    const app = {};
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req-app') && key.split('-').length === 3) { // top level attributes of app, as the key looks like req-app-name
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-app-');
                app[field] = inputData[key];
            }
        }
    })

    // app.publisher
    if (document.getElementById('req-app-publisher').checked) {
        app["publisher"] = {};
        Object.keys(defaultData).forEach(key => {
            if (key.startsWith('req-app-publisher-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('-pubslisher-');
                    app["publisher"][field] = inputData[key];
                }
            }
        })
    }
    
    // app.content
    if (document.getElementById('req-app-content').checked) {
        app["content"] = {};
        Object.keys(defaultData).forEach(key => {
            if (key.startsWith('req-app-content-')) {
                const element = document.getElementById(key);
                if (element && element.type === 'checkbox' && element.checked) {
                    const [, field] = key.split('-content-');
                    app["content"][field] = inputData[key];
                }
            }
        })
    }
    return app;
}

function createDeviceObject() {
    const device = {};
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req-device') && key.split('-').length === 3) { // top level attributes for device
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-device-');
                device[field] = inputData[key];
            }
        }

        // geo
        if (key.startsWith('req-device-geo') && document.getElementById('req-device-geo').checked) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                if (!device["geo"]) {
                    device["geo"] = {};
                }
                const [, field] = key.split('-geo-');
                device["geo"][field] = inputData[key];
            }
        }
    })
    return device;
}

function createUserObject() {
    const user = {};
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req-user') && key.split('-').length === 3) { // top level attributes for user
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-user-');
                user[field] = inputData[key];
            }
        }
        // geo
        if (key.startsWith('req-user-geo') && document.getElementById('req-user-geo').checked) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                if (!user['geo']) {
                    user['geo'] = {};
                }
                const [, field] = key.split('-geo-');
                user['geo'][field] = inputData[key];
            }
        }
    })
    return user;
}

function createSourceObject() {
    const source = {};
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req-source') && key.split('-').length === 3) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-source-');
                source[field] = inputData[key];
            }
        }
    })
    return source;
}

function createRegsObject() {
    const regs = {};
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req-regs') && key.split('-').length === 3) {
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                const [, field] = key.split('-regs-');
                regs[field] = inputData[key];
            }
        }
    })
    return regs;
}

function applyToInputData(id) {
    const fieldName = id.toString();
    const defaultFieldName = fieldName.replace(/-idx-\d+-/g, '-');
    const element = document.getElementById(id);
    // get the default data, as defined in defaultData
    const dataMeta = defaultData[defaultFieldName];
    if (!element || !dataMeta) return;
    const valueFromInputBox = element.parentNode.querySelector('.input-value-box').value;
    const typeOfData = dataMeta[0];

    try {
        switch (typeOfData) {
            case 'string':
                inputData[fieldName] = String(valueFromInputBox);
                break;
            case 'float':
                inputData[fieldName] = Number(valueFromInputBox);
                break;
            case 'integer':
                inputData[fieldName] = parseInt(valueFromInputBox);
                break;
            case 'string array':
                inputData[fieldName] = valueFromInputBox.split(',').map(item => item.trim());
                break;
            case 'integer array':
                inputData[fieldName] = valueFromInputBox.split(',').map(item => Number(item.trim()));
                break;
            default:
                inputData[id] = null;
                console.error(`Failed to convert ${id} to a ${typeOfData}`);
                break;
        }
    } catch (error) {
        console.error(`Failed to convert ${id} to a ${typeOfData}: ${error}`);
        inputData[id] = null;
    }

    return;
}

function createBidRequest() {
    // valid Imp
    let hasImp = false;
    for (let i = 0; i <= impObjectLastIndex; i++) {
        let element = document.getElementById(`req-imp-idx-${i}`);
        if (element) {
            hasImp = hasImp || element.getAttribute('active') == 1;
        }
        console.log(hasImp);
    }
    if (!hasImp) {
        document.getElementById('req-imps').focus();
        alert('Hey! At least one Imp is required.');
        return;
    }
    // valid App/Site
    const selectedApp = document.getElementById('req-app').checked;
    const selectedSite = document.getElementById('req-site').checked;
    
    if (selectedApp && selectedSite) {
        document.getElementById('req-site').focus();
        alert('Only one of `App` or `Site` element can be selected');
        return;
    }
    
    if (!selectedApp && !selectedSite) {
        document.getElementById('req-site').focus();
        alert('One of `App` or `Site` element must be selected');
        return;
    }
    
    const includeSite = document.getElementById('req-site').checked;
    const includeApp = document.getElementById('req-app').checked;
    const includeDevice = document.getElementById('req-device').checked;
    const includeUser = document.getElementById('req-user').checked;
    const includeRegs = document.getElementById('req-regs').checked;
    const includeSource = document.getElementById('req-source').checked;

    // Imp is required.
    const imps = createImpsObject();
    const site = includeSite ? createSiteObject() : null;
    const app = includeApp ? createAppObject() : null;
    const device = includeDevice ? createDeviceObject() : null;
    const user = includeUser ? createUserObject() : null;
    const regs = includeRegs ? createRegsObject() : null;
    const source = includeSource ? createSourceObject() : null;

    const bidRequest = {};
    bidRequest["id"] = inputData['req-id'];
    bidRequest["imp"] = imps;
    bidRequest["site"] = site;
    bidRequest["app"] = app;
    bidRequest["device"] = device;
    bidRequest["user"] = user;
    bidRequest["regs"] = regs;
    bidRequest["source"] = source;

    // Apply top level attributes
    Object.keys(defaultData).forEach(key => {
        if (key.startsWith('req') && key.split('-').length === 2) { // top bid request attributes
            const element = document.getElementById(key);
            if (element && element.type === 'checkbox' && element.checked) {
                [, field] = key.split('-');
                bidRequest[field] = inputData[key];
            }
        }
    })
    // log the final bid request for convienience.
    console.log(bidRequest);

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
