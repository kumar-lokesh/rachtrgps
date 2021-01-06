import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
  "id" : 1,
  "name" : "Office 1",
  "date" : new Date('12/30/2020'),
  "distance" : 16.2,
  "comments" : "Nice day, cool temps",
  "gpxData": '../../assets/gpx/1.gpx'
},
{
   "id": 2,
   "name": 'Office 2',
   "date": new Date('12/31/2020'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 1.2,
   "comments": 'Cool and windy.'
 },
 {
    "id": 3,
    "name": 'Home',
    "date": new Date('06/05/2020'),
    "gpxData": '../../assets/gpx/3.gpx',
    "distance": 3.2,
    "comments": 'Evening run.'
    },
//  {
//    "id": 4,
//    "name": 'Lake Shore',
//    "date": new Date('06/08/2017'),
//    "gpxData": '../../assets/gpx/4.gpx',
//    "distance": 8.4,
//    "comments": 'Cool and windy by the lake.'
//  }
]