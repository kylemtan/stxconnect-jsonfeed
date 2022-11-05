const ical = require("node-ical");

ical.fromURL(
  "https://www.stxavier.org/calendar/calendar_25.ics",
  {},
  function (err, data) {
    for (let i in data) {
      if (data[i].uid) {
        db.files[0].items.push({
          name: data[i].summary,
          enddate: data[i].end,
          startdate: data[i].start,
          description: data[i].description,
          external_ID: data[i].uid,
          registrationoptions: "",
        });
      }
    }
  }
);

db = {
  files: [
    {
      title: "St X Connect JSON Feed",
      enddate: "enddate",
      version: "https://jsonfeed.org/version/1.1",
      feed_url: "https://example.org/feed.json",
      startdate: "startdate",
      description: "description",
      external_ID: "external_ID",
      home_page_url: "https://example.org/",
      registrationoptions: "registrationoptions",
      items: [],
    },
  ],
};

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(db, { foreignKeySuffix: "_id" });
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
