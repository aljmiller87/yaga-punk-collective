import { cache } from "react";
import client from "../../tina/__generated__/client";

export const getPageData = cache(async (id: string) => {
  const item = await client.queries.pages({ relativePath: id });
  return item;
});

export const getBandMembers = async () => {
  const allBandMembers = await client.queries.bandMembersConnection();
  if (allBandMembers?.data?.bandMembersConnection?.edges) {
    const fetchedBandMembers =
      allBandMembers?.data?.bandMembersConnection?.edges.map((bandMember) => {
        return {
          title: bandMember?.node?.title,
          image: bandMember?.node?.image,
          body: bandMember?.node?.bodyText,
          socialMedia: bandMember?.node?.socialMediaUrls?.map(
            (socialMedia, ind) => {
              return {
                platform: socialMedia?.platform,
                url: socialMedia?.url,
              };
            }
          ),
        };
      });
    return fetchedBandMembers;
  }
  return [];
};
