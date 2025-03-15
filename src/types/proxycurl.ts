export interface LinkedInProfile {
  accomplishment_courses: any[];
  accomplishment_honors_awards: any[];
  accomplishments_organisations: any[];
  accomplishments_patents: any[];
  accomplishments_projects: {
    description: string;
    ends_at: string;
    starts_at: {
      day: number;
      month: number;
      year: number;
    };
    title: string;
    url: string;
  }[];
  accomplishments_publications: any[];
  accomplishments_test_scores: any[];
  activities: {
    activity_status: string;
    link: string;
    title: string;
  }[];
  articles: any[];
  background_cover_image_url: string;
  certifications: any[];
  city: string;
  connections: null;
  country: string;
  country_full_name: string;
  education: {
    degree_name: string | null;
    description: string | null;
    ends_at: {
      day: number;
      month: number;
      year: number;
    } | null;
    field_of_study: string | null;
    logo_url: string;
    school_linkedin_profile_url: string;
    starts_at: {
      day: number;
      month: number;
      year: number;
    } | null;
  }[];
  experiences: {
    company: string;
    company_linkedin_profile_url: string;
    description: string;
    ends_at: {
      day: number;
      month: number;
      year: number;
    } | null;
    location: string;
    logo_url: string;
    starts_at: {
      day: number;
      month: number;
      year: number;
    } | null;
    title: string;
  }[];
  first_name: string;
  full_name: string;
  groups: any[];
  headline: string;
  languages: any[];
  last_name: string;
  occupation: string;
  people_also_viewed: any[];
  profile_pic_url: string;
  public_identifier: string;
  recommendations: any[];
  similarly_named_profiles: any[];
  state: string;
  summary: string;
  volunteer_work: any[];
}