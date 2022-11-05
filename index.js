const ical = require('node-ical');

module.exports = () => {
  const events = ical.sync.parseFile('https://www.stxavier.org/calendar/calendar_25.ics');

  const data = {
    "files": [
      {
        "title": "St X Connect JSON Feed",
        "enddate": "enddate",
        "version": "https://jsonfeed.org/version/1.1",
        "feed_url": "https://example.org/feed.json",
        "startdate": "startdate",
        "description": "description",
        "external_ID": "external_ID",
        "home_page_url": "https://example.org/",
        "registrationoptions": "registrationoptions",
        "items": [
          {
            "name": "Freshmen Football Meeting",
            "enddate": "2022-11-15T22:00:00.0000000Z",
            "extratest": "",
            "startdate": "2022-11-15T22:00:00.0000000Z",
            "description": "test description",
            "external_ID": 1,
            "registrationoptions": ""
          }
        ]
      }
    ]
  }


  







  return events;
}


