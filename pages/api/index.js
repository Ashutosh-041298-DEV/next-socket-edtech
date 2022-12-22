export {};
const { connect } = require("../../config/connect");

connect();

export default function handle(req, res) {
  res.status(200).json({ name: "jhon doe" });
}
