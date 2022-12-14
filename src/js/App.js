/**
 * @module cooling-center/App
 */

import $ from 'jquery'
import coolingCenter from './coolingCenter'
import FinderApp from 'nyc-lib/nyc/ol/FinderApp'
import GeoJson from 'ol/format/GeoJSON'
import CsvPoint from 'nyc-lib/nyc/ol/format/CsvPoint'
import decorations from './decorations'
import facilityStyle from './facility-style'
import Source from 'ol/source/Vector'
import IconArcGis from 'nyc-lib/nyc/ol/style/IconArcGis'
import Translate from 'nyc-lib/nyc/lang/Translate'
import message from './message'
import nyc from 'nyc-lib/nyc'

class App extends FinderApp {
  /**
   * @desc Create an instance of App
   * @public
   * @constructor
   * @param {module:nyc-lib/nyc/Content~Content} content The cc content
   * @param {string} url The cc data URL
   */
  constructor(content) {
    let format
    const arcGisUrl = content.message('cc_url')
    let url = arcGisUrl
    if (url === '') {
      if (content.message('automation') === 'yes') {
        url = `${coolingCenter.CENTER_FME_URL}?${nyc.cacheBust(5)}`
      } else {
        url = `${coolingCenter.CENTER_UPLOADER_URL}?${nyc.cacheBust(5)}`
      }
      format = new CsvPoint({
        x: 'X',
        y: 'Y',
        dataProjection: 'EPSG:2263'
      })
    } else {
      format = new GeoJson({
        dataProjection: 'EPSG:2263',
        featureProjection: 'EPSG:3857'
      })
    }
    super({
      title: '<span class=cc_title>Cooling Center Finder</span>',
      facilityFormat: format,
      facilityStyle: facilityStyle.pointStyle,
      decorations: [{content, facilityStyle}, decorations.decorations],
      facilityUrl: url,
      facilityTabTitle: '<span class=btn_cooling_centers>Cooling Centers</span>',
      facilitySearch: { displayField: 'search_label', nameField: 'search_name' },
      geoclientUrl: coolingCenter.GEOCLIENT_URL,
      directionsUrl: coolingCenter.DIRECTIONS_URL,
      filterChoiceOptions: [
        {
          title: '<span class=pop_type>Facility Type</span>',
          radio: false,
          choices: [
            {name: 'FACILITY_TYPE', values: ['Community center'], label: '<span class=legend_comm>Community Center</span>', checked: true, icon: true},
            {name: 'FACILITY_TYPE', values: ['Senior center'], label: '<span class=legend_senior>Senior Center</span>', checked: true, icon: true},
            {name: 'FACILITY_TYPE', values: ['Cornerstone Program'], label: '<span class=legend_cornerstone>Cornerstone Program</span>', checked: true, icon: true},
            {name: 'FACILITY_TYPE', values: ['Library'], label: '<span class=legend_library>Library</span>', checked: true, icon: true},
            {name: 'FACILITY_TYPE', values: ['School'], label: '<span class=legend_school>School</span>', checked: true, icon: true},
            {name: 'FACILITY_TYPE', values: ['Other'], label: '<span class=legend_other>Other</span>', checked: true, icon: true}
          ]
        },
        {
          title: 'Wheelchair Accessible',
          // toggle: true,
          choices: [
            // {name: 'HANDICAP_ACCESS', values: ['Yes', 'No'], label: 'All Centers', checked: true},
            {name: 'HANDICAP_ACCESS', values: ['Yes'], label: 'Accessible'}
          ]
        },
        {
          title: 'Pet Friendly',
          // toggle: true,
          choices: [
            // {name: 'PET_FRIENDLY', values: ['Yes', 'No'], label: 'All Centers', checked: true},
            {name: 'PET_FRIENDLY', values: ['Yes'], label: 'Pet Friendly'}
          ]
        }
      ],
      refresh: {
        minutes: coolingCenter.REFRESH_MINS, 
        callback: App.refreshCallback
      }
    })
    
    this.addLangClasses()
    
    this.facilityStyle = facilityStyle
    this.addDescription()
    if(arcGisUrl) {
      let iconurl = this.constructIconUrl(arcGisUrl)
      this.fetchIconUrl(iconurl)
    }
    $('.desc').append($('.filter-chc-1'))
    $('.desc').append($('.filter-chc-2'))
    $('.filter-1').remove()
    $('.filter-2').remove()
  }
  addLangClasses() {
    const acc_labels = this.filters.choiceControls[1].find('label')
    //$(acc_labels[0]).addClass('acc_all')
    $(acc_labels[0]).addClass('acc_only')
    const pet_labels = this.filters.choiceControls[2].find('label')
    //$(pet_labels[0]).addClass('acc_all')
    $(pet_labels[0]).addClass('pop_pet')
  }
  translateBtn() {
    return new Translate({
      target: '#map',
      languages: message.languages,
      messages: message.messages,
      button: true
    })
  }
  filterIconsUrl() {
    const renderer = this.facilityStyle.iconArcGis.renderer
    const filter = this.filters.choiceControls[0]
    const labels = filter.find('label')
    filter.choices.forEach((ch, i) => {
      renderer.uniqueValueInfos.forEach(info => {
        if (`${ch.values[0]},No` === info.value) {
          const sym = info.symbol
          $(labels[i]).prepend(`<img src="data:${sym.contentType};base64,${sym.imageData}">`)
        }
      })
    })
  }
  constructIconUrl(arcGisUrl) {
      let qstr = arcGisUrl.split('?')[1]
      let params = {}
      qstr.split('&').forEach(param => {
        const p = param.split('=')
        params[p[0]] = p[1]
      })
      let iconurl = arcGisUrl.split('?')[0].replace(/query/, '').concat(`?f=pjson&token=${params.token}`)
      return iconurl
  }
  fetchIconUrl(iconurl) {
    IconArcGis.fetch(iconurl).then(iconArcGis => {
      facilityStyle.iconArcGis = iconArcGis
      this.layer.setSource(new Source({}))
      this.layer.setSource(this.source)
      this.resetList()
      this.filterIconsUrl()
    })
  }
  addDescription() {
    let list = $('#facilities .list') 
    let desc = coolingCenter.DESCRIPTION_HTML
    let description = `<div class="description"><div class="desc"><div class="panel_note">${desc}</div></div></div>`
    $(description).insertBefore(list)
  }
  removeFeatures() {
    decorations.closedFeatures.forEach(feature => {
      this.source.removeFeature(feature)
    })
    decorations.closedFeatures.length = 0
  }
  ready(features) {
    this.removeFeatures()
    super.ready(this.source.getFeatures())
  }
}

App.refreshCallback = () => {
  coolingCenter.status(true)
  global.finderApp.removeFeatures()
}

export default App