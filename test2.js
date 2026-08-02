const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dns.resolve4("google.com", (err, records) => {
  console.log(err || records);
});