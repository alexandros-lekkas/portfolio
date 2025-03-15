export interface LinkedInProfile {
  accomplishment_courses: any[];
  accomplishment_honors_awards: any[];
  accomplishment_organisations: any[];
  accomplishment_patents: any[];
  accomplishment_projects: {
    description: string;
    ends_at: string | null;
    starts_at: {
      day: number;
      month: number;
      year: number;
    };
    title: string;
    url: string;
  }[];
  accomplishment_publications: any[];
  accomplishment_test_scores: any[];
  activities: {
    activity_status: string;
    link: string;
    title: string;
  }[];
  articles: any[];
  background_cover_image_url: string;
  certifications: {
    authority: string;
    display_source?: string | null;
    ends_at: string | null;
    license_number?: string | null;
    name: string;
    starts_at: string | null;
    url?: string | null;
  }[];
  city: string;
  connections: number | null;
  country: string;
  country_full_name: string;
  education: {
    activities_and_societies?: string | null;
    degree_name: string | null;
    description: string | null;
    ends_at: {
      day: number;
      month: number;
      year: number;
    } | null;
    field_of_study: string | null;
    grade?: string | null;
    logo_url: string;
    school: string;
    school_facebook_profile_url?: string | null;
    school_linkedin_profile_url: string;
    starts_at: {
      day: number;
      month: number;
      year: number;
    } | null;
  }[];
  experiences: {
    company: string;
    company_facebook_profile_url?: string | null;
    company_linkedin_profile_url: string;
    description: string;
    ends_at: {
      day: number;
      month: number;
      year: number;
    } | null;
    location?: string | null;
    logo_url: string;
    starts_at: {
      day: number;
      month: number;
      year: number;
    } | null;
    title: string;
  }[];
  first_name: string;
  follower_count?: number | null;
  full_name: string;
  groups: any[];
  headline: string;
  languages: any[];
  last_name: string;
  occupation: string;
  people_also_viewed: any[];
  profile_pic_url: string;
  public_identifier: string;
  recommendations: string[];
  similarly_named_profiles: {
    link: string;
    location: string;
    name: string;
    summary: string | null;
  }[];
  state: string;
  summary: string;
  volunteer_work: any[];
}
