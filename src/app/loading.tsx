import { SkeletonCard } from '@/components';

const Loading = () => {
  return (
    <div className="mx-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </div>
  );
};

export default Loading;
