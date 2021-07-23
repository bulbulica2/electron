const PAGES = {
  company: {
    id: 1,
    title: 'Company',
    location: '',
    subPages: [
      {
        id: 1,
        title: 'About us',
        location: 'about',
      },
      {
        id: 2,
        title: 'News',
        location: 'news',
      },
      {
        id: 3,
        title: 'Events',
        location: 'events',
      },
    ],
  },
  project: {
    id: 2,
    title: 'Project',
    location: 'project',
  },
  roadmap: {
    id: 3,
    title: 'Roadmap',
    location: 'roadmap',
  },
  portofolio: {
    id: 4,
    title: 'Portofolio',
    location: 'portofolio',
  },
  community: {
    id: 5,
    title: 'Community',
    location: 'community',
  },
  faq: {
    id: 6,
    title: 'Faq',
    location: 'faq',
  },
};

const API_ENDPOINT = '';

const API_ACTION_ENDPOINT = {};

const API_RESPONSE_MESSAGE = {};

export default {
  PAGES,
  API_ENDPOINT,
  API_ACTION_ENDPOINT,
  API_RESPONSE_MESSAGE,
};
