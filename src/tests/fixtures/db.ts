import Link from "../../models/link";

export const id1: string = "shgeiutongipstoietiyuti";
export const id2: string = "eorieopnldsoiyetngosytiy";
export const secret1: string = "teiuyont";
export const secret2: string = "shtoeiyth";

const testLInk1: Link = {
  _id: "sityentieytdityeoty",
  url: "www.google.com",
  secret: secret1,
  createDate: Date.now(),
  daysToLive: -1,
};

const testLink2: Link = {
  _id: "eityoendoiteoistheiypeui",
  url: "www.google.com",
  secret: secret2,
  createDate: Date.now(),
  daysToLive: 1,
};

export const setUpDatabase = async () => {
  await Link.deleteMany();
  await new Link(testLInk1).save();
  await new Link(testLink2).save();
};
