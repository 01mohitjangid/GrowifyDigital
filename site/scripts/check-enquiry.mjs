import assert from "node:assert/strict";
import { validateEnquiry } from "../lib/enquiry.ts";

const topics = ["sales-support"];
const good = { name: "Asha", email: "asha@brand.com", brand: "Asha Label", service: "sales-support", message: "Hi" };

assert.equal(validateEnquiry(good, topics).ok, true);
assert.equal(validateEnquiry({ ...good, name: "  Asha  " }, topics).data.name, "Asha");
assert.equal(validateEnquiry({ ...good, service: "" }, topics).ok, true);
assert.equal(validateEnquiry({ ...good, name: " " }, topics).ok, false);
assert.equal(validateEnquiry({ ...good, email: "not-an-email" }, topics).ok, false);
assert.equal(validateEnquiry({ ...good, service: "made-up" }, topics).ok, false);
assert.equal(validateEnquiry({ ...good, website: "spam.example" }, topics).spam, true);
assert.equal(validateEnquiry({ ...good, email: `${"a".repeat(200)}@brand.com` }, topics).ok, false);
assert.equal(validateEnquiry({ ...good, message: "x".repeat(2000) }, topics).ok, true);
assert.equal(validateEnquiry({ ...good, message: "x".repeat(2001) }, topics).ok, false);
assert.equal(validateEnquiry({ ...good, name: 42 }, topics).ok, false);
assert.equal(validateEnquiry(null, topics).ok, false);

console.log("enquiry checks passed");
