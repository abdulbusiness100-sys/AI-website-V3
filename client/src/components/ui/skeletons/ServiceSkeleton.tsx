import { Skeleton } from "@/components/ui/skeleton";

export function ServiceCardSkeleton() {
  return (
    <div className="bg-[#262626] p-6 rounded-lg shadow-md border border-[#333333] animate-pulse">
      <div className="w-14 h-14 bg-gray-700 rounded-full mb-4"></div>
      <Skeleton className="h-6 w-2/3 mb-2 bg-gray-700" />
      <Skeleton className="h-4 w-5/6 mb-3 bg-gray-700" />
      <Skeleton className="h-4 w-1/3 bg-gray-700" />
    </div>
  );
}

export function ServicesSectionSkeleton() {
  return (
    <section className="py-16 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-3 bg-gray-700" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto bg-gray-700" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
        </div>
        
        <div className="text-center mt-10">
          <Skeleton className="h-10 w-36 mx-auto bg-gray-700" />
        </div>
      </div>
    </section>
  );
}

export function FeatureCardSkeleton() {
  return (
    <div className="bg-[#F8F8F8] p-5 rounded-lg animate-pulse">
      <div className="w-10 h-10 bg-gray-300 rounded-full mb-4"></div>
      <Skeleton className="h-6 w-2/3 mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

export function DarkFeatureCardSkeleton() {
  return (
    <div className="bg-[#1A1A1A] p-5 rounded-lg animate-pulse">
      <div className="w-10 h-10 bg-gray-700 rounded-full mb-4"></div>
      <Skeleton className="h-6 w-2/3 mb-2 bg-gray-700" />
      <Skeleton className="h-4 w-5/6 bg-gray-700" />
    </div>
  );
}

export function FeaturesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <DarkFeatureCardSkeleton />
      <FeatureCardSkeleton />
      <FeatureCardSkeleton />
      <DarkFeatureCardSkeleton />
    </div>
  );
}

export function MembershipCardSkeleton() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200 animate-pulse">
      <div className="flex justify-between items-center mb-5">
        <Skeleton className="h-8 w-1/3" />
        <div className="bg-gray-300 px-3 py-1 rounded-full h-6 w-24"></div>
      </div>
      <Skeleton className="h-4 w-5/6 mb-3" />
      <Skeleton className="h-4 w-full mb-3" />
      <Skeleton className="h-4 w-4/6 mb-5" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="bg-[#F8F8F8] p-5 rounded-lg shadow-sm relative animate-pulse">
      <div className="text-gray-300 text-3xl absolute -top-3 -left-1">"</div>
      <Skeleton className="h-4 w-full mb-2 mt-3" />
      <Skeleton className="h-4 w-5/6 mb-5" />
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <Skeleton className="h-4 w-24 mb-1" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}