// import Image from "next/image";
// import Mockup from "@/app/ui/home/mockup";
// import Avatar from "@/app/ui/home/avatar";
import TechPost from "@/app/ui/home/tech-post";
import LatestPost from "@/app/ui/home/new-post";
import CategoryPost from "@/app/ui/home/category-post";
import InterestingPost from "@/app/ui/home/interesting-post";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { HomePageSkeleton } from "@/app/ui/home/skeletons-home";
import { fetchAllPostCategories } from "@/lib/data-post";
import {
  CategoryPostSkeleton,
  InterestingPostSkeleton,
  LatestPostSkeleton,
  TechPostsSkeleton
} from "@/app/ui/home/skeletons-home";

export default async function Page() {
  return (
    <Suspense fallback={<HomePageSkeleton/>}>
        {/* New post */}
        <Suspense fallback={<LatestPostSkeleton/>}>
          <LatestPost/>
        </Suspense>
        {/* Tech Post */}
        <Suspense fallback={<TechPostsSkeleton/>}>
          <TechPost/>
        </Suspense>
        {/* Categories */}
        <Suspense fallback={<CategoryPostSkeleton/>}>
          <CategoryPost/>
        </Suspense>
        {/* Interesting post */}
        <Suspense fallback={<InterestingPostSkeleton/>}>
          <InterestingPost/>
        </Suspense>
    </Suspense>
  )
}
