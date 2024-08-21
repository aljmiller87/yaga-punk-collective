import { cache } from 'react'
import client from '../../tina/__generated__/client';
 
export const getPageData = cache(async (id: string) => {
  const item = await  client.queries.pages({ relativePath: id });
  return item
})