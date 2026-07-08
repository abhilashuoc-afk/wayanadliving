import BannerSlider from "@/components/BannerSlider";
import SocialBar from "@/components/SocialBar";
import CategoryCards from "@/components/CategoryCards";
import NewsSection from "@/components/NewsSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import ExploreListings from "@/components/ExploreListings";
import SocialHighlights from "@/components/SocialHighlights";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <BannerSlider lang={lang} />
      <SocialBar />
      <CategoryCards lang={lang} />
      <NewsSection lang={lang} />
      <UpcomingEvents lang={lang} />
      <ExploreListings lang={lang} />
      <SocialHighlights lang={lang} />
    </>
  );
}
