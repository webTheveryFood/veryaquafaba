import { localePage } from '../../../../lib/site-page';

export const dynamicParams = true;
export const revalidate = false;

const { generateStaticParams, generateMetadata, Page } = localePage('fr');
export { generateStaticParams, generateMetadata };
export default Page;
