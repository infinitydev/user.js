/* allow Proxmox console popups */
user_pref("browser.link.open_newwindow.restriction", 2);

/* Taken from: https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js */

user_pref("_user.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");
user_pref("accessibility.force_disabled", 1);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.offline.enable", false );
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
user_pref("browser.contentblocking.enabled", true);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [FF58+]
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtab.preload", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", ""); // [FF54+]
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", ""); // [FF54+]
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", ""); // [FF54+]
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", ""); // [FF54+]
user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // [FF50+]
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.sessionstore.privacy_level", 0);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.startup.blankWindow", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.page", 3);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("captivedetect.canonicalURL", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("devtools.chrome.enabled", true);
user_pref("dom.battery.enabled", false);
user_pref("dom.disable_window_move_resize", false);
user_pref("dom.security.https_only_mode", false); // [FF76+]
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
/*user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]*/
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("geo.enabled", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.use_us_english_locale", false); // [HIDDEN PREF]
user_pref("keyword.enabled", false);
user_pref("media.autoplay.blocking_policy", 0);
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]
user_pref("network.dns.disableIPv6", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [HIDDEN PREF]
user_pref("network.gio.supported-protocols", "");
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.http.referer.trimmingPolicy", 1);
user_pref("network.http.referer.XOriginPolicy", 0);
user_pref("network.http.referer.XOriginTrimmingPolicy", 1);
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("network.trr.mode", 0);
user_pref("network.trr.bootstrapAddress", "");
user_pref("network.trr.uri", "");
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.formdata", true); // Form & Search History
user_pref("privacy.clearOnShutdown.history", false); // Browsing & Download History
user_pref("privacy.clearOnShutdown.offlineApps", true); // Offline Website Data
user_pref("privacy.clearOnShutdown.sessions", false); // Active Logins
user_pref("privacy.clearOnShutdown.siteSettings", false); // Site Preferences
user_pref("privacy.cpd.history", false);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("security.dialog_enable_delay", 500);
user_pref("security.family_safety.mode", 0);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.ssl.disable_session_identifiers", true); // [HIDDEN PREF]
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.tls.enable_0rtt_data", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("webgl.disabled", true);


/* override recipe: FF87+ use Total Cookie Protection [Custom Mode] ***/
user_pref("privacy.firstparty.isolate", false); // 4001
user_pref("network.cookie.cookieBehavior", 5); // 2701

/* override recipe: enable web conferencing: Google Meet | JitsiMeet | BigBlueButton | Zoom | Discord ***/
// IMPORTANT: uncheck "Prevent WebRTC from leaking local IP addresses" in uBlock Origin's settings
// NOTE: if using RFP (4501)
   // some sites, e.g. Zoom, need a canvas site exception [Right Click>View Page Info>Permissions]
   // Discord video does not work: it thinks you are FF78: use a separate profile or spoof the user agent
user_pref("media.peerconnection.enabled", true); // 2001
user_pref("media.peerconnection.ice.no_host", false); // 2001 [may or may not be required]
   // user_pref("webgl.disabled", false); // 2010 [required for Zoom]
   // user_pref("webgl.min_capability_mode", false); // 2012 [removed from the user.js in v88 - reset it]
   // user_pref("media.getusermedia.screensharing.enabled", true); // 2022 optional
   // user_pref("media.autoplay.blocking_policy", 0); // 2031 optional [otherwise add site exceptions]
   // user_pref("javascript.options.wasm", true); // 2422 optional [some platforms may require this]
user_pref("dom.webaudio.enabled", true); // 2510

/* 2022: enable screensharing ***/
user_pref("media.getusermedia.screensharing.enabled", true);
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.getusermedia.audiocapture.enabled", true);

/* override recipe: FF87+ use Total Cookie Protection [Custom Mode] ***/
user_pref("privacy.firstparty.isolate", false); // 4001
user_pref("network.cookie.cookieBehavior", 5); // 2701
  // user_pref("browser.contentblocking.category", "custom"); // 2701 user.js default
  // user_pref("privacy.trackingprotection.enabled", true); // 2710 user.js default
  // user_pref("privacy.trackingprotection.socialtracking.enabled", true); // 2711 user.js default


// From: https://github.com/black7375/Firefox-UI-Fix/blob/photon-style/user.js
// ** Theme Related Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar
// user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// ** Useful Options ***********************************************************
// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Enable proton
user_pref("browser.proton.enabled", false);
