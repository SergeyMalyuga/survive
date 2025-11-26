export enum AppRoutes {
  MAIN = '',
}

export enum SwiperType {
  HERO = 'hero',
  STORY = 'story',
}

export const DetailsTabIds = {
  SURVIVE: 'details-tab-1',
  ALLIES: 'details-tab-2',
  AUDIENCE: 'details-tab-3',
} as const;

export type DetailsTabId = (typeof DetailsTabIds)[keyof typeof DetailsTabIds];
