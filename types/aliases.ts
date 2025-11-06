import { Schema } from "./schema";

// A few useful aliases to Directus' generated Typescript definitions.

export type Association = any;
export type AssociationMembership = Schema["association_memberships"][0];
export type AssociationPartner = Schema["association_partners"][0];
export type AssociationPole = Schema["association_poles"][0];
export type AssociationTranslation = Schema["association_translations"][0];
export type Artist = Schema["artists"][0];
export type Commission = Schema["commissions"][0];
export type CommissionMembership = Schema["commission_memberships"][0];
export type Member = Schema["members"][0];
export type News = Schema["news"][0];
export type Partner = Schema["partners"][0];
export type PartnerCategory = Schema["partner_category"][0];
export type SocialLink = Schema["social_links"][0];
export type PublicFiles = Schema["association_public_files"][0];
export type SaveTheDate = any;
export type SaveTheDateCell = Schema["std_cell"][0];
export type Subsonic = any;
export type ICBD = any;
export type ICBDSpeaker = Schema["icbd_speakers"][0];
export type ICBDActivity = Schema["icbd_activities"][0];
export type ICBDPhd = Schema["icbd_phds"][0];
export type ICBDSpeakerActivityRelation =
  Schema["icbd_activities_icbd_speakers"][0];
export type Registration = Schema["registrations"][0];
export type Event = Schema["events"][0];
export type ICBDActivityRegistration =
  Schema["icbd_activities_registrations"][0];
export type GameStar = any;
export type GameStarArticle = Schema["game_star_articles"][0];
export type GameStarEvent = Schema["game_star_events"][0];
export type GameStarProject = Schema["game_star_projects"][0];
export type GameStarSocialLink = Schema["game_star_social_links"][0];
