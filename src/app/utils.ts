// import { cache } from "react";
// import client from "../../tina/__generated__/client";
// import { IEvent } from "@/components/Event";
// import { StaticImageData } from "next/image";

// export const getPageData = cache(async (id: string) => {
//   const item = await client.queries.pages({ relativePath: id });
//   return item;
// });

// export const getBandMembers = async () => {
//   const allBandMembers = await client.queries.bandMembersConnection();
//   if (allBandMembers?.data?.bandMembersConnection?.edges) {
//     const fetchedBandMembers =
//       allBandMembers?.data?.bandMembersConnection?.edges.map((bandMember) => {
//         return {
//           title: bandMember?.node?.title,
//           image: bandMember?.node?.image,
//           body: bandMember?.node?.bodyText,
//           socialMedia: bandMember?.node?.socialMediaUrls?.map(
//             (socialMedia, ind) => {
//               return {
//                 platform: socialMedia?.platform,
//                 url: socialMedia?.url,
//               };
//             }
//           ),
//         };
//       });
//     return fetchedBandMembers;
//   }
//   return [];
// };

// export const getEvents = async (): Promise<IEvent[]> => {
//   const allEvents = await client.queries.eventsConnection();
//   if (allEvents?.data?.eventsConnection?.edges) {
//     const fetchedEvents: IEvent[] =
//       allEvents?.data?.eventsConnection?.edges.map((event) => {
//         return {
//           title: event?.node?.title as string,
//           image: event?.node?.image as unknown as StaticImageData,
//           date: event?.node?.date as string,
//           // time: event?.node?.time as string,
//           ticketUrl: event?.node?.ticketUrl as string,
//         };
//       });
//     return fetchedEvents;
//   }
//   return [];
// };
