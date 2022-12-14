/**
 * @module cooling-center/coolingCenter
 */

import nyc from 'nyc-lib/nyc'
import Content from 'nyc-lib/nyc/Content'
import App from './App'

/**
 * @private
 * @const {string} 
 */ 
const cacheBust = nyc.cacheBust(5)

/**
* @desc Constants
* @public
* @const {Object<string, string>}
*/
const coolingCenter = {
  REFRESH_MINS: 5, /* set REFRESH_MINS in env to change - unset for 5 minute default */
  CONTENT_URL: 'data/content.csv',
  CENTER_UPLOADER_URL: 'data/center.csv',
  CENTER_FME_URL: '/data/csv/cooling-center/center.csv',
  GEOCLIENT_URL: 'https://maps.nyc.gov/geoclient/v2/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example',
  DIRECTIONS_URL: 'https://maps.googleapis.com/maps/api/js?&sensor=false&libraries=visualization',
  DESCRIPTION_HTML: '<p>New York City opens cooling centers in air-conditioned public facilities for those who experience physical discomfort in a heat wave.</p>'
    + '<p>To find a cooling center, simply type your address or intersection into the search field on the upper-left corner of the map and then hit “Enter”; or zoom and pan the map to your neighborhood location.</p>'
    + '<p>To search or view accessible centers, click the Accessible button below; click All Centers to switch back to all centers.</p>'
    + '<p>To search or view pet friendly centers, click the Pet Friendly button below; click All Centers to switch back to all centers.</p>'
    + '<p><b>NOTE:</b> Please check this site daily. Cooling centers may change hours of operation.</p>'
    + '<p><a href="https://www1.nyc.gov/site/em/ready/extreme-heat.page">Learn more about ways to stay cool.</a></p>',
  status: (app) => {
    Content.loadCsv({
      url: `${coolingCenter.CONTENT_URL}?${nyc.cacheBust(5)}`
    }).then(content => {
      if (content.message('active') === 'no') {
        coolingCenter.redirect(`inactive.html?${nyc.cacheBust(5)}`)
      } else if (!app) {
        new App(content)
        coolingCenter.automation = content.message('automation')
      } else if (content.message('automation') !== coolingCenter.automation) {
        coolingCenter.redirect('./')
      }
    })
  },
  redirect: (url) => {
    window.location.href = url
  }
}

export default coolingCenter