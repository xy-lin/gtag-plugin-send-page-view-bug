module.exports = {
  siteMetadata: {
    title: `gtag plugin sent-page-view bug`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-xxxxxx",
          "AW-xxxxxx", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          
          //Seem we are not able to set this parameter
          send_page_view: true,
          
          cookie_expires: 123,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
};
