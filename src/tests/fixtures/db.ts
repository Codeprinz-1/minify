import Link from "../../models/link";

export const id1: string = "shgeiutongipstoietiyuti";
export const id2: string = "eorieopnldsoiyetngosytiy";
export const secret1: string = "teiuyont";
export const secret2: string = "shtoeiyth";

const testLInk1: LinkType = {
  _id: id1,
  url: "www.google.com",
  secret: secret1,
  createdAt: Date.now(),
  expiryDate: "2020-01-01",
};

const testLink2: LinkType = {
  _id: id2,
  url: "www.google.com",
  secret: secret2,
  createdAt: Date.now(),
  expiryDate: "2023-01-01",
};

export const setUpDatabase = async () => {
  await Link.deleteMany();
  await new Link(testLInk1).save();
  await new Link(testLink2).save();
};
